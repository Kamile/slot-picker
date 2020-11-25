# Slot Picker

A simple fullstack slot picker using a Django backend and React frontend.

The default test data defines 3 fixed slots per day: AM, PM, EVE for 8 weeks. Calling the `/bookable-slots` endpoint returns the next 4 weeks of dates.
Create a superuser with Django to change the slot capacity to see full slots from the admin!

## Installation

### Backend

To install Django dependencies and run database migrations:

In `slot-picker-backend`:

- `pipenv install`

Activate the generated virtualenv with `source`. Then,

- `python manage.py migrate`

### Frontend

In `slot-picker-frontend`:

- `yarn` to install dependencies
- `yarn start` to run the development server

## Running locally

To run the Django backend, in `slot-picker-backend`, run

`python manage.py runserver`

To run the React frontend, in `slot-picker-frontend`, run

`yarn start` and head to `localhost:3000`

### Assumptions

- We're not looking at timezones.
