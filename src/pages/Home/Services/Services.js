import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import Typography from '@mui/material/Typography';


const services = [
    {
        name: "Fluoride Treatment",
        description: "we jsutr give best severi for ever jsut try dpo some thing that you can make some sinced then you fix you life.",
        img: fluoride
    },
    {
        name: "Cavity filling",
        description: "we jsutr give best severi for ever jsut try dpo some thing that you can make some sinced then you fix you life.",
        img: cavity
    },
    {
        name: "teeth whitening",
        description: "we jsutr give best severi for ever jsut try dpo some thing that you can make some sinced then you fix you life.",
        img: whitening
    }

]





const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 400, m: 2, color: 'info.main' }} component="div">
                OUR SERVICES
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 600, m: 3 }} component="div">
                Services We Provide
            </Typography>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}></Service>)
                    }

                </Grid>
            </Container>
        </Box>
    );
};

export default Services;