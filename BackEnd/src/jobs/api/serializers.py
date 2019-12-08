from jobs.models import Job, CustomUser, Company
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
