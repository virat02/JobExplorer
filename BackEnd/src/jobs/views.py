from django.shortcuts import render
from django.http import HttpResponse
import requests

from .models import Job, Company
from datetime import datetime


class ThirdPartyJobView():

    def populateJobs(self):
        languages = ["java", "python", "sql",
                     "javascript", "scala", "react", "angular"]
        for language in languages:

            url = 'https://jobs.github.com/positions.json'
            currPageNumber = 1
            payload = {'description': language, 'page': currPageNumber}

            while True:
                r = requests.get(url, params=payload)
                results = r.json()
                if(len(results) == 0):
                    break

                for result in results:

                    company = None
                    try:
                        company = Company.objects.get(name=result['company'])
                    except Company.DoesNotExist:
                        company = Company(
                            # id=company_id,
                            name=result['company'],
                            website=result['company_url'])

                    job = None
                    try:
                        job = Job.objects.get(job_uuid=result['id'])
                    except Job.DoesNotExist:
                        job = Job(
                            # id=job_id,
                            job_uuid=result['id'],
                            type=result['type'],
                            created_at=datetime.strptime(
                                result['created_at'],
                                '%a %b %d %H:%M:%S %Z %Y'),
                            location=result['location'],
                            title=result['title'],
                            description=result['description'],
                            how_to_apply=result['how_to_apply'],
                            language=language,
                            company=company)

                    company.save()
                    job.save()

                currPageNumber = currPageNumber + 1
                payload = {'description': language, 'page': currPageNumber}

        return HttpResponse("Saved all jobs and companies!")
