export type Slot = {
  id: string;
  date: string;
  booked_capacity: number;
  is_slot_full: boolean;
  slot_label: string;
  total_capacity: number;
};

type TimeSlot = {
  available: boolean;
  id: string;
  label: string;
};

export type FormattedSlot = {
  date: Date;
  morning: TimeSlot;
  afternoon: TimeSlot;
  evening: TimeSlot;
};
