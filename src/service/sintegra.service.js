const axios = require("axios");
const pdfGenerator = require('../util/pdf.generator')

const getReceipt = async (companyId) => {
    try {
        const url = `https://sintegraws.com.br/api/v1/sintegra/tipo-retorno/comprovante-html/${companyId}`;
        const response = await axios.get(url);
        await pdfGenerator.generatePdfFromHtml(companyId, response.data)
    } catch (err) {
        console.error(`Could not retrieve public record. Company Id: ${companyId}, Error: ${err}.`)
    }
}

module.exports = {
    getReceipt
};