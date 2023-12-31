# Generated by Django 4.2.7 on 2023-11-04 03:53

import django.contrib.gis.db.models.fields
from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="AirbnbListing",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("property_id", models.CharField()),
                ("airbnb_property_id", models.CharField()),
                ("vrbo_property_id", models.CharField()),
                ("listing_type", models.CharField()),
                ("bedrooms", models.IntegerField()),
                ("bathrooms", models.IntegerField()),
                ("accommodates", models.IntegerField()),
                ("rating", models.FloatField()),
                ("reviews", models.IntegerField()),
                ("title", models.CharField()),
                ("revenue_ltm", models.FloatField()),
                ("revenue_potential_ltm", models.FloatField()),
                ("occupancy_rate_ltm", models.FloatField()),
                ("average_daily_rate_ltm", models.FloatField()),
                ("days_available_ltm", models.IntegerField()),
                ("market_id", models.IntegerField()),
                ("market_name", models.CharField()),
                ("location", django.contrib.gis.db.models.fields.PointField(srid=4326)),
            ],
        ),
    ]
