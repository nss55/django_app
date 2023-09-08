# Generated by Django 4.2.4 on 2023-08-24 08:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('disaster_app', '0005_alter_disasterentry_send_to'),
    ]

    operations = [
        migrations.AlterField(
            model_name='disasterentry',
            name='disaster_type',
            field=models.CharField(choices=[('Landslide', 'Landslide'), ('Flood', 'Flood'), ('Fire', 'Fire'), ('cyclone', 'cyclone'), ('bomb blast', 'bomb blast'), ('earthquake', 'earthquake')], max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='disasterentry',
            name='send_to',
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='disasterentry',
            name='taluka',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='disasterentry',
            name='village',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='disasterentry',
            name='wadi',
            field=models.CharField(max_length=50, null=True),
        ),
    ]
