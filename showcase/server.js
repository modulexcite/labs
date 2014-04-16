//== BSD2 LICENSE ==
//Copyright (c) 2014, Tidepool Project
//
//This program is free software; you can redistribute it and/or modify it under
//the terms of the associated License, which is identical to the BSD 2-Clause
//License as published by the Open Source Initiative at opensource.org.
//
//This program is distributed in the hope that it will be useful, but WITHOUT
//ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
//FOR A PARTICULAR PURPOSE. See the License for more details.
//
//You should have received a copy of the License along with this program; if
//not, you can obtain one from Tidepool Project at tidepool.org.
//== BSD2 LICENSE ==
var express = require('express'),
	app = express(),
	less = require('less-middleware'),
	fs = require('fs');
var port = process.env.PORT || 8084;

app.use(less({ src: __dirname + '/client'}));
app.use(express.static(__dirname + '/client'));

app.listen(port);
console.log('Listening on port ' + port);