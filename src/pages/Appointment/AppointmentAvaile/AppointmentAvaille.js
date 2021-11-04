import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Cavity filling',
        time: '06.00 AM - 12.00 PM',
        space: 1,
    },
    {
        id: 2,
        name: 'Cavity Refilling',
        time: '07.00 AM - 11.00 PM',
        space: 6,
    },
    {
        id: 4,
        name: 'Teeth Remave',
        time: '11.00 AM - 05.00 PM',
        space: 2,
    },

    {
        id: 4,
        name: 'Cavity Protection',
        time: '06.00 AM - 12.00 PM',
        space: 7,
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '08.00 AM - 01.00 PM',
        space: 5,
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '06.00 AM - 15.00 PM',
        space: 8,
    },
]





const AppointmentAvaille = ({ date }) => {
    return (
        <Container>
            <Typography variant='h4' sx={{ color: '#00e676', mb: 5 }} variant="h5" gutterBottom component="div">
                <h1> Available Appointment {date.toDateString()} </h1>
            </Typography>

            <Grid
                container spacing={2}>


                {
                    bookings.map(booking => <Booking


                        key={booking.id}
                        booking={booking}
                        date={date}
                    ></Booking>)
                }

            </Grid>
        </Container>
    );
};

export default AppointmentAvaille;