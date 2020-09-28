import React, {Fragment, useState, useEffect} from 'react'
import '../css/Payment.css'
import {useStateValue} from '../core/StateProvider'
import CheckoutProduct from './CheckoutProduct'
import {Link, useHistory} from 'react-router-dom'
import {CardElement, useStripe, useElements
	} from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import {getBasketTotal} from '../core/reducer'
//import axios from '../core/axios'
import axios from 'axios'
import {db} from '../core/firebase'



function Payment() {
	const [{basket, user}, dispatch] = useStateValue()

	const history = useHistory()
	
	const stripe = useStripe()
	const elements = useElements()	

	const [succeeded, setSucceeded] = useState(false)
	const [processing, setProcessing] = useState('')
	const [error, setError] = useState(null)
	const [disabled, setDisabled] = useState(true)
	const [clientSecret, setClientSecret] = useState(true)

	const baseURL = 'http://localhost:5001/fir-6fa1d/us-central1/api';

	/*const getClientSecret = () => {
			axios({
				method: 'post',
				url: `${baseURL}/payments/create?total=${getBasketTotal(basket) * 100}`
			}).then(response => {
				console.log(response)
				setClientSecret(response.data.clientSecret)
			})
		}*/

	useEffect(() => {
		
		const getClientSecret = async () => {
			const response = await axios({
				method: 'post',
				//url: `/payments/create?total=${getBasketTotal(basket) * 100}`
				url: `${baseURL}/payments/create?total=${getBasketTotal(basket) * 100}`
			})
			console.log(response.data.clientSecret)
			setClientSecret(response.data.clientSecret)
		}

		getClientSecret()
	}, [basket])

	//console.log("the clientSecret is >>>", clientSecret)

	const handleSubmit = async (event) => {
		event.preventDefault()

		setProcessing(true)

		const payload = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: elements.getElement(CardElement)
			}
		}).then(({paymentIntent}) => {
			//paymentIntent = payment confirmation

			db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id)
			.set({
				basket: basket,
				amount: paymentIntent.amount,
				created: paymentIntent.created
			})

			setSucceeded(true)
			setError(null)
			setProcessing(false)

			dispatch({
				type: 'EMPTY_BASKET'
			})

			history.replace('/orders')
		}).catch(error => console.log(error))
	}	

	const handleChange = event => {
		setDisabled(event.empty)
		setError(event.error ? event.error.message : "")
	}

	return (
		<div className="payment">
			<div className="payment__container">
				<h1>
					Checkout (<Link to={"/checkout"}> {basket?.length} items </Link>)
				</h1>
				
				<div className="payment__section">
					<div className="payment__title">
						<h3>Delivery Address</h3>
						<div className="payment__address">
							<p>{user?.email}</p>
							<p>123 React Lane</p>
							<p>Los Angeles, CA</p>
						</div>
					</div>
				</div>

				<div className="payment__section">
					<div className="payment__title">
						<h3>Review items and delivery</h3>
					</div>
					<div className="payment__items">
						{basket.map((item, i) => (
								<CheckoutProduct key={i} 
									id={item.id}
									title={item.title}
									image={item.image}
									price={item.price}
									rating={item.rating}
								/>
							)
						)}
					</div>
				</div>

				<div className="payment__section">
					<div className="payment__title">
						<h3>Delivery Address</h3>
					</div>
					<div className="payment__details">
						<form onSubmit={handleSubmit} >
							<CardElement onChange={handleChange} />

							<div className="payment__priceContainer">
								<CurrencyFormat 
									renderText={(value) => (
  									<h4>Order Total: {value}</h4>
									)}
									decimalScale={2} value={getBasketTotal(basket)} displayType={"text"}
									thousandSeparator={true} prefix={"$"}
								/>
								<button disabled={processing || disabled || succeeded} >
									<span>{processing ? <p>Processing</p> : "Buy Now" }</span>
								</button>
							</div>
							{error && <div>{error}</div>}
						</form>
					</div>
				</div>

			</div>
		</div>
	)
}

export default Payment