# Generated by Django 3.2.7 on 2021-10-04 15:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0004_sale_desc'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sale',
            name='desc',
            field=models.TextField(default='On sale'),
            preserve_default=False,
        ),
    ]