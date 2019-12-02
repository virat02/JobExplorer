from django.db import models
from django.core.validators import RegexValidator
import uuid


class Job(models.Model):

    job_uuid = models.UUIDField(
        primary_key=True, default=uuid.uuid4(), editable=False)
    type = models.CharField(max_length=200)
    created_at = models.DateTimeField()
    location = models.CharField(max_length=200)
    title = models.CharField(max_length=200)
    description = models.TextField()
    how_to_apply = models.TextField()
