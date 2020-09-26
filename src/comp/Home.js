import React from 'react'
import '../css/Home.css'
import Product from './Product'


function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
				alt="" className="home__image" />

				<div className="home__row">
				
					<Product id="124132233" title="The lean Startup: How Constant innovation Creates
					Radically Successful Businesses Paperback" 
					price={11.96} 
					image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={5} />

					<Product id="456345345" 
					title="Kenwood kMix Stand Mixer for Baking, Stylish kitchen Mixer with K-beater, 
					Dough Hook and Whish, 5 Litre Glass Bowl"
					 price={239.99} rating={4} 
					image="https://images-na.ssl-images-amazon.com/images/I/91gRKbX%2BS8L._AC_SX679_.jpg" />
				
				</div>
				<div className="home__row">
					
					<Product id="97853439" title="Samsung LC5779343 49' Curved LED Gaming Monitor "
					price={199.99} rating={3} 
					image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SW466.jpg"
						/>
					
					<Product id="3935392334" title="Amazon Echo (3rd generation | Smart speaker
					with Alexa, Charcoal Fabric " price={98.99} rating={5} 
					image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$" />
					
					<Product id="13423423523" title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) 
					- Silver (4th Generation)" price={598.99} rating={4}
					image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
					 />

				</div>
				<div className="home__row">
					<Product id="787878934" title="Samsung LCD4984SDJK453K3 49' Curved LED Gaming Monitor
					 - Super Ultra Wide Dual WQHD 5120 x 1440" rating={4} price={1094.98}
					 image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
					/>
					<Product id="6547878934" 
					title="Apple 13.3 inch MacBook Pro with 
					Touch Bar, Intel Core i7 Quad-Core, 8GB RAM, 256GB SSD Z0W40LL/A, 
					2019 Model w/ Exclusive Specs" rating={4} price={1094.98}
					 image="https://images-na.ssl-images-amazon.com/images/I/51sxsNtPebL._AC_SX450_.jpg"
					/>
				</div>
			</div>
		</div>
	)
}

export default Home