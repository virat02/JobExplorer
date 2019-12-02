from rest_framework import viewsets
from rest_framework.response import Response

from jobs.models import Job
from .serializers import JobSerializer


class JobViewSet(viewsets.ModelViewSet):
    serializer_class = JobSerializer
    queryset = Job.objects.all()
