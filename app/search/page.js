import parse from 'html-react-parser';
import Script from 'next/script'

export default async function Page({ params }) {
    return (
        <main>
            <Script async src="https://cse.google.com/cse.js?cx=c173f3bb60ee04c86" />
            <div className="gcse-search"></div>

        </main>
    );
}