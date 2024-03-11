module.exports = (app) =>  {
	app.use((err, req, res, next) => {
		if (err) {
			console.log('error: ', err);
			return res.status(500).send({ message: 'unexpected error!' })
		}
	})
}