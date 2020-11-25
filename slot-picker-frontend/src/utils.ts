import groupBy from 'lodash.groupby';
import mapValues from 'lodash.mapvalues';
import { Slot } from './types';
import keyBy from 'lodash.keyby';
import sortBy from 'lodash.sortby';

export const formatSlots = (slots: Slot[]) => {
  const slotsGroupedByDate = groupBy(slots, 'date');
  const mappedValues = mapValues(slotsGroupedByDate, (slot) => {
    const keyedSlot = keyBy(slot, 'slot_label');
    const mapped = {
      id: keyedSlot.id,
      date: new Date(keyedSlot.AM.date),
      morning: {
        available: !keyedSlot.AM.is_slot_full,
        id: keyedSlot.AM.id,
        label: keyedSlot.AM.slot_label,
      },
      afternoon: {
        available: !keyedSlot.PM.is_slot_full,
        id: keyedSlot.PM.id,
        label: keyedSlot.PM.slot_label,
      },
      evening: {
        available: !keyedSlot.EVE.is_slot_full,
        id: keyedSlot.EVE.id,
        label: keyedSlot.EVE.slot_label,
      },
    };
    return mapped;
  });
  const sortedSlots = sortBy(Object.values(mappedValues), 'date');
  return sortedSlots;
};
