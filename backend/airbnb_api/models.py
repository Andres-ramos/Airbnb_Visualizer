from django.contrib.gis.db import models


# Create your models here.
class AirbnbListing(models.Model):
    property_id = models.CharField()
    airbnb_property_id = models.CharField(null=True)
    vrbo_property_id = models.CharField(null=True)
    listing_type = models.CharField()
    bedrooms = models.IntegerField()
    bathrooms = models.FloatField(null=True)
    accommodates = models.IntegerField()
    rating = models.FloatField(null=True)
    reviews = models.IntegerField(null=True)
    title = models.CharField()
    revenue_ltm = models.FloatField()
    revenue_potential_ltm = models.FloatField()
    occupancy_rate_ltm = models.FloatField()
    average_daily_rate_ltm = models.FloatField()
    days_available_ltm = models.IntegerField()
    market_id = models.IntegerField()
    market_name = models.CharField(null=True)
    location = models.PointField()
    host = models.CharField()
