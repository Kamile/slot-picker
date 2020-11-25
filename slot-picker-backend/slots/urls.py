from rest_framework import routers

from slots.views import SlotViewSet

router = routers.DefaultRouter(trailing_slash=False)
router.register(r"slots", SlotViewSet, basename="slots")
