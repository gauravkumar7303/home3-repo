// app/page.js
import Head from 'next/head';
import Header from "./components/Header";
import Services from './components/Service';
import About from './components/About';

export default function Home() {
  return (
    <div style={{maxWidth:`100%`, height:`600px`}}>
      <Head>
        <title>Next.js Carousel</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="48x48"></link>
      </Head>
        <Header />
        <main>
         <Services />
         <About />
        </main>
    </div>
  );
}