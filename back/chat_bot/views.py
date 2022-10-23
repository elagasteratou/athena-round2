import os
import openai
import requests
from django.views import View
from rest_framework.response import Response

openai.api_key = os.getenv("OPENAI_API_KEY")

start_sequence = "\nAI:"
restart_sequence = "\nHuman: "

class ChatBotView(View):
    def get_good_energy_rating(self, request):
        endpoint = "https://api.openai.com/v1/completions"
        prompt = "The following is a conversation with an AI assistant. The assistant is helpful, informative, eco-friendly, and very friendly."
        response = openai.Completion.create(
          model="text-davinci-002",
          prompt=prompt,
          temperature=0.9,
          max_tokens=150,
          top_p=1,
          frequency_penalty=0,
          presence_penalty=0.6,
          stop=[" Human:", " AI:"]
        )
        requests.get(endpoint)
        return Response(response)
    def get_bad_energy_rating_heating(self, request):
        endpoint = "https://api.openai.com/v1/completions"
        prompt = "The following is a conversation with an AI assistant. The assistant is helpful, informative, eco-friendly, and very friendly."
        response = openai.Completion.create(
          model="text-davinci-002",
          prompt=prompt,
          temperature=0.9,
          max_tokens=150,
          top_p=1,
          frequency_penalty=0,
          presence_penalty=0.6,
          stop=[" Human:", " AI:"]
        )
        requests.get(endpoint)
        return Response(response)