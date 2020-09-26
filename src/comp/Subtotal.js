import React, {Fragment} from 'react'
import '../css/Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from '../core/StateProvider'
import {getBasketTotal} from '../core/reducer'


function Subtotal() {
	const [{basket}] = useStateValue() //, dispatch

	return (
		<div className="subtotal">
			<CurrencyFormat 
				renderText={(value) => (
					<Fragment>
					 <p>Subtotal ({basket.length} items): <strong>{` ${value} `}</strong> </p>
					 <small className="subtotal__gift">
					 	<input type="checkbox" /> This order contains a gift
					 </small>
					</Fragment>
				)}
				decimalScale={2} value={getBasketTotal(basket)} displayType={"text"}
				thousandSeparator={true} prefix={"$"}
			/>

			<button>Proceed to Checkout</button>

		</div>
	)
}

export default Subtotal