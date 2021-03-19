const sintegraService = require('../service/sintegra.service');
const path = require('path');

const getReceipt = async (req, res) => {
    try {
        const companyId = req.params.companyId
        await sintegraService.getReceipt(req.params.companyId);
        res.contentType("application/pdf");
        res.sendFile(path.join(__dirname, `../../../sintegra/receipts/${companyId}.pdf`));
    } catch (err) {
        console.log(err)
    }
};

module.exports = {
    getReceipt
};