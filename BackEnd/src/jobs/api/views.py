from rest_framework import viewsets, status
from django_filters import rest_framework as filters
from rest_framework.filters import SearchFilter
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework.exceptions import APIException

from jobs.models import Job, CustomUser, Company, Likes
from .serializers import (JobSerializer, UserSerializer,
                          CompanySerializer, LikeSerializer,
                          DislikeSerializer, BookmarkSerializer)
from .permissions import AnonymousUserPermission


# -------------------------- MODELS ---------------------------


class JobViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for CRUD with Job model.
    """
    permission_classes = (AnonymousUserPermission |
                          IsAuthenticated | IsAdminUser, )
    __basic_fields = ('language', 'sponsorship_available',
                      'type', 'location', 'description', 'company__name')
    serializer_class = JobSerializer
    queryset = Job.objects.all()
    filter_backends = [SearchFilter, filters.DjangoFilterBackend]
    filter_fields = __basic_fields
    search_fields = __basic_fields


class UserViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for CRUD with User model.
    """
    serializer_class = UserSerializer
    permission_classes = (IsAdminUser | IsAuthenticated, )
    queryset = CustomUser.objects.all()


class CompanyViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for CRUD with Company model.
    """
    serializer_class = CompanySerializer
    permission_classes = (IsAdminUser | IsAuthenticated,)
    queryset = Company.objects.all()

# -------------------------- FEATURES ---------------------------


class LikeViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for creating and editing liked jobs.
    """
    queryset = Likes.objects.all()
    serializer_class = LikeSerializer
    permission_classes = (IsAdminUser | IsAuthenticated,)

    """
    Get request
    """

    def create(self, request):
        # Check if request payload is valid, else raise Validation Exception
        serializer = LikeSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # Check if user exists, else raise APIException
        user = CustomUser.objects.get(id=self.request.user.id)
        if not user:
            raise APIException("User doesn't exist")

        # Check if user has already liked the job,
        # raise APIException iff true
        if user.liked_jobs.filter(id=request.data["job"]).exists():
            raise APIException("Job already liked!")

        # If all checks pass, execute the action
        serializer.save(user=request.user)

        return Response(status=status.HTTP_201_CREATED)

    """
    Patch request
    """

    def partial_update(self, request, pk=None):
        # Check if request parameter has a job id, else raise APIException
        if pk is None:
            raise APIException("Need to provide a job id to update")

        # Check if user exists, else raise APIException
        user = CustomUser.objects.get(id=self.request.user.id)
        if not user:
            raise APIException("User doesn't exist")

        # Check if job exists, else raise APIException
        job = user.liked_jobs.filter(id=pk).first()
        if not job:
            raise APIException(
                "Job to unlike doesn't exist is user's liked jobs list!")

        # Update the favorite jobs list of the user
        user.liked_jobs.remove(job)

        # Save the updated user to the database
        user.save()

        return Response(status=status.HTTP_204_NO_CONTENT)


class DislikeViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for creating and editing disliked jobs.
    """
    queryset = Likes.objects.all()
    serializer_class = DislikeSerializer
    permission_classes = (IsAdminUser | IsAuthenticated,)

    """
    Get request
    """

    def create(self, request):
        # Check if request payload is valid, else raise Validation Exception
        serializer = DislikeSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # Check if user exists, else raise APIException
        user = CustomUser.objects.get(id=self.request.user.id)
        if not user:
            raise APIException("User doesn't exist")

        # Check if user has already bookmarked the job,
        # raise APIException iff true
        if user.disliked_jobs.filter(id=request.data["job"]).exists():
            raise APIException("Job already disliked!")

        # If all checks pass, execute the action
        serializer.save(user=request.user)

        return Response(status=status.HTTP_201_CREATED)

    """
    Patch request
    """

    def partial_update(self, request, pk=None):
        # Check if request parameter has a job id, else raise APIException
        if pk is None:
            raise APIException("Need to provide a job id to update")

        # Check if user exists, else raise APIException
        user = CustomUser.objects.get(id=self.request.user.id)
        if not user:
            raise APIException("User doesn't exist")

        # Check if job exists, else raise APIException
        job = user.disliked_jobs.filter(id=pk).first()
        if not job:
            raise APIException(
                "Job to un-dislike doesn't exist is user's disliked jobs list!")

        # Update the favorite jobs list of the user
        user.disliked_jobs.remove(job)

        # Save the updated user to the database
        user.save()

        return Response(status=status.HTTP_204_NO_CONTENT)


class BookmarkViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for creating and editing bookmarked jobs.
    """
    queryset = Likes.objects.all()
    serializer_class = BookmarkSerializer
    permission_classes = (IsAdminUser | IsAuthenticated,)

    """
    Get request
    """

    def create(self, request):
        # Check if request payload is valid, else raise Validation Exception
        serializer = BookmarkSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # Check if user exists, else raise APIException
        user = CustomUser.objects.get(id=self.request.user.id)
        if not user:
            raise APIException("User doesn't exist")

        # Check if user has already bookmarked the job,
        # raise APIException iff true
        if user.favourite_jobs.filter(id=request.data["job"]).exists():
            raise APIException("Job already bookmarked!")

        # If all checks pass, execute the action
        serializer.save(user=request.user)

        return Response(status=status.HTTP_201_CREATED)

    """
    Patch request
    """

    def partial_update(self, request, pk=None):
        # Check if request parameter has a job id, else raise APIException
        if pk is None:
            raise APIException("Need to provide a job id to update")

        # Check if user exists, else raise APIException
        user = CustomUser.objects.get(id=self.request.user.id)
        if not user:
            raise APIException("User doesn't exist")

        # Check if job exists, else raise APIException
        job = user.favourite_jobs.filter(id=pk).first()
        if not job:
            raise APIException(
                "Job to un-bookmark doesn't exist is user's bookmarked jobs list!")

        # Update the favorite jobs list of the user
        user.favourite_jobs.remove(job)

        # Save the updated user to the database
        user.save()

        return Response(status=status.HTTP_204_NO_CONTENT)


class LikedJobsViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for viewing liked jobs.
    """
    serializer_class = JobSerializer
    permission_classes = (IsAdminUser | IsAuthenticated,)

    def get_queryset(self):
        # Check if user exists, else raise APIException
        user = CustomUser.objects.get(id=self.request.user.id)
        if not user:
            raise APIException("User doesn't exist")

        queryset = user.liked_jobs.all()
        return queryset


class DislikedJobsViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for viewing disliked jobs.
    """
    serializer_class = JobSerializer
    permission_classes = (IsAdminUser | IsAuthenticated,)

    def get_queryset(self):
        # Check if user exists, else raise APIException
        user = CustomUser.objects.get(id=self.request.user.id)
        if not user:
            raise APIException("User doesn't exist")

        queryset = user.disliked_jobs.all()
        return queryset


class BookmarkedJobsViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for viewing bookmarked jobs.
    """
    serializer_class = JobSerializer
    permission_classes = (IsAdminUser | IsAuthenticated,)

    def get_queryset(self):
        # Check if user exists, else raise APIException
        user = CustomUser.objects.get(id=self.request.user.id)
        if not user:
            raise APIException("User doesn't exist")

        queryset = user.favourite_jobs.all()
        return queryset
