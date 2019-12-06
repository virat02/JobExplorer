from django.db import models
import uuid


class Job(models.Model):

    id = models.AutoField(verbose_name='JOB_ID',
                          serialize=False, auto_created=True, primary_key=True)
    job_uuid = models.UUIDField(default=uuid.uuid4(), editable=False)
    type = models.CharField(max_length=200)
    created_at = models.DateTimeField()
    location = models.CharField(max_length=200)
    title = models.CharField(max_length=200)
    description = models.TextField()
    how_to_apply = models.TextField()
    language = models.CharField(max_length=200)
    sponsorship_available = models.BooleanField(default=True)

    def __str__(self):
        return str(self.id)


class Company(models.Model):

    id = models.AutoField(verbose_name='COMPANY_ID',
                          serialize=False, auto_created=True, primary_key=True)
    name = models.CharField(max_length=200)
    website = models.CharField(max_length=250, null=True)
    location = models.CharField(max_length=200)
    logo = models.ImageField(upload_to='../companyLogo/',
                             default='../companyLogo/default.png')
    job = models.ForeignKey(Job, on_delete=models.CASCADE,
                            related_name='job')

    def __str__(self):
        return str(self.id)
