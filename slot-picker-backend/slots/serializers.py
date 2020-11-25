from rest_framework import serializers
from .models import Slot

class SlotSerializer(serializers.ModelSerializer):
    slot_label = serializers.ReadOnlyField(source='slot_shape.label')
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
