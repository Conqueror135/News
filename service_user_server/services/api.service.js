const apiGateway = require('moleculer-web');
module.exports = {
    name : "api",
    mixins : [apiGateway],
    settings:{
        port: process.env.PORT || 3000,

		routes: [{
			path: "/api",

			authorization: true,
			autoAliases: true,

			// Set CORS headers
			cors: true,

			// Parse body content
			bodyParsers: {
				json: {
					strict: false
				},
				urlencoded: {
					extended: false
				}
			}
		}],
    }
}