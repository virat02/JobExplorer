from rest_framework import viewsets
from django_filters import rest_framework as filters
from rest_framework.filters import SearchFilter

from jobs.models import Job
from .serializers import JobSerializer


class JobViewSet(viewsets.ModelViewSet):
    __basic_fields = ('language', 'sponsorship_available', 'type', 'location')
    serializer_class = JobSerializer
    queryset = Job.objects.all()
    filter_backends = [SearchFilter, filters.DjangoFilterBackend]
    # search_fields = ['language', 'sponsorship_available', 'type', 'location']
    filter_fields = __basic_fields
    search_fields = __basic_fields
