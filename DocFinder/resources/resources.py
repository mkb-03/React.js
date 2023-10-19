from flask import request, jsonify, session
from flask_restful import Resource
from database.models import patients, doctors, appointments
from bson import ObjectId

class PatientAPI(Resource):
    def get(self, data):
        try:
            patient = patients.objects(status=data).to_json()
            return jsonify(patient), 200
        except Exception as e:
            return {'message': "Error occurred while fetching patients"}, 500

    def post(self):
        try:
            data = request.json  # Assume you are sending JSON data from your React front-end

            # Get data from the JSON request
            name = data["name"]
            age = data['age']
            city = data['city']
            email = data['email']
            phone_no = data['phone_no']
            password = data['password']

            # Check if the email or phone number already exist in the database
            if patients.objects(email=email).first() or doctors.objects(email=email).first():
                return {'error': 'This Email is already registered'}, 400

            if patients.objects(phone_no=phone_no).first() or doctors.objects(phone_no=phone_no).first():
                return {'error': 'This Phone no. is already registered'}, 400

            p = patients(name=name, age=age, city=city, email=email, phone_no=phone_no, password=password, status="pending").save()

            # Return a success message
            return {'message': 'Registration pending'}, 200

        except Exception as e:
            return {'message': str(e)}, 400

    def put(self, id, status):
        try:
            patients.objects(id=id).update(status=status)
            return {"message": f"Patient registration {status}"}, 200
        except Exception as e:
            return {"message": "Invalid patient ID"}, 400

    def delete(self):
        try:
            p_id = session.get("patient_id")
            # Check if the patient record exists
            patients.objects(id=p_id).delete()
            return {"message": "Account deleted successfully"}, 200

        except Exception as e:
            return {"message": f"Error occurred: {str(e)}"}, 500

class DoctorAPI(Resource):
    def get(self, data):
        try:
            doctor = doctors.objects(status=data).to_json()
            return jsonify(doctor), 200
        except Exception as e:
            return {'message': "Error occurred while fetching doctors"}, 500

    def post(self):
        try:
            data = request.get_json()

            # Extract data from the JSON object
            name = data['name']
            gender = data['gender']
            speciality = data['speciality']
            experience = float(data['experience'])
            hospital_name = data['hospital_name']
            city = data['city']
            email = data['email']
            phone_no = data['phone_no']
            password = data['password']

            # Check if the email or phone number already exist in the database
            if doctors.objects(email=email).first() or patients.objects(email=email).first():
                return {'error': 'This Email is already registered'}, 400

            if doctors.objects(phone_no=phone_no).first() or patients.objects(phone_no=phone_no).first():
                return {'error': 'This Phone no. is already registered'}, 400

            d = doctors(
                name=name, gender=gender, speciality=speciality,
                experience=experience, hospital_name=hospital_name,
                city=city, email=email, phone_no=phone_no,
                password=password, status="pending"
            ).save()

            # Return a success message
            return {'message': 'Registration pending'}, 200

        except Exception as e:
            return {'message': str(e)}, 400

    def put(self, id, status):
        try:
            doctors.objects(id=id).update(status=status)
            return {"message": f"Doctor registration {status}"}, 200
        except Exception as e:
            return {"message": "Invalid doctor ID"}, 400

    def delete(self):
        try:
            d_id = session.get("doctor_id")
            # Check if the patient record exists
            doctors.objects(id=d_id).delete()
            return {"message": "Account deleted successfully"}, 200
        except Exception as e:
            return {"message": f"Error occurred: {str(e)}"}, 500

class SearchDoctorsAPI(Resource):
    def get(self):
        try:
            specialty = request.args.get("specialty")
            ratings = float(request.args.get("ratings")) if request.args.get("ratings") else None
            city = request.args.get("city")

            results = search_doctors(specialty, ratings, city)
            return jsonify(results)
        except Exception as e:
            return {'message': f'Error occurred due to {str(e)}'}, 500

