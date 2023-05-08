import { useEffect } from "react"
import Link from 'next/link';
import SearchBar from './SearchBar';

const HeadingAndSearch = ({isLoading,setIsLoading})=>{
    
    return (
        <>
            <div className='heading-and-search my-5'>
                <div className="container">
                    <div>
                        <div className="col-lg-10 mx-auto text-center heading-text">It is a long established fact that a reader will be distracted by looking at its layout.</div>
                    </div>
                    <div className="col-lg-8 col-md-8 mx-auto">
                        <div className="">
                                <SearchBar placeholder='Search Your Query' isLoading={isLoading} setIsLoading={setIsLoading} />
                        </div>
                        <div className="input-footer my-3">
                            Popular<span className="input-footer-span">Best Hp Laptop, Samsung Galaxy S21</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeadingAndSearch;