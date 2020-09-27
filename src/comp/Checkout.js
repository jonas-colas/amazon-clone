import React from 'react'
import '../css/Checkout.css'
import Subtotal from './Subtotal'
import {useStateValue} from '../core/StateProvider'
import CheckoutProduct from './CheckoutProduct'


function Checkout() {
	const [{basket, user}] = useStateValue() //, dispatch

	return (
		<div className="checkout">
			
			<div className="checkout__left">
				<img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
				 alt="" className="chekout__ad" />

				<div>
				  <h3>Hello {user?.email}</h3>
					<h2 className="checkout__title">Your Shopping Basket</h2>
					
					{basket?.map((item, index )=> (
						<CheckoutProduct key={index} id={item.id} title={item.title}  
						 image={item.image} price={item.price} rating={item.rating}/>
						)
					)}

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