const puppeteer = require('puppeteer')
const hb = require('handlebars')

const generatePdfFromHtml = async (fileName, htmlContent) => {
    try {
        const data = {};
        const template = hb.compile(htmlContent, {
            strict: true
        });
        const html = template(data);
        const browser = await puppeteer.launch({
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        const page = await browser.newPage()
        await page.setContent(html)
        await page.pdf({
            path: `/sintegra/receipts/${fileName}.pdf`,
            format: 'A4'
        })
        await browser.close();
    } catch (err) {
        console.error(`Could not generate PDF. File name: ${fileName}, Error: ${err}.`)
    }
}

module.exports = {
    generatePdfFromHtml
};