# Generated by Django 3.2.7 on 2021-09-20 09:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0003_auto_20210920_1517'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='subcategory',
            new_name='category',
        ),
    ]
