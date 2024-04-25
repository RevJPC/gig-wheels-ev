import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/Navbar';

const Team: NextPage = () => {
  return (
    <>
      <Head>
        <title>Meet the Team | Gig Wheels EV</title>
      </Head>
      <Navbar />
      <h1>Meet Our Team</h1>
      <p>Our team drives us forward.</p>
    </>
  );
};

export default Team;
