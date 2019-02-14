import express from 'express';

const app = express();

const PORT = 3000;


app.get('/',(req, res)=>{
	res.send("Hody!, We good to go");
});


app.listen(PORT, ()=>{
	console.log(`App up and running on port ${PORT}`);
})