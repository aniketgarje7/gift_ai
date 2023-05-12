import { motion } from "framer-motion";
import { useState,useEffect } from "react";

const HomePageImages = () => {
  const [matches, setMatches] = useState(false);
  const [query] = useState("(min-width: 993px)");

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => {
      setMatches(media.matches);
    };

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", listener);
    } else {
      media.addEventListener(listener);
    }

    return () => {
      if (typeof media.removeEventListener === "function") {
        media.removeEventListener("change", listener);
      } else {
        media.removeEventListener(listener);
      }
    };
  }, [matches, query]);

  const framergrow = {scale:1.5};
  const framergrow2 = {scale:2};
  return (
    <div className="image-container container text-center my-5 mx-auto">
      <div className="row justify-content-center gy-5 gutters">
        <div className="col-sm-3 col-4 home-image" id='image1' >
          <motion.div id="image_1" className="position-absolute" whileHover={matches?framergrow2:framergrow}
      transition={{ type: "grow", stiffness: 600, damping: 20 }}>
          <img src="/assets/image1.png" alt="image" className=" mx-auto image-hover" />
          <div className="middle">
            <div className="text">Text</div>
          </div>
        </motion.div>
        </div>
        <div className="col-sm-3 col-4 home-image" id='image2'>
          <motion.div id="image_2" className="position-absolute" whileHover={matches?framergrow2:framergrow}
      transition={{ type: "grow", stiffness: 600, damping: 20 }} > 
          <img src="/assets/image2.png" alt="image" className="mx-auto image-hover" />

          <div className="middle">
            <div className="text">Medical</div>
          </div>
          </motion.div>
        </div>
        <div className="col-sm-3 col-4 home-image" id='image3'>
          <motion.div id="image_3" className="position-absolute" whileHover={matches?framergrow2:framergrow}
      transition={{ type: "grow", stiffness: 600, damping: 20 }}>
          <img src="/assets/image3.png" alt="image" className=" mx-auto image-hover" />
          <div className="middle">
            <div className="text">Medical</div>
            </div>
          </motion.div>
          </div>
        <div className="col-sm-3 col-4 home-image" id='image4'>
          <motion.div id="image_4" className="position-absolute" whileHover={matches?framergrow2:framergrow}
      transition={{ type: "grow", stiffness: 600, damping: 20 }}>
          <img src="/assets/image4.png" alt="image" className=" mx-auto image-hover" />
          <div className="middle">
            <div className="text">Text</div>
          </div>
          </motion.div>
          </div>
        <div className="col-sm-3 col-4 home-image" id='image5'>
          <motion.div id="image_5" className="position-absolute" whileHover={matches?framergrow2:framergrow}
      transition={{ type: "grow", stiffness: 600, damping: 20 }}>
          <img src="/assets/image5.png" alt="image" className=" mx-auto image-hover" />
          <div className="middle">
            <div className="text">Text</div>
          </div>
          </motion.div>
          </div>
        <div className="col-sm-3 col-4 home-image" id='image6'>
          <motion.div id="image_6" className="position-absolute" whileHover={matches?framergrow2:framergrow}
      transition={{ type: "grow", stiffness: 600, damping: 20 }}>
          <img src="/assets/image6.png" alt="image" className=" mx-auto image-hover" />
          <div className="middle">
            <div className="text">Text</div>
          </div>
          </motion.div>
          </div>
        <div className="col-sm-3 col-4 home-image" id='image7'>
          <motion.div id="image_7" className="position-absolute" whileHover={matches?framergrow2:framergrow}
      transition={{ type: "grow", stiffness: 600, damping: 20 }}>
          <img src="/assets/image7.png" alt="image" className=" mx-auto image-hover" />
          <div className="middle">
            <div className="text">Text</div>
          </div>
        </motion.div>
        </div>
        <div className="col-sm-3 col-4 home-image" id='image8'>
          <motion.div id="image_8" className="position-absolute" whileHover={matches?framergrow2:framergrow}
      transition={{ type: "grow", stiffness: 600, damping: 20 }}>
          <img src="/assets/image8.png" alt="image" className=" mx-auto image-hover" />
          <div className="middle">
            <div className="text">Text</div>
          </div>
        </motion.div>
      </div>
    </div>
    </div>
  );
};

export default HomePageImages;
