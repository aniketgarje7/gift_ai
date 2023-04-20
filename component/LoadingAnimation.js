import { useRef } from "react";
import { useAnimationFrame } from "framer-motion";
import styles from '@/styles/Load.module.css';

const LoadingAnimation = ()=>{
    const ref = useRef(null);

    useAnimationFrame((t) => {
        const rotate = Math.sin(t / 700) * 200;
        const y = (1 + Math.sin(t / 1000)) * -50;
        ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
    });
    return (
        <>  <div className='container'>
            <div className={styles.container}>
                <div className={styles.cube} ref={ref}>
                    <div className={`${styles.side} ${styles.front}` } >
                        <img src='https://images.unsplash.com/photo-1513885535751-8b9238bd345a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' width='200px' height='200px' />
                    </div>
                    <div className={`${styles.side} ${styles.left}`}/>
                    <div className={`${styles.side} ${styles.right}`}  />
                    <div className={`${styles.side} ${styles.top}`} />
                    <div className={`${styles.side} ${styles.bottom}`} />
                    <div className={`${styles.side} ${styles.back}`}/>
                </div>
            </div>
            </div>
        </>
    )
}

export default LoadingAnimation;