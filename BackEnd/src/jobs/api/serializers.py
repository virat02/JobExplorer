from jobs.models import (Job, CustomUser, Company, Likes,
                         Dislikes, Favourites)
from rest_framework import serializers


class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = (
            'id', 'job_uuid', 'type', 'created_at',
            'location', 'title', 'description', 'how_to_apply',
            'language', 'sponsorship_available', 'favourite_users',
            'liked_by_users', 'disliked_by_users', 'company'
        )


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = (
            'id', 'username', 'favourite_jobs',
            'liked_jobs', 'disliked_jobs'
        )


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = (
            'id', 'name', 'website'
        )


class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Likes
        fields = ('job',)


class DislikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dislikes
        fields = ('job',)


class BookmarkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favourites
        fields = ('job',)
