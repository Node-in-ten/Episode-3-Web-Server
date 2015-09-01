var express = require('express'),
	app = express();


	app.get('/', express.static('static'))
	app.get('**', function (req, res) {
		res.sendStatus(404)
	})





app.listen(9090)