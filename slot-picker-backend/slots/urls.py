from rest_framework import routers

from .views import BookableSlotViewSet, SlotViewSet

router = routers.DefaultRouter(trailing_slash=False)
router.register(r"slots", SlotViewSet, basename="slots")
router.register(r"bookable-slots", BookableSlotViewSet, basename="bookable-slots")