class AppointmentAPI(Resource):
    def get(self, data):
        try:
            # Retrieve patient_id from the session
            pid = session.get("patient_id")

            # Retrieve patient using the patient_id
            patient = patients.objects(id=pid).first()
            if not patient:
                return {"message": "Patient not found"}, 404

            p_name = patient.name

            # Query appointments for the given patient name and status (data)
            appointment_list = appointments.objects(patient_name=p_name, status=data).to_json()

            # Return the appointments as a JSON response
            return jsonify(appointment_list), 200

        except Exception as e:
            # Return the exception message as a JSON response
            return {"message": f"Error occurred while fetching appointments: {str(e)}"}, 500

    def post(self, data):
        try:
            data2 = request.get_json()
            patient_id = session.get('patient_id')
            appointment_date = data2.get("appointment_date")
            patient = patients.objects.get(id=patient_id)
            doctor = doctors.objects.get(id=data)
            status = "pending"
            appointment = appointments(patient_name=patient.name, doctor_name=doctor.name,
                                       appointment_date=appointment_date,
                                       status=status).save()
            return {"message": f"Appointment request sent successfully from {patient.name} to {doctor.name}."}, 200
        except Exception as e:
            return {"message": f"Error occurred due to {str(e)}"}, 500

    def delete(self, data):
        try:
            # Check if the appointment with the given ID exists in the database
            appointments.objects(id=data).delete()
            return {"message": "Appointment deleted successfully."}, 200

        except Exception as e:
            return {"message": f"Error occurred due to {str(e)}"}, 500

class DoctorsAPI(Resource):
    def post(self):
        try:
            data = request.get_json()
            email = data.get('email')
            password = data.get('password')

            # Use the correct model name (Doctor) and access its manager (objects)
            login_check = doctors.objects.filter(email=email, password=password).first()

            if login_check:
                status = login_check.status
                if status == 'approved':
                    session["doctor_id"] = login_check.id
                    # Return a JSON response with a success message and redirection URL
                    return {'message': 'Login successful.', 'redirect': '/doctorMainPage'}, 200
                elif status == 'rejected':
                    # Return a JSON response with a rejection message and appropriate status code
                    return {'message': 'Sorry to inform that, your registration request has been rejected.'}, 403
                else:
                    # Return a JSON response with a pending message and appropriate status code
                    return {'message': 'Your Registration Request is PENDING at the moment.'}, 403
            else:
                # Return a JSON response with an account not found message and appropriate status code
                return {'message': 'No account found with these credentials.'}, 404
        except Exception as e:
            # Return a JSON response with an error message and appropriate status code
            return {'message': f'Error occurred due to {str(e)}'}, 500

    def delete(self, d_id):
        try:
            # Check if the patient record exists
            doctors.objects(id=d_id).delete()
            return {"message": "Account deleted successfully"}, 200
        except Exception as e:
            return {"message": f"Error occurred: {str(e)}"}, 500

class AppointmentAPI2(Resource):
    def get(self, data):
        try:
            # Retrieve patient_id from the session
            d_id = session.get("doctor_id")

            # Retrieve patient using the patient_id
            doctor = doctors.objects(id=d_id).first()
            if not doctor:
                return {"message": "Doctor not found"}, 404

            d_name = doctor.name

            # Query appointments for the given patient name and status (data)
            appointment_list = appointments.objects(doctor_name=d_name, status=data).to_json()

            # Return the appointments as a JSON response
            return jsonify(appointment_list), 200

        except Exception as e:
            # Return the exception message as a JSON response
            return {"message": f"Error occurred while fetching appointments: {str(e)}"}, 500

    def put(self, data):
        try:
            ID = data
            doctorID = session.get("doctor_id")
            data3 = request.get_json()
            doctor = doctors.objects(id=doctorID).first()
            appointments.objects(id=ID, doctor_name=doctor.name).update(status=data3['status'])
            return {"message": f"Appointment is successfully updated."}, 200

        except Exception as e:
            return {"message": f"Error occurred due to {str(e)}"}, 500

def search_doctors(speciality, ratings, city):
    try:
        query = {}
        if speciality:
            query["speciality"] = speciality
        if ratings:
            query["ratings"] = ratings
        if city:
            query["city"] = city

        if query:
            filtered_doctors = doctors.objects(**query)

            if filtered_doctors:
                return filtered_doctors.to_json()
            else:
                return {'message': "No such results found."}
        else:
            return {'message': "Please enter one of the fields to search"}
    except Exception as e:
        return {'message': f'Error occurred due to {str(e)}'}, 500
