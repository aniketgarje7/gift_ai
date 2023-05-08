import { BsArrowRightShort } from "react-icons/bs";
import { useState, useRef } from "react";
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

  const handletextareaOnchange = (e) => {
    let elem = document.getElementById("home-textarea");
    elem.style.height = `${elem.scrollHeight}px`;
    setSearchText(e.target.value);
  };

  const placeholderinput = "iPhone 13, 128GB, Product Red - Unlocked (Renewed Premium)"
  return <div className="position-relative">
    {/* <textarea id='home-textarea' ref={textareaRef} className="w-100 search-input-home border-0" placeholder={placeholder} value={searchText} onChange={(e) => handletextareaOnchange(e)}></textarea>
    <div className="text-end">
      <button onClick={(e) => handleSearch(e)} disabled={isLoading} className="search-button btn rounded-0">{!isLoading ? 'Search' : 'Loading...'} <BsArrowRightShort className='right-arrow' /></button>
    </div> */}
    
    <input ref={textareaRef} id='input-1' className='w-100 search-input-homepage' placeholder={placeholderinput}/>
    <span className="search-icon-span"><CiSearch className="search-icon"/></span>
    </div>
};

export default SearchBar;
