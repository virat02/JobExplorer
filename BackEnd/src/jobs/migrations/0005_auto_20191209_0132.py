# Generated by Django 2.2.7 on 2019-12-09 06:32

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('jobs', '0004_auto_20191209_0029'),
    ]

    operations = [
        migrations.AlterField(
            model_name='job',
            name='job_uuid',
            field=models.UUIDField(default=uuid.UUID('a9add22a-1f07-4f6f-86a1-2d4e5a68ee3b'), editable=False),
        ),
    ]
