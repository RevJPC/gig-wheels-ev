import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1 }}>
          Gig Wheels EV
        </Typography>
        <Button color="inherit" component={Link} href="/">Home</Button>
        <Button color="inherit" component={Link} href="/about">About Us</Button>
        <Button color="inherit" component={Link} href="/team">Meet the Team</Button>
        <Button color="inherit" component={Link} href="/vehicles">Vehicles</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
