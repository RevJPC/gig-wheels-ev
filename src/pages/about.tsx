import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/Navbar';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Us | Gig Wheels EV</title>
      </Head>
      <Navbar />
      <h1>About Us</h1>
      <p>Learn more about our mission and vision.</p>
    </>
  );
};

export default About;
