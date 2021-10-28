from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.core.validators import MaxValueValidator, MinValueValidator

from django.db.models.signals import post_save
import jwt, datetime
from django.core.mail import send_mail


# Create your models here.
class AccountManager(BaseUserManager):

    def create_superuser(self, email, first_name, password, **kwargs):
        kwargs.setdefault('is_staff', True)
        kwargs.setdefault('is_superuser', True)
        kwargs.setdefault('is_active', True)

        if kwargs.get('is_staff') is not True:
            raise ValueError('Super User must be assigned is_staff = True')

        if kwargs.get('is_superuser') is not True:
            raise ValueError('Super User must be assigned is_superuser = True')

        if not email:
            raise ValueError(_("You must provide an email"))

        email = self.normalize_email(email)
        user = self.model(email = email, first_name = first_name, **kwargs)

        user.set_password(password)
        user.save()

        return user

class User(AbstractBaseUser, PermissionsMixin):

    email = models.EmailField(_('email address'), unique = True)
    user_name = models.CharField(max_length = 150, unique = True)
    first_name = models.CharField(max_length = 150)
    start_date = models.DateTimeField(default = timezone.now)
    is_staff = models.BooleanField(default = False)
    is_active = models.BooleanField(default = True)
    
    objects = AccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name']

    def __str__(self):
        return self.first_name

      
class Pincode(models.Model):
	pin = models.IntegerField(primary_key = True, validators=[MaxValueValidator(999999), MinValueValidator(000000)])

	def __str__(self):
		return ("%d"%(self.pin))

class Address(models.Model):
    user = models.ForeignKey(User, on_delete = models.CASCADE, null = False, blank = False)

    street = models.CharField(max_length = 100, null = False, blank = False)
    city = models.CharField(max_length = 100, null = False, blank = False)
    state = models.CharField(max_length = 100, null = False, blank = False)
    district = models.CharField(max_length = 100, null = False, blank = False)
    pin = models.ForeignKey(Pincode, on_delete = models.CASCADE)

    phone = models.CharField(default = '+91 ----------', max_length=20)

    def __str__(self):
        return ( "%s - %d"%(self.user.first_name, self.id))

class Subscribe(models.Model):
    email = models.EmailField(_('email address'), unique = True)
    def __str__(self):
        return (self.email)

class Query(models.Model):
    name = models.CharField(max_length = 100, null = False, blank = False)
    phone = models.CharField(default = '+91 ----------', max_length=20, blank = True, null = True)
    email = models.EmailField(_('email address'), null = False, blank = False)
    city = models.CharField(max_length = 100, null = True, blank = True)
    state = models.CharField(max_length = 100, null = True, blank = True)
    message = models.TextField(null = False)

    def __str__(self):
        return (self.name)


def activate_user(sender, instance, **kwargs):
    payload = {
        "id" : instance.id,
        'exp' : datetime.datetime.utcnow() + datetime.timedelta(weeks = 999),
        'iat' : datetime.datetime.utcnow()
    }

    token = jwt.encode(payload, "secret22", algorithm = "HS256")

    send_mail("Activate account",
    "Click on the following url to activate your account: https://luxurymjhomes.com/" + token,
    "admin@luxurymjhomes.com",[instance.email])

post_save.connect(activate_user, sender=User)

