# Generated by Django 3.2.7 on 2021-09-22 15:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0012_alter_product_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='review',
            name='user',
        ),
    ]
