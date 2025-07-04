import style from "./page.module.css";
import Image from "next/image";
import MenuBlock from "../../components/MenuBlock";
import ServicesBlock from "../../components/ServicesBlock";
import brecf from "../../public/tea.png";
import main from "../../public/mainDish.png";
import drink from "../../public/drink.png";
import dessert from "../../public/dessert.png";
import ceitering from "../../public/ceitering.png"
import birthday from "../../public/birthday.png"
import weding from "../../public/weding.png"
import event from "../../public/event.png"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
export default function Home() {
  return (
    <div>
      <Header/>
        <div className={style.preview}>
          <p className={style.title}>Best food for your taste</p>
          <p className={style.addition}>Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
          <div className={style.buttons}>
            <button>Book A Table</button>
            <button>Explore Menu</button>
          </div>
        </div>
        <div className={style.menu}>
          <h1>Browse Our Menu</h1>
          <div className={style.menuWrapper}>
            <MenuBlock img = {brecf} title='Breakfast'/>
            <MenuBlock img = {main} title='Main Dishes'/>
            <MenuBlock img = {drink} title='Drinks'/>
            <MenuBlock img = {dessert} title='Desserts'/>
          </div>
        </div>
        <div className={style.services}>
          <h1>We also offer unique services for your events</h1>
          <div className={style.ServWrapper}>
            <ServicesBlock img={ceitering} title='Caterings'/>
            <ServicesBlock img={birthday} title='Birthdays'/>
            <ServicesBlock img={weding} title='Weddings'/>
            <ServicesBlock img={event} title='Events'/>
          </div>
        </div>
        <Footer/>
    </div>
  );
}
