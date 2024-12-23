from data.database_functions_quizes import (
    get_participant,
    create_participant,
    get_quiz,
    get_question,
    get_participant_answers,
    add_participant_answer
)
import time

def add_participant(phone_number, quiz_id):
    """
    Adds a new participant to a quiz.
    """
    if not phone_number or not quiz_id:
        return {'error': 'Phone number and Quiz ID are required.'}, 400

    if existing_participant := get_participant(phone_number):
        return {'error': 'Participant with this phone number already exists in the quiz.'}, 400

    quiz = get_quiz(quiz_id)
    if not quiz:
        return {'error': 'Quiz not found.'}, 404

    create_participant(phone_number, quiz_id)
    return {'message': 'Participant added successfully.'}, 201

def answer_current_question(participant_phone, answer_index):
    """
    Records an answer for the participant's current question.
    """
    if not validate_answer_index(answer_index):
        return {'error': 'Invalid answer index. Must be between 1 and 4.'}, 400

    participant = get_participant(participant_phone)
    if not participant:
        return {'error': 'Participant not found.'}, 404

    quiz = get_quiz(participant['quiz_id'])
    if not quiz or not quiz.get('current_question_id'):
        return {'error': 'No active question for this quiz.'}, 400

    current_question_id = quiz['current_question_id']
    if has_already_answered(participant_phone, current_question_id):
        return {'error': 'You have already answered this question.'}, 400

    question = get_question(current_question_id)
    if not question:
        return {'error': 'Current question not found.'}, 404

    is_correct = (answer_index == question['correct_option'])
    time_taken = calculate_time_taken(quiz)

    add_participant_answer(participant_phone, current_question_id, is_correct, time_taken)

    return {'message': 'Answer recorded successfully.', 'is_correct': is_correct}, 200

def validate_answer_index(answer_index):
    return answer_index in [1, 2, 3, 4]

def has_already_answered(participant_phone, current_question_id):
    existing_answers = get_participant_answers(participant_phone)
    return any(answer['question_id'] == current_question_id for answer in existing_answers)

def calculate_time_taken(quiz):
    if question_start_time := quiz.get('question_start_time'):
        return int(time.time()) - question_start_time
    return 0