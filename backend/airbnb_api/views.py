from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets, permissions
from .models import AirbnbListing
from .serializers import AirbnbListingSerializer

class AirbnbListingView(viewsets.ModelViewSet):
    queryset = AirbnbListing.objects.all().order_by('id')
    serializer_class = AirbnbListingSerializer


    def get_queryset(self):
        queryset = AirbnbListing.objects.all().order_by('id')

        #query params
        owner = self.request.query_params.get('owner')
        aoi = self.request.query_params.get('owner')
        if owner:
            queryset = AirbnbListing.objects.filter(host = owner)
        
        #TODO: Filter by aoi
        if aoi:
            print(aoi)
            
        return queryset