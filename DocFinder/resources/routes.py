from .resources import *

def initialize_routes(api):
    api.add_resource(PatientAPI, "/patientAPI", '/patientAPI/<data>', '/patientAPI/<id>/<status>')
    api.add_resource(DoctorAPI, '/doctorAPI', '/doctorAPI/<data>', "/doctorAPI/<id>/<status>")
    api.add_resource(SearchDoctorsAPI, '/doctors/search')
    api.add_resource(AppointmentAPI, '/appointmentAPI/<data>')
    api.add_resource(AppointmentAPI2, '/appointmentAPI2/<data>')
    api.add_resource(DoctorsAPI, '/doctorLogin', '/doctorLogin/<d_id>')
    api.add_resource(PatientLoginAPI, '/patientLogin', '/patientLogin/<id>')
    




