import { BsArrowRightShort } from "react-icons/bs";
import { useState ,useRef} from "react";
import { useDispatch,useSelector } from "react-redux";
import { selectSearchChat, searchFetch,setSearchChat, searchGoogle } from "@/store/slices/searchSlice";
import { useRouter } from "next/router";


const SearchBar = ({placeholder,isLoading,setIsLoading}) => {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();
  const searchChat = useSelector(selectSearchChat);
  const textareaRef = useRef(null);

  const handleSearch = () => {
    if(searchText===''){
     textareaRef.current.focus();
     return;
    }
    setIsLoading(true);
    dispatch(searchFetch({'messages':[...searchChat, { "role": "user", "content": `${searchText}` }]})).then((res) => {
      if (res.success) {
        dispatch(setSearchChat([...searchChat, { "role": "user", "content": `${searchText}` }, { "role": "assistant", "content": `${res.formatted_response}` }]))
        setSearchText('');
        setIsLoading(false);
        router.push("/search");
      }
    });
  };
 

  const handletextareaOnchange = (e) => {
    let elem = document.getElementById("home-textarea");
    elem.style.height = `${elem.scrollHeight}px`;
    setSearchText(e.target.value);
  };

  return <>
      <textarea id='home-textarea' ref={textareaRef} className="w-100 search-input-home border-0" placeholder={placeholder} value={searchText} onChange={(e) => handletextareaOnchange(e)}></textarea>
      <div className="text-end">
          <button onClick={(e) => handleSearch(e)} disabled={isLoading} className="search-button btn rounded-0">{!isLoading ? 'Search' : 'Loading...'} <BsArrowRightShort className='right-arrow' /></button>
      </div>
      </>;
};

export default SearchBar;
