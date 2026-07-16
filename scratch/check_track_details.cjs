const fs = require('fs');
const path = require('path');

function parseMp4Details(filePath) {
  console.log(`\n=========================================`);
  console.log(`Checking file: ${filePath}`);
  const fd = fs.openSync(filePath, 'r');
  const size = fs.statSync(filePath).size;
  const buffer = Buffer.alloc(Math.min(size, 30 * 1024 * 1024)); // read first 30MB
  const bytesRead = fs.readSync(fd, buffer, 0, buffer.length, 0);
  fs.closeSync(fd);

  let currentTrackType = '';
  
  function scan(start, end, parentPath = '') {
    let pos = start;
    while (pos < end - 8) {
      const boxSize = buffer.readUInt32BE(pos);
      if (boxSize <= 0) {
        pos += 4;
        continue;
      }
      
      let boxType;
      try {
        boxType = buffer.toString('ascii', pos + 4, pos + 8);
      } catch (e) {
        pos += 4;
        continue;
      }
      
      const currentPath = parentPath ? `${parentPath}.${boxType}` : boxType;
      
      if (boxType === 'moov' || boxType === 'trak' || boxType === 'mdia' || boxType === 'minf' || boxType === 'stbl') {
        scan(pos + 8, Math.min(pos + boxSize, end), currentPath);
      } else if (boxType === 'hdlr') {
        if (pos + 20 <= end) {
          const handlerType = buffer.toString('ascii', pos + 16, pos + 20);
          currentTrackType = handlerType;
          console.log(`Track type: ${handlerType}`);
        }
      } else if (boxType === 'stsz') {
        // Sample Size Box
        if (pos + 20 <= end) {
          const sampleSize = buffer.readUInt32BE(pos + 12);
          const sampleCount = buffer.readUInt32BE(pos + 16);
          console.log(`  - stsz (sample size box) for track [${currentTrackType}]: defaultSampleSize=${sampleSize}, sampleCount=${sampleCount}`);
          if (sampleSize === 0) {
            // Read individual sample sizes
            let sum = 0;
            let max = 0;
            for (let i = 0; i < Math.min(sampleCount, 100); i++) {
              const sz = buffer.readUInt32BE(pos + 20 + i * 4);
              sum += sz;
              if (sz > max) max = sz;
            }
            console.log(`    First 100 samples average size: ${(sum / Math.min(sampleCount, 100)).toFixed(2)} bytes, max size: ${max} bytes`);
          }
        }
      } else if (boxType === 'stsd') {
        if (pos + 24 <= end) {
          const format = buffer.toString('ascii', pos + 20, pos + 24);
          console.log(`  - Codec/Format for track [${currentTrackType}]: ${format}`);
        }
      }
      pos += boxSize;
    }
  }

  scan(0, bytesRead);
}

const files = [
  'prof. Washington.mp4',
  'Prof. Nilson.mp4',
  'Video atualizado.mp4'
];

for (const f of files) {
  const p = path.join('c:\\Users\\Marketing Elo\\Desktop\\CIET\\public', f);
  if (fs.existsSync(p)) {
    try {
      parseMp4Details(p);
    } catch (e) {
      console.error(`Error parsing ${f}:`, e);
    }
  }
}
