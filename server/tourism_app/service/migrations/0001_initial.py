# Generated by Django 4.0.3 on 2022-04-19 11:34

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion
import service.storage


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('agencies', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='destination',
            fields=[
                ('destination_name', models.CharField(max_length=300, primary_key=True, serialize=False)),
                ('destination_description', models.TextField(blank=True)),
                ('destination_pic', models.ImageField(blank=True, null=True, storage=service.storage.OverwriteStorage(), upload_to=service.storage.DestinationImagePath, verbose_name='Destination Image')),
            ],
        ),
        migrations.CreateModel(
            name='review',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('feedback', models.TextField(max_length=200)),
                ('rating', models.SmallIntegerField(validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(5)])),
            ],
        ),
        migrations.CreateModel(
            name='service',
            fields=[
                ('service_id', models.AutoField(primary_key=True, serialize=False)),
                ('package_name', models.CharField(default='', max_length=100)),
                ('departure_date', models.DateField()),
                ('no_of_person', models.PositiveIntegerField(default=0)),
                ('amount', models.PositiveIntegerField()),
                ('description', models.TextField(blank=True)),
                ('service_pic', models.ImageField(blank=True, null=True, storage=service.storage.OverwriteStorage(), upload_to=service.storage.ServiceImagePath, verbose_name='service Image')),
                ('Agency', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='agencies.agency')),
            ],
        ),
    ]
