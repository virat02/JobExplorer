# Generated by Django 2.2.7 on 2019-12-09 05:25

from django.conf import settings
from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('jobs', '0002_auto_20191208_0019'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='disliked_jobs',
            field=models.ManyToManyField(blank=True, null=True, related_name='user_dislike', through='jobs.Dislikes', to='jobs.Job'),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='favourite_jobs',
            field=models.ManyToManyField(blank=True, null=True, through='jobs.Favourites', to='jobs.Job'),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='liked_jobs',
            field=models.ManyToManyField(blank=True, null=True, related_name='user_like', through='jobs.Likes', to='jobs.Job'),
        ),
        migrations.AlterField(
            model_name='job',
            name='disliked_by_users',
            field=models.ManyToManyField(blank=True, null=True, related_name='job_dislike', through='jobs.Dislikes', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='job',
            name='favourite_users',
            field=models.ManyToManyField(blank=True, null=True, through='jobs.Favourites', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='job',
            name='job_uuid',
            field=models.UUIDField(default=uuid.UUID('840d2463-4b75-4df5-9d54-ccb0fe12b4e4'), editable=False),
        ),
        migrations.AlterField(
            model_name='job',
            name='liked_by_users',
            field=models.ManyToManyField(blank=True, null=True, related_name='job_like', through='jobs.Likes', to=settings.AUTH_USER_MODEL),
        ),
    ]
