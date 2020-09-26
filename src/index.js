import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  './css/index.css';
import reducer, {initialState} from './core/reducer';
import {StateProvider} from './core/StateProvider'

ReactDOM.render(
	<React.StrictMode>
		<StateProvider initialState={initialState} reducer={reducer} >
			<App />
		</StateProvider>
	</React.StrictMode>,
	document.getElementById('root')
);


