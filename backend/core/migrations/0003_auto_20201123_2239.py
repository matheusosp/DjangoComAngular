# Generated by Django 3.1.3 on 2020-11-24 01:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_auto_20201123_1631'),
    ]

    operations = [
        migrations.AlterField(
            model_name='member',
            name='adress',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='member',
            name='email',
            field=models.EmailField(blank=True, max_length=254, null=True),
        ),
    ]
