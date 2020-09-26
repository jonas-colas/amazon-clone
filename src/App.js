import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './css/App.css'
import Header from './comp/Header'
import Home from './comp/Home'
import Checkout from './comp/Checkout'

const App = () => {
	return(
		//BEM Convention
		<Router>
			<div className="app">
				<Header />
				
				<Switch>
					<Route path="/checkout">
						<Checkout />
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
