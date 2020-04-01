class Hello {

    constructor() {
    }

    async showName(req, res) {
        if (!req.query.name)
            return res
                .status(200)
                .send({
                    outcome: {
                        status: 422,
                        message: "Invalid Request, Name should not be null"
                    }
                })
        else
            return res
                .status(200)
                .send({
                    outcome: {
                        status: 200,
                        message: "Hello " + req.query.name
                    }
                })

    }
}
module.exports = {Hello}