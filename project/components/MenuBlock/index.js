import style from "./style.module.css";
import Image from "next/image";
function MenuBlock(obj) {
  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.image}>
          <Image src={obj.img} alt="img"/>
        </div>
        <p className={style.title}>{obj.title}</p>
        <p className={style.dop}>In the new era of technology we look in the future with certainty and pride for our life.</p>
        <p className={style.button}>Explore Menu</p>
      </div>
    </div>
  );
}
export default MenuBlock;
