const knex = require('../../db/db');


// 1
const getAccounts = async (req, res) => {
    const accounts = await knex('accounts')
        .select('titular', 'tipo_cuenta', 'moneda', 'nro_cuenta', 'cbu', 'bank_id')

    const client = accounts[0]
    const toUpperCase = client.titular.toUpperCase()
    client.titular = toUpperCase

    res.json({ accounts })
}


// 2
const getLastBanks = async (req, res) => {
    const banks = await knex('banks')
        // .sort("-id")
        .orderBy('id', 'desc')
        .select()

    res.json({ banks })
}


// 3
const getBanks = async (req, res) => {
    const banks = await knex('banks')
        .whereBetween('id', [5, 10])
        .select()

    res.json({ banks })
}



module.exports = {
    getLastBanks,
    getBanks,
    getAccounts
}