import React from 'react'
import '../css/Checkout.css'
import Subtotal from './Subtotal'


function Checkout() {
	return (
		<div className="checkout">
			
			<div className="checkout__left">
				<img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
				 alt="" className="chekout__ad" />

				<div>
					<h2 className="checkout__title">Your Shopping Basket</h2>
				</div>
			</div>
			<div className="checkout__right">
				<Subtotal />
				<h2 className="checkout__title">
					Subtotal
				</h2>
			</div>
		</div>
	)
}

export default Checkout