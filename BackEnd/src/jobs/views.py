from django.shortcuts import render
import requests

from .models import Job


class ThirdPartyJobView():

    def populateJobs():
        url = 'https://jobs.github.com/positions.json'
        r = requests.get(url)

        results = r.json()
        # for result in results:
        #     job = Job(result., )
        #     job.save()

        return
