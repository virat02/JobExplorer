from django.shortcuts import render
import requests


class ThirdPartyJobViewSet():

    def getJobs():
        url = 'https://jobs.github.com/positions.json'
        r = requests.get(url)
        data = r.json()
