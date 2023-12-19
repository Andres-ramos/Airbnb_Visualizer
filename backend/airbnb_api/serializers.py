from rest_framework import serializers
from .models import AirbnbListing
from shapely.geometry import shape, mapping
import shapely
from django.contrib.gis.geos import GEOSGeometry
import json 

class AirbnbListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = AirbnbListing
        fields = ["id", "property_id", "airbnb_property_id", "vrbo_property_id", 
                  "listing_type", "bedrooms", "bathrooms", "accommodates",
                  "rating", "reviews", "title", "revenue_ltm", "revenue_potential_ltm",
                  "occupancy_rate_ltm", "average_daily_rate_ltm", "days_available_ltm", 
                  "market_id", "market_name", "location", "host"]
    
    #TODO: Implement
    #TODO: Change geojson to wkt
    def to_internal_value(self, data):
        return super().to_internal_value(data)
    
    
    def to_representation(self, instance):
        '''
        Changes wkt format to geojson
        '''
        representation = super().to_representation(instance)
        wkt_data = representation.get('location')
        geometry = GEOSGeometry(wkt_data)
        representation['location'] = json.loads(geometry.geojson)

        instance.location = geometry

        return representation