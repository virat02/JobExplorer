from rest_framework import viewsets
from django_filters import rest_framework as filters
from rest_framework.filters import SearchFilter

from jobs.models import Job, CustomUser, Company
from .serializers import JobSerializer, UserSerializer, CompanySerializer


class JobViewSet(viewsets.ModelViewSet):
    __basic_fields = ('language', 'sponsorship_available', 'type', 'location')
    serializer_class = JobSerializer
    queryset = Job.objects.all()
    filter_backends = [SearchFilter, filters.DjangoFilterBackend]
    filter_fields = __basic_fields
    search_fields = __basic_fields


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = CustomUser.objects.all()


class CompanyViewSet(viewsets.ModelViewSet):
    serializer_class = CompanySerializer
    queryset = Company.objects.all()
