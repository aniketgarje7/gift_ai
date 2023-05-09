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
import ChatSection from "../../component/ChatSection";
import HomePageFooter from "../../component/HomePageFooter";
import Products from "../../component/Products";
import SearchPageFooter from "../../component/SearchPageFooter";


const Search = () => {
  const dispatch = useDispatch();
  const result = useSelector(selectResult);
  const [isLoading, setIsLoading] = useState(false);
  const searchChat = useSelector(selectSearchChat);

  useEffect(() => {
    var objDiv = document.getElementById("scroll");
    if (!objDiv) return;
    objDiv.scrollTop = objDiv.scrollHeight;
  },[searchChat])
  return (
    <>
      <Head>
        <title>Search</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/gift.svg" />
      </Head>
      {isLoading && <div className='main-loader ' ><MainLoader /> </div>}
      <div className={isLoading ? 'body opacity-body' : 'body'}>
        <Header />
        <div className="main">
          <section>
            <div className="">
              <div className="bg-heading-search container-fluid"></div>
            </div>
          </section>

          <section>
            <div className="container search-section-search-page">
              <div className=" mx-auto">
            
                <div className="card border-0 main-card">
                  
                  <div className="card-body">
                    <div className="d-flex justify-content-between container ">
                      <p className="search-results">Search Result</p>
                      <Link className="refresh" href="/">
                        <IoMdRefresh className="fa-rotate-right" />
                        Refresh
                      </Link>
                    </div>
                 <ChatSection/>
                    <hr></hr>
                    <div>
                      <SearchBar placeholder="Continue Your Search" isLoading={isLoading} setIsLoading={setIsLoading} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {searchGoogle.items && searchGoogle.items.length > 0 && (
            <section className="section-3 container ">
              <div className="col-md-10 mx-auto text-center my-5">
                <h3>Here are some gift ideas for you:</h3>
              </div>
              <div className="col-md-10 mx-auto cursor-pointer">
                <div className="row card-row  justify-content-center">
                  {searchGoogle.items.map((product, key) => (
                      <div className="col-lg-3 col-md-4 col-sm-5 border rounded p-1 m-1" key={key}>
                        <div className="card border-0">
                          <Link href={product.formattedUrl}>
                          <img src={(product.pagemap && product.pagemap.cse_image && product.pagemap.cse_image[0].src) ? product.pagemap && product.pagemap.cse_image && product.pagemap.cse_image[0].src:'./gift.svg'} className="card-img-top card-image" alt="..." width={100} height={200} onError={(e) => {
                            e.currentTarget.onerror = null; // prevents looping
                            e.currentTarget.src = "./gift.svg";
                          }} />
                          </Link>
                          <div className="card-body">
                            <h5 className="card-title"><SeeMore message={product.title}/></h5>
                            {/* <p className="card-text"><SeeMore message={product.description}/></p> */}
                            {/* <span className="card-price">
                              {" "}
                              <BiRupee />
                              {product.price}
                            </span> */}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </section>
          )}
        </div>
        
      </div>
      <SearchPageFooter />
    </>
  );
};
export default Search;