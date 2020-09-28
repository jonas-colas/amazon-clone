import React, {useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './css/App.css'
import Header from './comp/Header'
import Home from './comp/Home'
import Checkout from './comp/Checkout'
import Login from './comp/Login'
import {auth} from './core/firebase'
import {useStateValue} from './core/StateProvider'
import Payment from './comp/Payment'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'

const promise = loadStripe('pk_test_yywSbtXkErSOyFnojNZ7Z7NZ')

const App = () => {
	const [{}, dispatch] = useStateValue()

	
	useEffect(() => {
		
		auth.onAuthStateChanged(authUser => {
			//console.log('User >>>', authUser);

			if(authUser){
				dispatch({
					type: 'SET_USER',
					user: authUser
				})
			}else{
				dispatch({
					type: 'SET_USER',
					user: null
				})
			}
		})
	}, [])

	return(
		//BEM Convention
		<Router>
			<div className="app">
				<Header />
				
				<Switch>
					<Route path="/login">
						<Login />
					</Route>	

					<Route path="/checkout">
						<Checkout />
					</Route>	

					<Route path="/payment">
					  <Elements stripe={promise} >
							<Payment />
					  </Elements>
					</Route>	
				
					<Route path="/">
						<Home />
					</Route>	

				</Switch>
			</div>
		</Router>
	)
}

export default App
