# Generated by Django 3.2.7 on 2021-10-10 06:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0005_alter_sale_desc'),
    ]

    operations = [
        migrations.CreateModel(
            name='DOTD',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('addedDate', models.DateField(auto_now_add=True)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='DOTD', to='products.product')),
            ],
        ),
        migrations.DeleteModel(
            name='Sale',
        ),
    ]
