import React from "react";
import './Checkout.css';
import { useStateValue } from "./StateProvider";
import Subtotal from './Subtotal';
import CheckoutProduct from "./CheckoutProduct";

function Checkout(){
    const [{basket,user},dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img
                  className="checkout_ad"
                  src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                  alt=""
                />

                <div>
                    <h3>Hello,{user?.email}</h3>
                    <h2 className="checkout_title">
                      Your Shopping Basket
                     {/* CheckoutProduct */}
                     {basket.map(item => (
                         <CheckoutProduct 
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                         />
                     ))}

                    </h2>
                </div>
            </div>

            <div className="checkout_right">
               <Subtotal></Subtotal>
            </div>
        </div>
    );
}
export default Checkout;