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
    <div style={{maxWidth:`100%`, height:`600px`}}>
      <Head>
        <title>Next.js Carousel</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
        <link rel="icon" href="/logo2.ico" type="image/x-icon" sizes="48x48"></link>
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