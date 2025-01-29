const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const client2 = fs.readFileSync(`${__dirname}/../client/client2.html`);
const client3 = fs.readFileSync(`${__dirname}/../client/client3.html`);

const getIndex = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(index);
    res.end();
};

const getPage2 = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(client2);
    res.end();
};

const getPage3 = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(client3);
    res.end();
};

module.exports = {
    getIndex,
    getPage2,
    getPage3,
};
