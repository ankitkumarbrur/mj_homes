# Generated by Django 3.2.7 on 2021-10-22 10:53

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('homepage', '0004_delete_pincode'),
    ]

    operations = [
        migrations.AlterField(
            model_name='carousel',
            name='id',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False),
        ),
    ]