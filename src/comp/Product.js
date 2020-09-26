import React from 'react'
import '../css/Product.css'
import {useStateValue} from '../core/StateProvider'


function Product({id, title, image, price, rating}) {
	const [{basket}, dispatch] = useStateValue()

	//console.log("this is the basket >>>", basket)

	const addToBasket = () => {
		//dispatch the item into the data layer
		dispatch({
			type: 'ADD_TO_BASKET',
			item: {id, title, image, price, rating},
		})
	}

	return (
		<div className="product">
			<div className="product__info">
				<p>{title}</p> 
				<p className="product__price">
					<small>$</small>
					<strong>{price}</strong> 
				</p>
				<div className="product__rating"> 
					{Array(rating).fill().map((_, i) => (
						<p key={i}> <i className="fa fa-star" /></p> 
						)
					)}
				</div>
			</div>

			<img src={image} alt="" />
			<button onClick={addToBasket}>Add to Basket</button>
		</div>
	)
}

export default Product