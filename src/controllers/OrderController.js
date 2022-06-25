const Order = require("../model/Order")
const OrderItem = require("../model/OrderItem")

module.exports = {

    async index(req, res) {
        const result = await Order.findAll({
            include: [
                {
                    association: "itens",
                    include: ["product"]
                }
            ]
        })

        return res.json(result)
    },

    async store(req, res) {
        const { customer, products, total } = req.body
        let orderItens = []

        const order = await Order.create({
            customerId: customer.id,
            total
        })

        products.forEach(product => {
            orderItens.push({
                orderId: order.id,
                productId: product.id,
                soldValue: product.value,
                amount: product.amount
            })
        });

        await OrderItem.bulkCreate(orderItens)

        const newOrder = await Order.findByPk(order.id, {
            include: [{
                association: 'itens'
            }]
        })

        return res.status(200).json({ newOrder })
    }
}


