from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.core.validators import MaxValueValidator, MinValueValidator

# from carts.models import Cart, WishList
# Create your models here.
class AccountManager(BaseUserManager):

    def create_superuser(self, email, name, password, **kwargs):
        kwargs.setdefault('is_staff', True)
        kwargs.setdefault('is_superuser', True)
        kwargs.setdefault('is_active', True)

        if kwargs.get('is_staff') is not True:
            raise ValueError('Super User must be assigned is_staff = True')

        if kwargs.get('is_superuser') is not True:
            raise ValueError('Super User must be assigned is_superuser = True')

        self.create_user(self, email, name, password, **kwargs)

    def create_user(self, instance, email, name, password, *args, **kwargs):
        if not email:
            raise ValueError(_("You must provide an email"))

        email = self.normalize_email(email)
        user = self.model(email = email, name = name, **kwargs)

        user.set_password(password)

        # user.active_cart = Cart.objects.create(user)
        # user.wishlist = WishList.objects.create(user)

        user.save()

        return user

class User(AbstractBaseUser, PermissionsMixin):

    email = models.EmailField(_('email address'), unique = True)
    name = models.CharField(max_length = 150)
    start_date = models.DateTimeField(default = timezone.now)
    is_staff = models.BooleanField(default = False)
    is_active = models.BooleanField(default = True)

    # active_cart = models.ForeignKey(Cart, on_delete = models.CASCADE, null = False, blank = False)
    # wishlist = models.ForeignKey(WishList, on_delete = models.CASCADE, null = False, blank = False)

    objects = AccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    def __unicode__(self):
        return self.name

class Address(models.Model):
    user = models.ForeignKey(User, on_delete = models.CASCADE, null = False, blank = False)

    street = models.CharField(max_length = 100, null = False, blank = False)
    city = models.CharField(max_length = 100, null = False, blank = False)
    district = models.CharField(max_length = 100, null = False, blank = False)
    state = models.CharField(max_length = 100, null = False, blank = False)
    pin = models.IntegerField(default = 0, validators=[MaxValueValidator(999999), MinValueValidator(000000)])
    phone = models.CharField(default = '+91 ----------')

    def __unicode__(self):
        return (self.item_name)