import Link from "next/link";
import { BiRupee } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { selectResult, selectSearchChat } from "@/store/slices/searchSlice";
import { useEffect, useState } from "react";
import SeeMore from "component/SeeMore";
import { BsDot } from 'react-icons/bs';
import Slider from "react-slick";

const Products = () => {

  const result = useSelector(selectResult);
 
 
  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: false,
    responsive: [{
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 538,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },

    ]
  };

  return (
    <>
      {result.products && result.products.length > 0 && (
        <section className="products-bg  ">
          <div className="col-md-10 mx-auto text-center my-5">
            <h3 className="search-page-text">Here are some gift ideas for you:</h3>
          </div>
          <div className="col-md-10 mx-auto cursor-pointer">
            <div className="row  justify-content-center">
              <Slider {...settings}>
              {result &&
                result.products &&
                result.products.map((product, key) => (
                  <div className="  rounded p-1 m-1 product-card" key={key+'12'}>
                    <div className="card border-0">
                      <Link href={product.url} className='card-image-link'>
                        <img src={product.image_url} className="card-img-top card-image" alt="product-image" width={100} height={100} />
                      </Link>
                      <div className="card-body">
                        <h5 className="card-title card-title-height">
                         {product.title.substring(0,50)}
                        </h5>
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
              </Slider>
            </div>
        
          </div>
        </section>
      )}
    </>
  );
};

export default Products;