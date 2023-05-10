import Link from "next/link";
import { BiRupee } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { selectResult, selectSearchChat } from "@/store/slices/searchSlice";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CiMobile2 } from "react-icons/ci";

const Products = () => {

  const result = useSelector(selectResult);

 
 

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 614, min: 400 },
      items: 2
    },
      C: {
      breakpoint: { max: 400, min: 0 },
      items: 1
    }
  };
  console.log('d')
  return (
    <>
      {result.products && result.products.length > 0 && (
        <section className="products-bg  ">
          <div className="col-md-10 mx-auto text-center my-5">
            <h3 className="search-page-text">Here are some gift ideas for you:</h3>
          </div>
          <div className="col-md-10 mx-auto cursor-pointer">
            <div className="row  justify-content-center">
              <Carousel responsive={responsive} showDots={true} removeArrowOnDeviceType={["tablet", "mobile", "desktop","C"]} dotListClass="custom-dot-list-style">
              {result.products.map((product, key) => 
                <div className="rounded p-1 m-1 product-card " key={key+'12'}>
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
                  
                )}
              </Carousel>
            </div>
        
          </div>
        </section>
      )}
    </>
  );
};

export default Products;