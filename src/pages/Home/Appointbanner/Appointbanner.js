import React from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';



const AppointmentBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45,58,74, 0.7)',
    backgroundBlendMode: "darken, luminosity",
    marginTop: 150
}


const Appointbanner = () => {
    return (
        <Box style={AppointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400, marginTop: '-115px' }}
                        src={doctor} alt="" />

                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',

                    textAlign: 'left'

                }}>
                    <Box >
                        <Typography variant="h6" sx={{ mb: 5 }} style={{ color: '#40E0D0' }}>
                            Appointment

                        </Typography>
                        <Typography variant="h4" sx={{ mb: 2 }} style={{ color: 'white' }}>
                            Make an Appointment today

                        </Typography>
                        <Typography variant="h4" sx={{ mb: 5 }} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                            Make Appointment today get more benifit to our services with discount price with first time then go ahead

                        </Typography>

                        <Button variant="contained" style={{ background: '#40E0D0' }} p-2>Learn More</Button>
                    </Box>

                </Grid>

            </Grid>
        </Box >
    );
};

export default Appointbanner;
