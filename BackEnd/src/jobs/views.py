from django.shortcuts import render
from django.http import HttpResponse
import requests

from .models import Job
from datetime import datetime


class ThirdPartyJobView():

    def populateJobs(self):
        url = 'https://jobs.github.com/positions.json'
        r = requests.get(url)
        count = 0

        results = r.json()
        for result in results:
            job = Job(result['id'], result['type'],
                      datetime.strptime(
                          result['created_at'], '%a %b %d %H:%M:%S %Z %Y'),
                      result['location'],
                      result['title'],
                      result['description'],
                      result['how_to_apply'])

            count += 1
            if(count == 2):
                job.save()

        return HttpResponse("Saved 1 job!")
