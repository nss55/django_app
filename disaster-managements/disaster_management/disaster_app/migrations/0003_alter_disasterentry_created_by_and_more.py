# Generated by Django 4.2.4 on 2023-08-23 20:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('disaster_app', '0002_alter_disasterentry_created_by_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='disasterentry',
            name='created_by',
            field=models.CharField(blank=True, max_length=500, null=True, verbose_name='Created by'),
        ),
        migrations.AlterField(
            model_name='disasterentry',
            name='updated_by',
            field=models.CharField(blank=True, max_length=500, null=True, verbose_name='Updated by'),
        ),
    ]
