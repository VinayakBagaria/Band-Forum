# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-04 16:27
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Band',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True)),
                ('date_added', models.DateField(default=datetime.datetime(2017, 2, 4, 21, 57, 37, 136538))),
                ('image', models.CharField(blank=True, max_length=300, null=True)),
                ('bio', models.TextField(blank=True, max_length=5000, null=True)),
            ],
        ),
    ]
