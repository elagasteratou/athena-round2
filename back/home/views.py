import os
from django.http import HttpResponse
from django import forms
from django.conf import settings
from django.shortcuts import render
import requests
from rest_framework import viewsets, views
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView


class HomeFinderView(APIView):
    postcode = forms.CharField(max_length=100)
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        # key = os.environ.get("EPC_BASIC_KEY", default="")
        # result = {}
        # print(key)
        # postcode = self.cleaned_data['postcode']
        #
        endpoint = 'https://epc.opendatacommunities.org/api/v1/domestic/search?postcode={postcode}/'
        # # url = endpoint.format(postcode=postcode)
        headers = {'Authorization': 'Basic amVzc2llQGN5YnNhZmUuY29tOjllMzkyMmU2MmY1MzVlN2VjZmY2NGIwMTM4YWFkN2NmZmI2Y2Q0Zjg=', 'Accept': 'application/json'}
        # print(headers)
        # # response = requests.get(url, headers=headers).json()
        # # response =
        r = requests.get(endpoint, headers=headers)
        print(r.headers)
        content = {
            'user': str(request.user),  # `django.contrib.auth.User` instance.
            'auth': str(request.auth),  # None
        }
        return Response(content)


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
