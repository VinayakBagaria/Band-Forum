# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-08 00:51
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('band', '0003_auto_20170208_0048'),
    ]

    operations = [
        migrations.AlterField(
            model_name='band',
            name='date_added',
            field=models.DateField(default=datetime.datetime(2017, 2, 8, 0, 51, 4, 971036)),
        ),
    ]
