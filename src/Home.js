import React from "react";
import "./Home.css";
import Product from './Product';

function Home(){
    return (
        <div className="home">
            <div className="home_container">
               <img 
                className="home_image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt="" />
            

                <div className="home_row">
                  <Product  
                  id="34779470"
                  title="Ferrero Rocher Premium Chocolates 24 Pieces, 300 g" 
                  price={29.50} 
                  image="https://images-eu.ssl-images-amazon.com/images/I/71uNpGYLbnL._AC_UL320_SR320,320_.jpg"
                  rating={4} />
                  <Product  
                  id="34573340"
                  title="GFC Kabab Powder, 1Kg" 
                  price={5} 
                  image="https://images-eu.ssl-images-amazon.com/images/I/61q6fuuhwwL._AC_UL320_SR320,320_.jpg"
                  rating={3} />
                </div>

                <div className="home_row">
                    <Product  
                    id="34776470"
                    title="Ferrero Rocher Premium Chocolates 24 Pieces, 300 g" 
                    price={29.50} 
                    image="https://images-eu.ssl-images-amazon.com/images/I/61mKoHH2rsL._AC_UL320_SR320,320_.jpg"
                    rating={5} />
                    <Product  
                    id="34771470"
                    title="MYFITNESS Chocolate Peanut Butter Smooth" 
                    price={11.50} 
                    image="https://images-eu.ssl-images-amazon.com/images/I/71pKvp1SOYL._AC_UL320_SR320,320_.jpg"
                    rating={5} />
                    <Product  
                    id="34773870"
                    title="Quaker Oats Pouch, 2Kg" 
                    price={299.50} 
                    image="https://images-eu.ssl-images-amazon.com/images/I/71zQEQXpuLL._AC_UL320_SR320,320_.jpg"
                    rating={3} />
                    
                </div>
            
                <div className="home_row">
                <Product  
                    id="34773450"
                    title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)" 
                    price={4093.50} 
                    image="https://m.media-amazon.com/images/I/71MlcO29QOL._AC_UY327_FMwebp_QL65_.jpg"
                    rating={4} />
                </div>
            
            </div>
        </div>
    );
}

export default Home;