from jobs.models import Job
from rest_framework import serializers


class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = (
            'job_id', 'type', 'created_at', 'company_name', 'company_website',
            'location', 'title', 'description', 'company_logo', 'how_to_apply'
        )
