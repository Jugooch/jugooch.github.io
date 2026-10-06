import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Experience } from '@/components/experience';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { SiteHeader } from '@/components/site-header';
import { Work } from '@/components/work';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Work />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
