import Footer from '@/components/wrappers/footer/footer';
import HeaderOne from '@/components/wrappers/header/header-one';
import PageHeader from '@/components/wrappers/headings/page-header';
import PageImage from '@/components/wrappers/projects/page-image';
import { mergeOpenGraph } from '@/lib/mergeOpenGraph';
import { Metadata } from 'next';
import BlogContents from './components/content';
import { blog } from '@/constants';

export default async function Page() {

    return (
        <>
            <HeaderOne />
            <main className='py-20 flex flex-col gap-12'>
                <PageHeader title="Personal Blog"
                    description="web development thoughts and stories."
                    headerImage={<PageImage />}
                />
                <BlogContents posts={blog} />

            </main>
            <Footer />
        </>
    );
}


export const metadata: Metadata = {
    title: "Blog - Parvej Ansari · Front-end Developer",
    description: "An online portfolio featuring a showcase of my projects and some thoughts as a Front-End Developer who loves intuitive, clean and modern UI design.",
    icons: {
        icon: "/logo/logo-16.png"
    },
    openGraph: mergeOpenGraph({
        title: "Parvej Ansari · Front-end Developer",
        url: '/'
    })
};