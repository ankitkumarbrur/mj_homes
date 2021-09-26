# Generated by Django 3.2.7 on 2021-09-26 09:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('carts', '0005_auto_20210926_1050'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='wishlistitem',
            name='product',
        ),
        migrations.RemoveField(
            model_name='wishlistitem',
            name='wishlist',
        ),
        migrations.AlterField(
            model_name='cartitem',
            name='cart',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='cartitems', to='carts.cart'),
        ),
        migrations.DeleteModel(
            name='WishList',
        ),
        migrations.DeleteModel(
            name='WishListItem',
        ),
    ]