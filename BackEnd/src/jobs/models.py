from django.db import models
from django.contrib.auth.models import AbstractUser
import uuid


class CustomUser(AbstractUser):
    favourite_jobs = models.ManyToManyField(
        'Job', null=True, blank=True, through='Favourites')
    liked_jobs = models.ManyToManyField(
        'Job', null=True, blank=True,
        related_name="user_like", through='Likes')
    disliked_jobs = models.ManyToManyField(
        'Job', null=True, blank=True,
        related_name="user_dislike", through='Dislikes')


class Company(models.Model):

    id = models.AutoField(verbose_name='COMPANY_ID',
                          serialize=False, auto_created=True, primary_key=True)
    name = models.CharField(max_length=200)
    website = models.CharField(max_length=250, null=True)
    location = models.CharField(max_length=200)
    logo = models.ImageField(upload_to='../companyLogo/',
                             default='../companyLogo/default.png')

    def __str__(self):
        return str(self.id)


class Job(models.Model):

    id = models.AutoField(verbose_name='JOB_ID',
                          auto_created=True, primary_key=True)
    job_uuid = models.UUIDField(default=uuid.uuid4(), editable=False)
    type = models.CharField(max_length=200)
    created_at = models.DateTimeField()
    location = models.CharField(max_length=200)
    title = models.CharField(max_length=200)
    description = models.TextField()
    how_to_apply = models.TextField()
    language = models.CharField(max_length=200)
    sponsorship_available = models.BooleanField(default=True)
    favourite_users = models.ManyToManyField(
        'CustomUser', null=True, blank=True, through='Favourites')
    liked_by_users = models.ManyToManyField(
        'CustomUser', null=True, blank=True,
        related_name="job_like", through='Likes')
    disliked_by_users = models.ManyToManyField(
        'CustomUser', null=True, blank=True,
        related_name="job_dislike", through='Dislikes')
    company = models.ForeignKey(Company,
                                on_delete=models.CASCADE, null=True,
                                related_name='companies')

    def __str__(self):
        return str(self.id)


class Favourites(models.Model):
    id = models.AutoField(verbose_name='USER_FAVOURITE_JOB_ID',
                          auto_created=True, primary_key=True)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    job = models.ForeignKey(Job, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.id)


class Likes(models.Model):
    id = models.AutoField(verbose_name='USER_LIKE_JOB_ID',
                          auto_created=True, primary_key=True)
    user = models.ForeignKey(
        CustomUser, related_name="user_like", null=True, blank=True,
        on_delete=models.CASCADE)
    job = models.ForeignKey(
        Job, related_name="job_like", null=True, blank=True,
        on_delete=models.CASCADE)

    def __str__(self):
        return str(self.id)


class Dislikes(models.Model):
    id = models.AutoField(verbose_name='USER_DISLIKE_JOB_ID',
                          auto_created=True, primary_key=True)
    user = models.ForeignKey(
        CustomUser, related_name="user_dislike", on_delete=models.CASCADE)
    job = models.ForeignKey(
        Job, related_name="job_dislike", on_delete=models.CASCADE)

    def __str__(self):
        return str(self.id)
