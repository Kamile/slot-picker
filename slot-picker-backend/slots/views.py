from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import mixins, viewsets
import datetime

from .models import Slot
from .serializers import BookableSlotSerializer, SlotSerializer

class SlotViewSet(viewsets.ModelViewSet):
    queryset = Slot.objects.all()
    serializer_class = SlotSerializer

class BookableSlotViewSet(viewsets.ModelViewSet):
    queryset = Slot.objects.filter(date__range=[datetime.datetime.now(), datetime.datetime.now() + datetime.timedelta(weeks=4)])
    serializer_class = BookableSlotSerializer
