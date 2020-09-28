const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

//API

//APP Config
const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors({origin: true}));
//app.use(cors());
app.use(express.json());

//API routes
app.get('/', (req, res) => res.status(200).send('Hello'));

app.post('/payments/create', async (req, res) => {
	const total = req.query.total;
	
	//console.log(total);

	const paymentIntent = await stripe.paymentIntents.create({
		amount: total,
		currency: "usd",
	});

	//console.log(paymentIntent.client_secret);

	//ok - created
	res.status(201).send({
		cliendSecret: paymentIntent.client_secret,
	});
	
});

//Listen on port 
exports.api = functions.https.onRequest(app);