import os
import json
from django.http import HttpResponse
from django import forms
from django.conf import settings
from django.shortcuts import render
import requests
from rest_framework import viewsets, views
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView


class HomeFinderView(APIView):
    postcode = forms.CharField(max_length=100)
    authentication_classes = [BasicAuthentication]
    permission_classes = [AllowAny]

    # @api_view(["get"])
    def search(self, request, *args, **kwargs):
        endpoint = "https://epc.opendatacommunities.org/api/v1/domestic/search?postcode={postcode}/"
        key = os.getenv("EPC_BASIC_KEY")
        headers = {"Authorization": "Basic " + str(key)}

        response = requests.get(endpoint.format(postcode=request), headers=headers)

        return Response(response)

    def get(self, request, *args, **kwargs):
        """mock as a test, before configuring authentication for above search function"""

        json = (open("athena-round2/back/home/data.json"))
        data = json.load(json)

        return Response(data)

    # def select_home
    # def select_home(request):
    #     response = requests.get('https://epc.opendatacommunities.org/api/v1/domestic/search')
    #     results = response.json()
    #     return render(request, 'core/home.html', {
    #         'ip': geodata['ip'],
    #         'country': geodata['country_name']
    #     })

    # def create_home_profile(
    #         *, message_inbox_id: int, user_id: int, protect_id: int, protect_answer_id: int
    # ) -> Optional["Home"]:
    #     protect_response_serializer = IntegrationProtectResponseSerializerR1(
    #         data={
    #             "user": user_id,
    #             "protect": protect_id,
    #             "protect_question_answer": protect_answer_id,
    #         }
    #     )
    #     if not protect_response_serializer.is_valid():
    #         logger.error(
    #             f"Some errors occurred creating the protect response for the "
    #             f"ProtectMessageInbox id: {message_inbox_id}. {protect_response_serializer.errors}"
    #         )
    #         return None
    #     return protect_response_serializer.save()
