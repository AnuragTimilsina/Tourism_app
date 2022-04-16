# Generated by Django 4.0.3 on 2022-04-16 09:39

import django.contrib.auth.validators
import django.core.validators
from django.db import migrations, models
import tourists.models
import tourists.storage


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('username', models.CharField(error_messages={'unique': 'A user with that username already exists.'}, help_text='Required. 30 characters or fewer. Letters, digits and @/./+/-/_ only.', max_length=30, unique=True, validators=[django.contrib.auth.validators.UnicodeUsernameValidator()], verbose_name='username')),
                ('is_tourist', models.BooleanField(default=True)),
                ('is_agency', models.BooleanField(default=False)),
                ('email', models.EmailField(max_length=254, unique=True, verbose_name='email address')),
                ('mobile_number', models.CharField(blank=True, max_length=17, validators=[django.core.validators.RegexValidator(message="Phone number should be in correct format'. Up to 15 digits allowed.", regex='^\\+?1?\\d{9,15}$')])),
                ('country', models.CharField(blank=True, max_length=100)),
                ('address', models.CharField(blank=True, max_length=300)),
                ('profile_pic', models.ImageField(blank=True, null=True, storage=tourists.storage.OverwriteStorage(), upload_to=tourists.storage.ProfileImagePath, verbose_name='Profile Image')),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'abstract': False,
            },
            managers=[
                ('objects', tourists.models.CustomUserManager()),
            ],
        ),
    ]
