// app/page.js
import Head from 'next/head';
import Header from "./components/Header";
import Services from './components/Service';
import About from './components/About';
import Partners from './components/Partner';
import News from './components/News';
import Location from './components/Location';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Carousel</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="logo.ico" type="image/x-icon" sizes="48x48"></link>
      </Head>
        <Header />
        <main>
         <Services />
         <About />
         <Partners />
         <News />
         <Location />
         <Footer />
        </main>
    </div>
  );
}