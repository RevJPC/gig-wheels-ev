import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/Navbar';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Gig Wheels EV</title>
      </Head>
      <Navbar />
      <h1>Welcome to Gig Wheels EV</h1>
      <p>Your journey starts here.</p>
    </>
  );
};

export default Home;
