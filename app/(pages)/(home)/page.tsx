import Footer from '@/components/wrappers/footer/footer';
import HeaderOne from '@/components/wrappers/header/header-one';
import HeroOne from '@/components/wrappers/hero/hero-one';
import QuotoOne from '@/components/wrappers/quotes/quote-one';
import CleanIntuitive from '@/components/wrappers/sections/clean-intuitive';
import DetailOriented from '@/components/wrappers/sections/detail-oriented';
import PrettyOptimized from '@/components/wrappers/sections/pretty-optimzed';
import { mergeOpenGraph } from '@/lib/mergeOpenGraph';
import { Metadata } from 'next';

export default function Home() {
  return (
    <>
      <HeaderOne />
      <HeroOne />
      <main className='py-20 flex flex-col gap-12'>
        <QuotoOne />
        <CleanIntuitive />
        <DetailOriented />
        <PrettyOptimized />
      </main>
      <Footer />
    </>
  );
}

export const metadata: Metadata = {
  title: "Parvej Ansari · Front-end Developer",
  description: "An online portfolio featuring a showcase of my projects and some thoughts as a Front-End Developer who loves intuitive, clean and modern UI design.",
  icons: {
    icon: "/logo/logo-16.png"
  },
  openGraph: mergeOpenGraph({
    title: "Parvej Ansari · Front-end Developer",
    url: '/'
  })
};