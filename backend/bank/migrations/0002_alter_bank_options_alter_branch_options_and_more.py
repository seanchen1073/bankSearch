# Generated by Django 5.1 on 2024-11-04 15:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bank', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='bank',
            options={'ordering': ['code']},
        ),
        migrations.AlterModelOptions(
            name='branch',
            options={'ordering': ['code']},
        ),
        migrations.AlterUniqueTogether(
            name='branch',
            unique_together={('code', 'bank')},
        ),
    ]