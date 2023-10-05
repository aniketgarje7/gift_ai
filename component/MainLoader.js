import Image from "next/image";
import Head from "next/head";
import { Circles } from "react-loader-spinner";
import TextAnimation from "./TextAnimation";
const MainLoader = () => {
  return (
    <>
      {/* <Circles
                height="80"
                width="80"
                color="#F45050"
                ariaLabel="circles-loading"
                wrapperStyle={{justifyContent:'center'}}
                wrapperClass=""
                visible={true}
                
            /> */}
      <div className="d-flex justify-content-center">
        <Image src="/assets/giftai.gif" alt="loading" width={200} height={200} />
      </div>
      <TextAnimation text="We know how hard it is to find the right gift. Give us few moments" />
    </>
  );
};
export default MainLoader;
