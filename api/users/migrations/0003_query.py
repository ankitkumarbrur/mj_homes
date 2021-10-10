# Generated by Django 3.2.7 on 2021-10-08 04:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_subscribe'),
    ]

    operations = [
        migrations.CreateModel(
            name='Query',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('phone', models.CharField(blank=True, default='+91 ----------', max_length=20, null=True)),
                ('email', models.EmailField(max_length=254, verbose_name='email address')),
                ('city', models.CharField(blank=True, max_length=100, null=True)),
                ('state', models.CharField(blank=True, max_length=100, null=True)),
                ('message', models.TextField()),
            ],
        ),
    ]