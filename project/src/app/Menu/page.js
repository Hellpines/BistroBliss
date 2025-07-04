import Footer from "../../../components/Footer"
import Header from "../../../components/Header"
import eggs from '../../../public/eggs.png'
import style from './style.module.scss'
import Image from "next/image";


const products = [
    {
        price: "$ 9.99",
        name: "Fried Eggs",
        description: "Made with eggs, lettuce, salt, oil and other ingredients."
    },
    {
        price: "$ 15.99",
        name: "Hawaiian Pizza",
        description: "Made with eggs, lettuce, salt, oil and other ingredients."
    },
    {
        price: "$ 7.25",
        name: "Martinez Cocktail",
        description: "Made with eggs, lettuce, salt, oil and other ingredients."
    },
    {
        price: "$ 20.99",
        name: "Butterscotch Cake",
        description: "Made with eggs, lettuce, salt, oil and other ingredients."
    },
    {
        price: "$ 5.89",
        name: "Mint Lemonade",
        description: "Made with eggs, lettuce, salt, oil and other ingredients."
    },
    {
        price: "$ 18.05",
        name: "Chocolate Icecream",
        description: "Made with eggs, lettuce, salt, oil and other ingredients."
    },
    {
        price: "$ 12.55",
        name: "Cheese Burger",
        description: "Made with eggs, lettuce, salt, oil and other ingredients."
    },
    {
        price: "$ 12.99",
        name: "Classic Waffles",
        description: "Made with eggs, lettuce, salt, oil and other ingredients."
    }
];


function Menu() {
    return (
        <div>
            <Header />
            <div className={style.wrapper}>
                <div className={style.text}>
                    <h1>Our Menu</h1>
                    <p>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
                </div>
                <div className={style.btns}>
                    <div className={`${style.btn} ${style.first}`} >
                        <p>🍱</p>
                        <button>ALL</button>
                    </div>
                    <div className={`${style.btn} ${style.second}`}>
                        <p>☕</p>
                        <button>Lemonade</button>
                    </div>
                    <div className={`${style.btn} ${style.third}`}>
                        <p>🥙</p>
                        <button>Main courses</button>
                    </div>
                    <div className={`${style.btn} ${style.last}`}>
                        <p>🍰</p>
                        <button>Dessert</button>
                    </div>
                </div>
                <div className={style.cards}>
                    {products.map(el => <div className={style.item}>
                        <Image
                            src={eggs}
                            alt=''
                        />
                        <div className={style.text}>
                            <h2>{el.price}</h2>
                            <h3>{el.name}</h3>
                            <p>{el.description}</p>
                        </div>
                    </div>)}
                </div>
            </div>

            <Footer />
        </div>
    )
}
export default Menu