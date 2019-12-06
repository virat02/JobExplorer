from django.shortcuts import render
from django.http import HttpResponse
import requests

from .models import Job, Company
from datetime import datetime


class ThirdPartyJobView():

    def populateJobs(self):
        languages = ["java", "python", "sql",
                     "javascript", "scala", "react", "angular"]
        job_id = 1
        company_id = 1
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
                    job = Job(job_id, job_uuid=result['id'],
                              type=result['type'],
                              created_at=datetime.strptime(
                        result['created_at'], '%a %b %d %H:%M:%S %Z %Y'),
                        location=result['location'],
                        title=result['title'],
                        description=result['description'],
                        how_to_apply=result['how_to_apply'],
                        language=language)

                    job_id = job_id + 1

                    company = Company(company_id,
                                      name=result['company'],
                                      website=result['company_url'],
                                      location=result['location'],
                                      logo=result['company_logo'],
                                      job=job)

                    company_id = company_id + 1

                    job.save()
                    company.save()

                currPageNumber = currPageNumber + 1
                payload = {'description': language, 'page': currPageNumber}

        return HttpResponse("Saved 1 job, company!")
