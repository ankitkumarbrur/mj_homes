# Generated by Django 3.2.7 on 2021-09-22 05:23

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='newuser',
            name='start_date',
            field=models.DateTimeField(default=datetime.datetime(2021, 9, 22, 5, 23, 52, 808077, tzinfo=utc)),
        ),
    ]