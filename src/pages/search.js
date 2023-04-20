import Head from "next/head";
import Image from "next/image";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Link from "next/link";
import { BiRupee } from "react-icons/bi";
import { BsArrowRightShort, BsArrowRight } from "react-icons/bs";
import { IoMdRefresh } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { selectResult, selectSearchChat } from "@/store/slices/searchSlice";
import { useEffect, useState } from "react";
import SearchBar from "../../component/SearchBar";
import SeeMore from '../../component/SeeMore';
import MainLoader from "../../component/MainLoader";

const Search = () => {
  const dispatch = useDispatch();
  const result = useSelector(selectResult);
  const [isLoading, setIsLoading] = useState(false);
  const searchChat = useSelector(selectSearchChat);
  
  useEffect(()=>{
    var objDiv = document.getElementById("scroll");
    if(!objDiv)return;   
    objDiv.scrollTop = objDiv.scrollHeight;
  },[searchChat])
  return (
    <>
      <Head>
        <title>Search</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLoading && <div className='main-loader ' ><MainLoader /> </div>}
      <div className={isLoading?'body opacity-body':'body'}>
        <Header />
        <div className="main">
          <section>
            <div className="">
              <div className="bg-heading-search container-fluid"></div>
            </div>
          </section>

          <section>
            <div className="container search-section-search-page">
              <div className="col-lg-10 col-md-10 mx-auto">
                <div className="d-flex justify-content-between container ">
                  <p className="search-results">Search Result</p>
                  <Link className="refresh" href="/">
                    <IoMdRefresh className="fa-rotate-right" />
                    Refresh
                  </Link>
                </div>
                <div className="card border-0 main-card">
                  <div className="card-body">
                    <div className="card-text search-input position-relative" id='scroll'>
                    {searchChat.length>1 && searchChat.map((chat,key)=>key!==0 && <div key={key}>{chat.role==='user'?
                        <div className="text-start profile-1-text row position-relative" key={key}>
                          <img src="./assets/profile1.png" alt="profile" className="profile1" />
                          <span className=" profile-1-span col-md-6">{chat.content}</span>
                        </div>
                      
                      :
                        <div className="text-end row justify-content-end position-relative profile-2-text" key={key}>
                          <span
                            className="col-md-6 profile-2-span text-start
                         "
                          >
                            {" "}
                             <SeeMore message={chat.content} />
                          </span>
                          <img src="./assets/profile2.png" alt="profile" className="profile2" />
                        </div>
                    }</div>)}
                    </div>

                    <hr></hr>
                    <div>
                      {/* <textarea className="w-100 h-100 border-0" placeholder="Continue your search"></textarea>
                      <div className="text-end">
                        <button onClick={()=>handleSearch()} className="search-button btn rounded-0">
                          Search <BsArrowRightShort className="right-arrow"/>
                        </button>
                      </div> */}
                      <SearchBar placeholder="Continue Your Search" isLoading={isLoading} setIsLoading={setIsLoading}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {result.products && result.products.length > 0 && (
            <section className="section-3 container ">
              <div className="col-md-10 mx-auto text-center my-5">
                <h3>Here are some gift ideas for you:</h3>
              </div>
              <div className="col-md-10 mx-auto cursor-pointer">
                <div className="row card-row  justify-content-center">
                  {result &&
                    result.products &&
                    result.products.map((product, key) => (
                      <div className="col-lg-3 col-md-4 col-sm-5 border rounded p-1 m-1" key={key}>
                        <div className="card border-0">
                          <Link href={product.url}>
                            <img src={product.image_url} className="card-img-top card-image" alt="..." width={100} height={100} />
                          </Link>
                          <div className="card-body">
                            <h5 className="card-title"><SeeMore message={product.title}/></h5>
                            {/* <p className="card-text"><SeeMore message={product.description}/></p> */}
                            <span className="card-price">
                              {" "}
                              <BiRupee />
                              {product.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </section>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Search;
