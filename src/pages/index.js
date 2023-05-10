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
import HomePage from '../../component/HomePage';
import HomePageFooter from '../../component/HomePageFooter';
import HeaderHomePage from '../../component/HeaderHomePage';

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
        <link rel="icon" href="/gift.svg" />
      </Head>
      {isLoading && <div className='main-loader ' ><MainLoader /> </div>}
      <div className={isLoading?'body opacity-body ':'body'}>
        
        <div>
          <HomePage isLoading={isLoading} setIsLoading={setIsLoading}/>
        </div>
    
        <HomePageFooter />
      </div>
   
    </>
  )
}

