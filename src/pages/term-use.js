import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Head from "next/head";

const TermOfUse = () => {
    return (
        <>
            <Head>
                <title>Terms Of Use</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/gift.svg" />
            </Head>
            <div className='body'>
                <Header />
                <div className='main'>
                    <div className='section'>
                        <div className="">
                            <div className="bg-heading container-fluid"></div>
                        </div>
                    </div >

                    <div className="container terms-use-content p-4">
                        <h3 className=" terms-use-heading">Terms Of Use</h3>
                        <div className=" py-2 terms-use-para">
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default TermOfUse;
