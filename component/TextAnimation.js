import React from "react";
import { motion } from "framer-motion";

const TextAnimation = ({ text }) => {
    const words = text.split(" ");
   
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
        }),
    };

    // Variants for each word.

    const child = {
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <>
        <motion.div
            style={{ overflow: "hidden", display: "flex", fontSize: "1rem",height:'auto',justifyContent:'center'}}
            variants={container}
            initial="hidden"
            animate="visible"
            className="animated-text"
        >
            {words.slice(0,10).map((word, index) => (
                <motion.span
                    variants={child}
                    key={index}
                    style={{marginRight:'5px'}}
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
            <motion.div
                style={{ overflow: "hidden", display: "flex", fontSize: "1rem", height: 'auto', justifyContent: 'center', color:'#F45050' }}
                variants={container}
                initial="hidden"
                animate="visible"
                className="animated-text"
            >
                {words.slice(10).map((word, index) => (
                    <motion.span
                        variants={child}
                        key={index}
                        style={{ marginRight: '5px' }}
                    >
                        {word}
                    </motion.span>
                ))}
            </motion.div>
        </>
    );
};

export default TextAnimation;