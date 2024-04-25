import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/Navbar';

const Vehicles: NextPage = () => {
  return (
    <>
      <Head>
        <title>Vehicles | Gig Wheels EV</title>
      </Head>
      <Navbar />
      <h1>Our Vehicles</h1>
      <p>Explore our range of electric vehicles.</p>
    </>
  );
};

export default Vehicles;
