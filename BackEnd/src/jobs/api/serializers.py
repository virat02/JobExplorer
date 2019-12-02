from jobs.models import Job
from rest_framework import serializers


class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = (
            'job_uuid', 'type', 'created_at',
            'location', 'title', 'description', 'how_to_apply'
        )
