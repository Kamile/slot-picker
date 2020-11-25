# Slot Picker

A simple fullstack slot picker using a Django backend and React frontend.

The default test data defines 3 fixed slots per day: AM, PM, EVE for 8 weeks. Calling the `/bookable-slots` endpoint returns the next 4 weeks of dates.

## Installation

To install Django dependencies and run database migrations:

In `slot-picker-backend`:

- `pipenv install`
- `python manage.py migrate`

## Running locally

To run the Django backend, in `slot-picker-backend`, run

`python manage.py runserver`

To run the React frontend, in `slot-picker-frontend`, run

`yarn start` and head to `localhost:3000`

### Assumptions

- We're not looking at timezones.
