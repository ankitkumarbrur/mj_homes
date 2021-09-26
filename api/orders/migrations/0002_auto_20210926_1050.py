# Generated by Django 3.2.7 on 2021-09-26 05:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='userID',
            new_name='user',
        ),
        migrations.RemoveField(
            model_name='order',
            name='cartID',
        ),
        migrations.AddField(
            model_name='order',
            name='total_amount',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.CreateModel(
            name='OrderDetails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cart', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='orders.order')),
            ],
        ),
    ]