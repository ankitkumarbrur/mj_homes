# Generated by Django 3.2.4 on 2021-08-28 07:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0015_remove_orderdetails_delivery_charges'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='orderdetails',
            name='customer_delivery_area',
        ),
    ]
