from flask import Flask
from flask_cors import CORS
from data.database_functions import initialize_db
from api.auth_api import auth_api
from api.quizzes_interface_api import quizzes_interface_api
from api.quiz_service import quiz_service_api

import dotenv

dotenv.load_dotenv()

app = Flask(__name__)

CORS(app, resources={
    r"/*": {
        "origins": "*",
        "supports_credentials": True
    }
})

initialize_db()

app.register_blueprint(auth_api)
app.register_blueprint(quizzes_interface_api)
app.register_blueprint(quiz_service_api)


@app.route('/')
def route_default():
    return 'Welcome to Trivia Quiz API'

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)