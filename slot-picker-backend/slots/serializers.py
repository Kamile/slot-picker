from rest_framework import serializers
from .models import Slot

class SlotSerializer(serializers.ModelSerializer):
    class Meta:
        model = Slot
        fields = "__all__"
        read_only_fields = (
            "id",
            "created_at",
            "updated_at",
            "date",
            "total_capacity",
        )

class BookableSlotSerializer(serializers.ModelSerializer):
    slot_label = serializers.ReadOnlyField(source='slot_shape.label')
    is_slot_full = serializers.ReadOnlyField()
    class Meta:
        model = Slot
        fields = (
            "id",
            "date",
            "total_capacity",
            "booked_capacity",
            "slot_label",
            "is_slot_full"
        )
        read_only_fields = (
            "id",
            "date",
            "total_capacity",
            "is_slot_full"
            "slot_label",
        )
