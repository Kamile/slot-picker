import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { formatSlots } from './utils';
import { FormattedSlot } from './types';
import { add, format, isAfter, isBefore, sub } from 'date-fns';
import { SlotButton } from './components/SlotButton';

const App = () => {
  const [error, setError] = useState<string | undefined>();
  const [slots, setSlots] = useState<FormattedSlot[] | undefined>();
  const [selectedSlotId, setSelectedSlotId] = useState<string | undefined>();
  const [startDateRange, setStartDateRange] = useState(sub(new Date(), { days: 1 }));

  useEffect(() => {
    axios
      .get('http://localhost:8000/bookable-slots')
      .then(function (response) {
        setError(undefined);
        const slots = response.data;
        setSlots(formatSlots(slots));
      })
      .catch((error) => {
        setError('There was an error fetching slots');
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Slot Picker</h1>
        <p>Select your slot</p>
        <div style={{ display: 'flex' }}>
          <button
            disabled={startDateRange <= new Date()}
            onClick={() => setStartDateRange(sub(startDateRange, { days: 4 }))}
          >
            &lt;
          </button>

          <div style={{ display: 'flex' }}>
            {slots &&
              slots
                .filter(
                  (slot) =>
                    isAfter(slot.date, startDateRange) &&
                    isBefore(slot.date, add(startDateRange, { days: 4 }))
                )
                .map((slot, index) => {
                  return (
                    <div
                      key={`${index}-div`}
                      style={{ display: 'flex', flexDirection: 'column', padding: 10 }}
                    >
                      <span key={`${index}-title`} style={{ fontSize: 10 }}>
                        {format(slot.date, 'dd MMM')}
                      </span>
                      <SlotButton
                        disabled={!slot.morning.available}
                        key={`${index}-AM`}
                        onClick={() => setSelectedSlotId(slot.morning.id)}
                        selected={selectedSlotId === slot.morning.id}
                      >
                        {slot.morning.available ? slot.morning.label : 'FULL'}
                      </SlotButton>
                      <SlotButton
                        disabled={!slot.afternoon.available}
                        key={`${index}-PM`}
                        onClick={() => setSelectedSlotId(slot.afternoon.id)}
                        selected={selectedSlotId === slot.afternoon.id}
                      >
                        {slot.afternoon.available ? slot.afternoon.label : 'FULL'}
                      </SlotButton>
                      <SlotButton
                        disabled={!slot.evening.available}
                        key={`${index}-EVE`}
                        onClick={() => setSelectedSlotId(slot.evening.id)}
                        selected={selectedSlotId === slot.evening.id}
                      >
                        {slot.evening.available ? slot.evening.label : 'FULL'}
                      </SlotButton>
                    </div>
                  );
                })}
          </div>
          <button
            disabled={slots && add(startDateRange, { days: 4 }) >= slots[slots.length - 1].date}
            onClick={() => setStartDateRange(add(startDateRange, { days: 4 }))}
          >
            &gt;
          </button>
        </div>
        {error && <p>{error}</p>}
        <button disabled={!selectedSlotId}>Submit</button>
      </header>
    </div>
  );
};

export default App;
