import React from 'react';

import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { Button, Typography, Container } from '@mui/material';
import { Box } from '@mui/system';


const BannerBg = {
    background: `url(${bg})`,

    // backgroundColor: 'rgba(45,58,74, 0.7)',
    // backgroundBlendMode: "darken, luminosity",
    // marginTop: 150
}


const varicalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 500

}



const Banner = () => {
    return (
        <Container style={BannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{ ...varicalCenter, textAlign: 'left' }} >
                    <Box>
                        <Typography variant='h4'>

                            Your New Smile <br />
                            Starts Here.
                        </Typography>
                        <Typography variant='h6' sx={{ fontWeight: 200, fontSize: 12, color: 'gray', my: 3 }}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium quos distinctio ducimus! Ea, labore praesentium saepe suscipit voluptatem sapiente voluptatibus.
                        </Typography>
                        <Button variant="contained" style={{ background: '#40E0D0', }}> Get Appointment</Button>

                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={varicalCenter} >
                    <img style={{ width: 400 }} src={chair} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;
