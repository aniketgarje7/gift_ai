import { BsArrowRightShort } from "react-icons/bs";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchChat, searchFetch, setSearchChat } from "@/store/slices/searchSlice";
import { useRouter } from "next/router";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ placeholder, isLoading, setIsLoading }) => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const searchChat = useSelector(selectSearchChat);
  const textareaRef = useRef(null);
  const [page, setPage] = useState(false);
  const [width, setWidth] = useState(null);

  const handleSearch = () => {
    if (searchText === "") {
      textareaRef.current.focus();
      return;
    }
    setIsLoading(true);
    dispatch(searchFetch({ messages: [...searchChat, { role: "user", content: `${searchText}` }] })).then((res) => {
      if (res.success) {
        dispatch(setSearchChat([...searchChat, { role: "user", content: `${searchText}` }, { role: "assistant", content: `${res.formatted_response}` }]));
        setIsLoading(false);
        setSearchText("");
        router.push("/search");
      }
    });
  };

  useEffect(() => {
    if (router.pathname.startsWith("/search")) {
      setPage(true);
    }
    let elem = document.getElementById("home-textarea");
    if (elem) {
      setWidth(`${elem.scrollWidth}`);
    }
  }, []);

  const handletextareaOnchange = (e) => {
    let elem = document.getElementById("home-textarea");
    if (elem) {
      elem.style.height = `${elem.scrollHeight}px`;
    }
    setSearchText(e.target.value);
  };

  const handleKeyDown = (e)=>{
    if (e.key === 'Enter') {
      handleSearch()
    }
  }
  const placeholderinput = width && width > 500 ? "iPhone 13, 128GB, Product Red - Unlocked (Renewed Premium)" : "Type your Message";
  return (
    <div className="container position-relative">
      {page ? (
        <div className="search-input-main">
          <div className="w-83">
            <input
              ref={textareaRef}
              id="search-textarea"
              className=" search-input-homepage"
              placeholder="Type your Message"
              value={searchText}
              onChange={(e) => handletextareaOnchange(e)}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div className="w-15 send-button-div">
            <button className="btn send-button px-5" onClick={(e) => handleSearch(e)} disabled={isLoading}>
              Send
            </button>
          </div>
        </div>
      ) : (
        <div>
          <input
            ref={textareaRef}
            id="home-textarea"
            className="w-100 search-input-homepage"
            placeholder={placeholderinput}
            value={searchText}
            onChange={(e) => handletextareaOnchange(e)}
            onKeyDown={handleKeyDown}
          />
          <span className="search-icon-span" onClick={(e) => handleSearch(e)} disabled={isLoading}>
            <CiSearch className="search-icon cursor-pointer" />
          </span>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
