import { BsArrowRightShort } from "react-icons/bs";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchChat, searchFetch, setSearchChat } from "@/store/slices/searchSlice";
import { useRouter } from "next/router";
import { CiSearch } from 'react-icons/ci'

const SearchBar = ({ placeholder, isLoading, setIsLoading }) => {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();
  const searchChat = useSelector(selectSearchChat);
  const textareaRef = useRef(null);
  const [page,setPage] = useState(false);
  const handleSearch = () => {
    if (searchText === '') {
      textareaRef.current.focus();
      return;
    }
    setIsLoading(true);
    dispatch(searchFetch({ 'messages': [...searchChat, { "role": "user", "content": `${searchText}` }] })).then((res) => {
      if (res.success) {
        dispatch(setSearchChat([...searchChat, { "role": "user", "content": `${searchText}` }, { "role": "assistant", "content": `${res.formatted_response}` }]))
        setIsLoading(false);
        setSearchText('');
        router.push("/search");

      }
    });
  };
  
  useEffect(()=>{
    if(router.pathname.startsWith('/search')){
   setPage(true)
    }
  },[])
  const handletextareaOnchange = (e) => {
    let elem = document.getElementById("home-textarea");
    elem.style.height = `${elem.scrollHeight}px`;
    setSearchText(e.target.value);
  };

  const placeholderinput = "iPhone 13, 128GB, Product Red - Unlocked (Renewed Premium)"
  return (

  <div className="position-relative">
    {/* <textarea id='home-textarea' ref={textareaRef} className="w-100 search-input-home border-0" placeholder={placeholder} value={searchText} onChange={(e) => handletextareaOnchange(e)}></textarea>
    <div className="text-end">
      <button onClick={(e) => handleSearch(e)} disabled={isLoading} className="search-button btn rounded-0">{!isLoading ? 'Search' : 'Loading...'} <BsArrowRightShort className='right-arrow' /></button>
    </div> */}
      {page ? 
      <div className="w-100">
      <input ref={textareaRef} id='home-textarea' className='w-80 search-input-homepage' placeholder='Type your Message' value={searchText} onChange={(e) => handletextareaOnchange(e)} />
      <button className="btn ">Send</button>
      </div>
      :<div>
    <input ref={textareaRef} id='home-textarea' className='w-100 search-input-homepage' placeholder={placeholderinput} value={searchText} onChange={(e) => handletextareaOnchange(e)} />
    <span className="search-icon-span" onClick={(e) => handleSearch(e)} disabled={isLoading}><CiSearch className="search-icon"/></span>
 </div> }</div>)
};

export default SearchBar;
