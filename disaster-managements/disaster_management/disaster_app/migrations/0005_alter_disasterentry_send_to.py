# Generated by Django 4.2.4 on 2023-08-24 08:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('disaster_app', '0004_disasterentry_send_to'),
    ]

    operations = [
        migrations.AlterField(
            model_name='disasterentry',
            name='send_to',
            field=models.CharField(max_length=20, null=True),
        ),
    ]
