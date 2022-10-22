from django import forms
from django.conf import settings
from django.shortcuts import render
import requests
from rest_framework import viewsets


class HomeFinderView(viewsets.ModelViewSet):
    postcode = forms.CharField(max_length=100)

    def search(self):
        result = {}
        postcode = self.cleaned_data['postcode']
        endpoint = 'https://epc.opendatacommunities.org/api/v1/domestic/search/?{postcode}/'
        url = endpoint.format(source_lang='en', postcode=postcode)
        headers = {'authorization': settings.EPC_BASIC_KEY, 'accept': 'application/json'}
        response = requests.get(url, headers=headers)
        if response.status_code == 200:  # SUCCESS
            result = response.json()
            result['success'] = True
            save_to_user(result)
        else:
            result['success'] = False
            if response.status_code == 404:  # NOT FOUND
                result['message'] = 'No entry found for "%s"' % word
            else:
                result['message'] = 'The Oxford API is not available at the moment. Please try again later.'
        return result

    def select_home(request):
        response = requests.get('https://epc.opendatacommunities.org/api/v1/domestic/search')
        results = response.json()
        return render(request, 'core/home.html', {
            'ip': geodata['ip'],
            'country': geodata['country_name']
        })