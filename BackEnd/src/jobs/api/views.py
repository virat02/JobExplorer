from rest_framework import viewsets
from django_filters import rest_framework as filters
from rest_framework.filters import SearchFilter
from rest_framework.views import APIView
from rest_framework import authentication

from jobs.models import Job, CustomUser, Company, Likes
from .serializers import (JobSerializer, UserSerializer,
                          CompanySerializer, LikeSerializer,
                          LikedJobsSerializer)


class JobViewSet(viewsets.ModelViewSet):
    __basic_fields = ('language', 'sponsorship_available',
                      'type', 'location', 'description', 'company__name')
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


class LikeViewSet(viewsets.ModelViewSet):

    queryset = Likes.objects.all()
    serializer_class = LikeSerializer

    def post(self, request):
        serializer_class = LikeSerializer(data=request.data)
        authentication_classes = (TokenAuthentication,)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user, job=request.job)
        return Response(status=status.HTTP_201_CREATED)


class LikedJobsViewSet(viewsets.ModelViewSet):

    # queryset = Job.objects.all()
    serializer_class = JobSerializer

    def get(self, request):
        authentication_classes = (TokenAuthentication,)
        user = CustomUser.objects.get(id=request.user)
        return Job.objects.filter(id__in=user.liked_jobs)

    def get_queryset(self):
        return {}
