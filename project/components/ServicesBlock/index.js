import style from "./style.module.css";
import Image from "next/image";
function ServicesBlock(obj) {
  return (
    <div>
      <div className={style.wrapper}>
        <Image src={obj.img} alt="img"/>
        <p className={style.title}>{obj.title}</p>
        <p className={style.dop}>In the new era of technology we look in the future with certainty for life.</p>
      </div>
    </div>
  );
}
export default ServicesBlock;
