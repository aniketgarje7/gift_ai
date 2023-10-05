import SearchBar from "../Searchpage/SearchBar";

const HeadingAndSearch = ({ isLoading, setIsLoading }) => {
  const heading = "AI-Powered Gift Suggestions: The Smart Way to Shop for Gifts";
  return (
    <>
      <div className="heading-and-search ">
        <div className="container">
          <div>
            <div className="col-lg-9 mx-auto text-center heading-text">{heading}</div>
          </div>
          <div className="col-lg-8 col-md-8 mx-auto">
            <div className="">
              <SearchBar placeholder="Search Your Query" isLoading={isLoading} setIsLoading={setIsLoading} />
            </div>
            <div className="input-footer my-3">
              Popular: <span className="input-footer-span">Best Hp Laptop, Samsung Galaxy S21</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeadingAndSearch;
