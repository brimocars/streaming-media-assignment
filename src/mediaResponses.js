const path = require('path');
const streaming = require('./lib/streaming.js')

const getParty = (req, res) => {
    const file = path.resolve(__dirname, '../client/party.mp4');
    return streaming.stream(file, res, req.headers?.range)
};

const getBling = (req, res) => {
    const file = path.resolve(__dirname, '../client/bling.mp3');
    return streaming.stream(file, res, req.headers?.range)
};

const getBird = (req, res) => {
    const file = path.resolve(__dirname, '../client/bird.mp4');
    return streaming.stream(file, res, req.headers?.range)
};

module.exports = {
    getParty,
    getBling,
    getBird,
};
