import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import {useStateValue} from '../core/StateProvider'
import {auth} from '../core/firebase'


function Header() {
	const [{basket, user}] = useStateValue() //, dispatch

	const handleAuthentication = () => {
		if(user){
			auth.signOut()
		}
	}

	return (
		<div className="header">
			<Link to={"/"} >
				<img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
					alt="logo" className="header__logo"/>
			</Link>
			<div className="header__search">
				<input type="text" className="header__searchInput" />
				<SearchIcon className="header__searchIcon" />
			</div>
			<div className="header__nav">
				{user ? 
						<Link to={"/"}>
							<div className="header__option"
							onClick={handleAuthentication} >
								<span className="header__optionLineOne">
									{user.email}
								</span>
								<span className="header__optionLineTwo">
									{'Sign Out'}
								</span>
							</div>
						</Link>
					:
						<Link to={"/login"}>
							<div className="header__option"
							onClick={handleAuthentication} >
								<span className="header__optionLineOne">
									{'Hello Guest'}
								</span>
								<span className="header__optionLineTwo">
									{'Sign In'}
								</span>
							</div>
						</Link>
				}	

				
				<div className="header__option">
					<span className="header__optionLineOne">
						Returns
					</span>
					<span className="header__optionLineOne">
						& Orders
					</span>
				</div>
				<div className="header__option">
					<span className="header__optionLineOne">
						Your
					</span>
					<span className="header__optionLineOne">
						Prime
					</span>
				</div>

				<Link to={"/checkout"} >
					<div className="header__optionBasket">
						<ShoppingBasketIcon />
						<span className="header__optionLineTwo header__basketCount" >{basket?.length}</span>
					</div>
				</Link>

			</div>
		</div>
	)
}

export default Header