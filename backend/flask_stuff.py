from flask import Flask, request, jsonify
from flask_cors import CORS
from sentiment_analysis import DistilRoBERTa
from lang_chain import LangChain
from dotenv import load_dotenv
import os
import json
from transformers import pipeline

app = Flask(__name__)
CORS(app)
load_dotenv('./token.env')
NVIDIA_TOKEN = os.getenv('NVIDIA_TOKEN')
lang = LangChain(NVIDIA_TOKEN)
distil = DistilRoBERTa()
classifier = pipeline("text-classification", model="j-hartmann/emotion-english-distilroberta-base", return_all_scores=True)

# Example endpoint to receive data from the frontend
@app.route('/getMessage', methods=['POST'])
def send_data():
    received_data = request.get_json(force=True)
    print(f"Received data: {received_data}")
    body = received_data['body']
    message_dict = json.loads(body)
    response_message = lang.get_conversational_rag_chain(message_dict["message"], message_dict["guid"])
    score = distil.analyze(classifier, message_dict["message"], message_dict["score"], message_dict["msg_count"])
    response = {
        'message': response_message.content,
        'score': score
    }
    return jsonify(response)
