import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";

const SeeMore = ({ message }) => {
  const [seeMore, setSeeMore] = useState(false);
  useEffect(() => {
    setSeeMore(false);
  }, [message]);
  return (
    <>
      {message && seeMore ? message : message.substring(0, 100)}
      {message.length > 100 && (
        <span className="m-1">
          {seeMore ? (
            <span className="see-more cursor-pointer" onClick={() => setSeeMore((pre) => !pre)}>
              {" "}
              Less
            </span>
          ) : (
            <span className="see-more text-nowrap cursor-pointer" onClick={() => setSeeMore((pre) => !pre)}>
              {" "}
              See More <BsArrowRight />
            </span>
          )}
        </span>
      )}
    </>
  );
};

export default SeeMore;
