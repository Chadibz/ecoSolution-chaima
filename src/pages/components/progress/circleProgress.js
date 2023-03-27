import styles from "./Progress.module.css";
const img3 = new URL("../../../../public/assets/puissance.png", import.meta.url);
import CountUp from "react-countup";
export default function CircleProgress({ id, title, number, image }) {
    return (
  
       <div className={styles.body}>
        <div className={styles.skill}>
         <div className={styles.outer}>
         <div className={styles.inner}>
          <div ><CountUp className={styles.counter} end={number} duration={1}/></div>
          
         </div>
         </div>

         <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#e91e63" />
               <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
         </defs>
         <circle className={styles.circle} cx="80" cy="80" r="70" stroke-linecap="round" />
     </svg>
     <div className={styles.img_title}>
        <img className={styles.img_counter} src={image} ></img>
        <h5 className={styles.title_counter}>{title}</h5>
        </div>
        </div>
        </div>
    );
  }