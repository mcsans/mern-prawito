exports.getAllProducts = (req, res, next) => {
    // console.log('request: ', req.body);
    const name = req.body.name;
    const price = req.body.price;
    res.json(
        {
            message: "Get All Products Success",
            data: [
                {
                    id: 1,
                    name: name,
                    price: price,
                }
            ],
        }
    );
    next();
}