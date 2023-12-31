# Generated by Django 4.2.4 on 2023-08-23 19:42

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='DisasterEntry',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('disaster_type', models.CharField(choices=[('Landslide', 'Landslide'), ('Flood', 'Flood'), ('Fire', 'Fire'), ('cyclone', 'cyclone'), ('bomb blast', 'bomb blast'), ('earthquake', 'earthquake')], max_length=20, null=True)),
                ('taluka', models.CharField(max_length=20, null=True)),
                ('village', models.CharField(max_length=20, null=True)),
                ('wadi', models.CharField(max_length=20, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True, null=True)),
                ('updated_at', models.DateTimeField(auto_now=True, null=True)),
                ('created_by', models.CharField(blank=True, max_length=500, null=True, verbose_name='Created by')),
                ('updated_by', models.CharField(blank=True, max_length=500, null=True, verbose_name='Updated by')),
            ],
        ),
    ]
