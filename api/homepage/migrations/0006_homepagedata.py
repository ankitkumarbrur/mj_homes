# Generated by Django 3.2.7 on 2021-10-31 06:05

from django.db import migrations, models
import homepage.models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('homepage', '0005_alter_carousel_id'),
    ]

    operations = [
        migrations.CreateModel(
            name='HomepageData',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('livingRoom', models.ImageField(upload_to=homepage.models.HomepageData.home_image_upload)),
                ('drawingRoom', models.ImageField(upload_to=homepage.models.HomepageData.home_image_upload)),
                ('diningRoom', models.ImageField(upload_to=homepage.models.HomepageData.home_image_upload)),
                ('kitchen', models.ImageField(upload_to=homepage.models.HomepageData.home_image_upload)),
                ('bedRoom', models.ImageField(upload_to=homepage.models.HomepageData.home_image_upload)),
                ('outdoor', models.ImageField(upload_to=homepage.models.HomepageData.home_image_upload)),
                ('leftImage', models.ImageField(upload_to=homepage.models.HomepageData.home_image_upload)),
                ('rightImage', models.ImageField(upload_to=homepage.models.HomepageData.home_image_upload)),
                ('videoLink', models.TextField()),
            ],
        ),
    ]