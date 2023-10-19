from flask import Flask, jsonify, request, render_template, session, send_from_directory
from database import dbinitialization
from database.models import *
from flask_restful import Api
from resources import routes
from flask_session import Session
from flask_cors import CORS

app = Flask(__name__, static_url_path='/static')
CORS(app, origins="http://localhost:3000", supports_credentials=True, allow_headers=["Content-Type", "Authorization"], methods=["OPTIONS", "GET", "POST", "PUT", "DELETE"])


app.secret_key="bsjvhusdhg5565645"

app.config["SESSION_TYPE"]="filesystem"
app.config["SESSION_PERMANENT"]=False
Session(app)

app.config['DEBUG'] = True

# Flask instance and mongo db url configuration
app.config['MONGODB_SETTINGS'] = {
    'host': 'mongodb://localhost:27017/DocFinder'}

# initialize db
dbinitialization.initialize_db(app)

# flask API instance creation
api = Api(app)

# initialize routes
routes.initialize_routes(api)


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
@app.route('/static/<path:path>')
def send_static(path):
    return send_from_directory('static', path)
def serve_react_app(path):
    if path == '':
        return send_from_directory('frontend/build', 'index.html')
    else:
        return send_from_directory('frontend/build', path)
    


@app.route('/api/patientLogin', methods=['POST'])
def patientLogin():
    try:
        email = request.form['email']
        password = request.form['password']
        login_check = patients.objects(email=email, password=password).first()
        if login_check:
            approval_check = patients.objects(email=email, password=password, status='approved').first()
            rejection_check = patients.objects(email=email, password=password, status='rejected').first()
            if approval_check:
                # You can return JSON response indicating success
                return jsonify({'message': 'Login successful', 'patient_id': str(login_check.id)})

            elif rejection_check:
                return jsonify({'message': 'Sorry to inform that, your registration request has been rejected.'}), 403
            else:
                return jsonify({'message': 'Your Registration Request is PENDING at the moment.'}), 403
        else:
            return jsonify({'message': 'No account found with these credentials.'}), 404
    except Exception as e:
        return jsonify({'message': f'Error occurred due to {str(e)}'}), 404


@app.route('/deletePatient/<id>', methods=['DELETE'])
def deletePatient(id):
    try:
        # Check if the patient record exists
        patients.objects(id=id).delete()
        return {"message": "Account deleted successfully"}, 200
    except Exception as e:
        return {"message": f"Error occurred: {str(e)}"}, 500



if __name__ == '__main__':
    app.run(debug=True)











