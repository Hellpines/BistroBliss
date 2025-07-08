'use client'

import Footer from "../../../../components/Footer"
import Header from "../../../../components/Header"
import style from './style.module.scss'
import Bigeggs from '../../../../public/BigEgg.png'
import eggs from '../../../../public/eggs.png'
import burger  from '../../../../public/burger.png'
import cake from '../../../../public/cake.png'
import ice_cream from '../../../../public/ice_cream.png'
import pancakes from '../../../../public/pancakes.png'
import pizza from '../../../../public/pizza.png'
import wine from '../../../../public/wine.png'
import drinks from '../../../../public/drinks.png'

import info_icon from '../../../../public/info.svg'
import Image from "next/image";
import { useParams } from "next/navigation"
const menuItems = [
    {
        id: 1,
        name: "Fried Eggs",
        price: 9.99,
        imgPath: eggs,
        description: "Classic sunny-side-up eggs", // Изменено shortDescription → description
        longDescription: "Perfectly fried eggs with crispy edges and runny yolks, served with fresh lettuce and a pinch of sea salt. Cooked in premium olive oil for enhanced flavor.",
        sizes: [
            { size: "S", unit: "piece", quantity: 1 },
            { size: "M", unit: "pieces", quantity: 2 },
            { size: "L", unit: "pieces", quantity: 3 }
        ]
    },
    {
        id: 2,
        name: "Hawaiian Pizza",
        price: 15.99,
        imgPath: pizza,
        description: "Sweet & savory tropical pizza", // Изменено
        longDescription: "Traditional pizza with tomato sauce, mozzarella cheese, smoked ham, and juicy pineapple chunks. Baked in a wood-fired oven for authentic crispiness.",
        sizes: [
            { size: "S", unit: "slice", quantity: 1 },
            { size: "M", unit: "slices", quantity: 2 },
            { size: "L", unit: "whole", quantity: 1 }
        ]
    },
    {
        id: 3,
        name: "Martinez Cocktail",
        price: 7.25,
        imgPath: wine,
        description: "Classic gin-based cocktail", // Изменено
        longDescription: "A refined mix of Old Tom gin, sweet vermouth, maraschino liqueur, and orange bitters. Garnished with a lemon twist and Luxardo cherry.",
        sizes: [
            { size: "S", unit: "cl", quantity: 6 },
            { size: "M", unit: "cl", quantity: 9 },
            { size: "L", unit: "cl", quantity: 12 }
        ]
    },
    {
        id: 4,
        name: "Butterscotch Cake",
        price: 20.99,
        imgPath: cake,
        description: "Decadent caramel-flavored dessert", // Изменено
        longDescription: "Layers of moist vanilla sponge cake filled with creamy butterscotch mousse and topped with gold leaf flakes. Served with salted caramel sauce.",
        sizes: [
            { size: "S", unit: "slice", quantity: 1 },
            { size: "M", unit: "slices", quantity: 2 },
            { size: "L", unit: "whole", quantity: 1 }
        ]
    },
    {
        id: 5,
        name: "Mint Lemonade",
        price: 5.89,
        imgPath: drinks,
        description: "Refreshing citrus drink", // Изменено
        longDescription: "Freshly squeezed lemons blended with organic mint leaves and a touch of agave syrup. Served over crushed ice with a mint sprig garnish.",
        sizes: [
            { size: "S", unit: "ml", quantity: 250 },
            { size: "M", unit: "ml", quantity: 400 },
            { size: "L", unit: "ml", quantity: 600 }
        ]
    },
    {
        id: 6,
        name: "Chocolate Icecream",
        price: 18.05,
        imgPath: ice_cream,
        description: "Premium Belgian chocolate", // Изменено
        longDescription: "Velvety ice cream made with 70% dark Belgian chocolate and Madagascar vanilla beans. Topped with chocolate shavings and raspberry coulis.",
        sizes: [
            { size: "S", unit: "scoop", quantity: 1 },
            { size: "M", unit: "scoops", quantity: 2 },
            { size: "L", unit: "scoops", quantity: 3 }
        ]
    },
    {
        id: 7,
        name: "Cheese Burger",
        price: 12.55,
        imgPath: burger,
        description: "Juicy beef patty with cheese", // Изменено
        longDescription: "100% Angus beef patty with melted cheddar, crispy lettuce, pickles, and special sauce in a brioche bun. Served with hand-cut fries.",
        sizes: [
            { size: "S", unit: "single", quantity: 1 },
            { size: "M", unit: "double", quantity: 2 },
            { size: "L", unit: "triple", quantity: 3 }
        ]
    },
    {
        id: 8,
        name: "Classic Waffles",
        price: 12.99,
        imgPath: pancakes,
        description: "Golden crispy waffles", // Изменено
        longDescription: "Authentic Belgian waffles with pearl sugar pockets. Served with whipped cream, seasonal berries, and maple syrup drizzle.",
        sizes: [
            { size: "S", unit: "piece", quantity: 1 },
            { size: "M", unit: "pieces", quantity: 2 },
            { size: "L", unit: "pieces", quantity: 3 }
        ]
    }
];
function Comp() {

    const { id } = useParams()
    const result = menuItems.filter(el => el.id == id)
    return (
        <div>
            <Header />
            <section className={style.card}>
                <div className={style.left}>
                    <Image
                        src={result[0].imgPath}
                        alt='' className={style.main_image}/>
                </div>
                <div className={style.right}>
                    <h1>{result[0].name}</h1>
                    <h3>{result[0].longDescription}</h3>
                    <h3>Size</h3>
                    <div className={style.sizes}>
                        {result[0].sizes.map(el => <div className={style.size_item}>
                            <div className={style.size}>{el.size}</div>
                            <p className={style.unit}>{el.quantity} {el.unit}</p>
                        </div>)}
                    </div>
                    <div className={style.total}>
                        <h2>Total:</h2>
                        <h2>{result[0].price}$</h2>
                    </div>
                    <div className={style.info}>
                        <Image
                            src={info_icon}
                            alt='' />
                        <p>The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.</p>
                    </div>
                    <button className={style.button_add}>Add to Order</button>
                </div>
            </section>
            <Footer />
        </div>
    )
}
export default Comp