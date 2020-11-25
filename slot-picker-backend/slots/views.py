from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import mixins, viewsets

from .models import Slot
from .serializers import SlotSerializer


def index(request):
    return HttpResponse("Hello from slots.")

class SlotViewSet(viewsets.ModelViewSet):
    queryset = Slot.objects.all()
    serializer_class = SlotSerializer
