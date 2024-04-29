import React from 'react';
import Head from 'next/head';
import { Container, Typography, Link, Box } from '@mui/material';

const ComingSoon = () => {
  return (
    <>
      <Head>
        <title>Coming Soon - Gig Wheels EV</title>
        <link rel="icon" href="/public/favicon.ico" /> {/* Adjust the href path based on your favicon location */}
      </Head>
      <Container component="main" maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Coming Soon - Gig Wheels EV
        </Typography>
        <Typography variant="h5">
        Electrify your gig!  Gig Optimized, Rental Electric Vehicles.    
        </Typography>
        <Box mt={2}>
          <Typography>
          <i>We are working hard to bring you a new experience.</i>
          </Typography>
        </Box>
        <Box mt={2}>
          <Link href="mailto:info@gigwheelsev.com" color="primary" underline="hover">
            Email us for more information
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default ComingSoon;
