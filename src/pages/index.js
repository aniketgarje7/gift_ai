import Head from 'next/head';
import Image from 'next/image';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import Link from 'next/link';
import SearchBar from '../../component/SearchBar';
import { useEffect, useState } from 'react';
import LoadingAnimation from '../../component/LoadingAnimation';
import MainLoader from '../../component/MainLoader';
import { useDispatch } from 'react-redux';
import { setSearchChat,setResult } from '@/store/slices/searchSlice';


export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(setSearchChat([{ "role": "system", "content": "You are a helpful assistant." }]));
    dispatch(setResult({}));
  },[])
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLoading && <div className='main-loader ' ><MainLoader /> </div>}
     {/* {isLoading && <LoadGame/>} */}
      <div className={isLoading?'body opacity-body ':'body'}>
        <Header />
        <div className='main'>
          <div className='section'>
            <div className="">
              <div className="bg-heading container-fluid"></div>
            </div>
          </div >


          <div className='section'>
            <div className="container search-section">
              <div>
                <h2 className="padding-heading col-lg-10 mx-auto text-center">It is a long established fact that a reader will be distracted by looking at its layout.</h2>
              </div>
              <div className="col-lg-8 col-md-8 mx-auto">
                <div className="card border-0 main-card">
                  <div className="card-body">

                  <SearchBar placeholder='Search Your Query' isLoading={isLoading} setIsLoading={setIsLoading}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
