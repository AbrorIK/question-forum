# Generated by Django 5.0.6 on 2024-05-16 13:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('forum', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='answer',
            old_name='pub_date',
            new_name='date',
        ),
        migrations.RenameField(
            model_name='answer',
            old_name='answer_text',
            new_name='text',
        ),
        migrations.RenameField(
            model_name='question',
            old_name='pub_date',
            new_name='date',
        ),
        migrations.RenameField(
            model_name='question',
            old_name='question_text',
            new_name='text',
        ),
        migrations.RenameField(
            model_name='question',
            old_name='question_title',
            new_name='title',
        ),
    ]