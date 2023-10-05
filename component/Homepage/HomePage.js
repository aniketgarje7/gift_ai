import HeaderHomePage from "../Header&Footer/HeaderHomePage";
import HeadingAndSearch from "./HeadingAndSearch";
import HomePageImages from "./HomePageImages";

const HomePage = ({ isLoading, setIsLoading }) => {
  return (
    <>
      <div className="background-giftai">
        <HeaderHomePage />
        <HeadingAndSearch isLoading={isLoading} setIsLoading={setIsLoading} />
        <HomePageImages />
      </div>
    </>
  );
};

export default HomePage;
