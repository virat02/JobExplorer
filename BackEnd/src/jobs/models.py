from django.db import models


class Job(models.Model):
    job_id = models.UUIDField(max_length=200)
    type = models.CharField(max_length=200)
    created_at = models.DateTimeField()
    company_name = models.CharField(max_length=200)
    company_website = models.URLField(max_length=200)
    location = models.CharField(max_length=200)
    title = models.CharField(max_length=200)
    description = models.TextField()
    company_logo = models.ImageField()
    how_to_apply = models.TextField()
