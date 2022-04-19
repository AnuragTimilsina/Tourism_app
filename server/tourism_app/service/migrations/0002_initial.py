# Generated by Django 4.0.3 on 2022-04-19 08:10

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('service', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='service',
            name='users',
            field=models.ManyToManyField(blank=True, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='review',
            name='Service',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='service.service'),
        ),
        migrations.AddField(
            model_name='review',
            name='tourist',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='destination',
            name='services',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='service.service'),
        ),
    ]
