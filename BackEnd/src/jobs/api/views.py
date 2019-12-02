from rest_framework import viewsets
from rest_framework.response import Response

from jobs.models import Job
from .serializers import JobSerializer

# import requests


class JobViewSet(viewsets.ModelViewSet):
    serializer_class = JobSerializer
    queryset = Job.objects.all()


# class ThirdPartyJobViewSet(viewsets.ModelViewSet):

#     serializer_class = JobSerializer
#     queryset = get()

#     def get(self, request):
#         url = 'https://jobs.github.com/positions.json'
#         r = requests.get(url)
#         return r.json()
