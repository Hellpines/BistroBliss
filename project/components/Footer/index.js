import style from "./style.module.css";
import Image from "next/image";
import japFood from '../../public/japanese-food2.png';
import img1 from '../../public/1.png';
import img2 from '../../public/2.png';
import img3 from '../../public/3.png';
import img4 from '../../public/4.png';
function Footer() {
  return (
    <div>
      <div className={style.block}>
      <div className={style.wrapper}>
        <div className={style.left}>
          <div className={style.food}>
            <Image src={japFood} alt="food"/>
            <p>Bistro Bliss</p>
          </div>
          <p className={style.dop}>In the new era of technology we look a in the future with certainty and pride to for our company and.</p>
        </div>
        <div className={style.center}>
          <h1>Pages</h1>
          <p>Home</p>
          <p>About</p>
          <p>Menu</p>
          <p>Pricing</p>
          <p>Blog</p>
          <p>Contact</p>
          <p>Delivery</p>
        </div>
        <div className={style.center}>
          <h1>Utility Pages</h1>
          <p>Start Here</p>
          <p>Styleguide</p>
          <p>Password Protected</p>
          <p>404 Not Found</p>
          <p>Licenses</p>
          <p>Changelog</p>
          <p>View More</p>
        </div>
        <div className={style.right}>
          <h1>Follow Us On Instagram</h1>
          <div className={style.images}>
            <Image src={img1} alt="img"/>
            <Image src={img2} alt="img"/>
            <Image src={img3} alt="img"/>
            <Image src={img4} alt="img"/>
          </div>
        </div>
      </div>
      </div>
      <div className={style.copir}>
        <h1>Copyright © 2023 Hashtag Developer. All Rights Reserved</h1>
      </div>
    </div>
  );
}
export default Footer;
