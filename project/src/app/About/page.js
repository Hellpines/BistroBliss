import Image from 'next/image'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import style from './style.module.scss'
import meal from '../../../public/meal.png'
import phone from '../../../public/phone.png'
import mail from '../../../public/mail.png'
import gps from '../../../public/location-marker.png'
import cooking from '../../../public/cooking.png'
function About(){
    return (
        <div>
            <Header/>
            <section className={style.contact_info}>
                <div className={style.left}>
                    <Image
                    src ={meal}
                    alt =''/>
                    <div className={style.contact_block}>
                        <h2>Come and visit us</h2>
                        <div className={style.text}>
                            <div className={style.item}>
                                <Image
                                src ={phone}
                                width={24}
                                height={24}
                                alt =''/>
                                <p>(414) 857 - 0107</p>
                            </div>
                            <div className={style.item}>
                                <Image
                                src ={mail}
                                width={24}
                                height={24}
                                alt =''/>
                                <p>happytummy@restaurant.com</p>
                            </div>
                            <div className={style.item}>
                                <Image
                                src ={gps}
                                width={24}
                                height={24}
                                alt =''/>
                                <p>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.right}>
                    <h1>We provide healthy food for your family.</h1>
                    <h4>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</h4>
                    <p>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
                </div>
            </section>
            <section className={style.information}>
                <div className={style.left}>
                    <div className={style.text}>
                        <h1>A little information for our valuable guest</h1>
                        <p>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
                    </div>
                    <div className={style.counts}>
                        <div className={style.count}>
                            <h1>3</h1>
                            <h3>Locations</h3>
                        </div>
                        <div className={style.count}>
                            <h1>1995</h1>
                            <h3>Founded</h3>
                        </div>
                        <div className={style.count}>
                            <h1>65+</h1>
                            <h3>Staff Members</h3>
                        </div>
                        <div className={style.count}>
                            <h1>100%</h1>
                            <h3>Satisfied Customers</h3>
                        </div>
                    </div>
                </div>
                <div className={style.right}>
                    <Image
                    src ={cooking}
                    alt =''/>
                </div>
            </section>
            <Footer/>
        </div>
    )
}
export default About