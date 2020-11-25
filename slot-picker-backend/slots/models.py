from django.db import models
from slot_picker.models import BaseModel

class SlotShape(BaseModel):
    label = models.CharField(max_length=100)
    start_time = models.TimeField()
    end_time = models.TimeField()

class Slot(BaseModel):
    total_capacity = models.IntegerField(default=10)
    booked_capacity = models.IntegerField(default=0)
    slot_shape = models.ForeignKey(SlotShape, on_delete=models.CASCADE)
    date = models.DateField()

    def get_remaining_slots(self):
        return self.total_capacity - self.booked_capacity

    def is_slot_full(self):
        return self.booked_capacity == self.total_capacity
