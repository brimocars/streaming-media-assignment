const fs = require('fs');

const stream = (file, res, range) => {
    fs.stat(file, (err, stats) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404);
            }
            return res.end(err);
        }

        if (!range) {
            range = 'bytes=0-';
        }

        const positions = range.replace(/bytes=/, '').split('-');

        let start = parseInt(positions[0], 10);

        const total = stats.size;
        const end = positions[1] ? parseInt(positions[1], 10) : total - 1;

        if (start > end) {
            start = end - 1;
        }

        const chunkSize = (end - start) + 1;

        res.writeHead(206, {
            'Content-Range': `bytes  ${start}-${end}/${total}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunkSize,
            'Content-Type': 'vide/mp4',
        });

        const stream = fs.createReadStream(file, { start, end });

        stream.on('open', () => {
            stream.pipe(res);
        });

        stream.on('error', (streamErr) => {
            res.end(streamErr);
        });

        return stream;
    });
}

module.exports = {
    stream,
}