from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import AirbnbListingView

router = DefaultRouter()
router.register('airbnb', AirbnbListingView)
urlpatterns = router.urls