import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Introduction from '@/components/Introduction';
import MySkills from '@/components/MySkills';
import Navbar from '@/components/Navbar';
import RecentWorks from '@/components/RecentWorks';
import Testimoinals from '@/components/Testimoinals';
import { Suspense } from 'react';




export default function Home() {

  return (
    <main className="flex flex-col   bg-bg_primary2 text-bg_white min-h-[100vh]  tracking-[.2rem]">
      <Navbar />
      <Hero />
      <Introduction />
      <MySkills/>
      <RecentWorks />
      <Testimoinals />
      <Contact />
      <Footer />
    </main>
  );
}
