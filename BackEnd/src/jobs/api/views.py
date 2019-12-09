from rest_framework import viewsets, status
from django_filters import rest_framework as filters
from rest_framework.filters import SearchFilter
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from jobs.models import Job, CustomUser, Company, Likes
from .serializers import (JobSerializer, UserSerializer,
                          CompanySerializer, LikeSerializer,
                          DislikeSerializer, BookmarkSerializer)


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
    permission_classes = (IsAuthenticated,)

    def create(self, request):
        serializer = LikeSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user)
        return Response(status=status.HTTP_201_CREATED)


class DislikeViewSet(viewsets.ModelViewSet):

    queryset = Likes.objects.all()
    serializer_class = DislikeSerializer
    permission_classes = (IsAuthenticated,)

    def create(self, request):
        serializer = DislikeSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user)
        return Response(status=status.HTTP_201_CREATED)


class BookmarkViewSet(viewsets.ModelViewSet):

    queryset = Likes.objects.all()
    serializer_class = BookmarkSerializer
    permission_classes = (IsAuthenticated,)

    def create(self, request):
        serializer = BookmarkSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user)
        return Response(status=status.HTTP_201_CREATED)


class LikedJobsViewSet(viewsets.ModelViewSet):
    serializer_class = JobSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        user = CustomUser.objects.get(id=self.request.user.id)
        queryset = user.liked_jobs.all()
        return queryset


class DislikedJobsViewSet(viewsets.ModelViewSet):
    serializer_class = JobSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        user = CustomUser.objects.get(id=self.request.user.id)
        queryset = user.disliked_jobs.all()
        return queryset


class BookmarkedJobsViewSet(viewsets.ModelViewSet):
    serializer_class = JobSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        user = CustomUser.objects.get(id=self.request.user.id)
        queryset = user.favourite_jobs.all()
        return queryset
