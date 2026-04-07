import Hero from '@/components/Hero';
import About from '@/components/About';
import Explore from '@/components/Explore';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import Practical from '@/components/Practical';
import MapEmbed from '@/components/MapEmbed';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Explore />
      <Gallery />
      <Reviews />
      <Practical />
      <MapEmbed />
    </>
  );
}
