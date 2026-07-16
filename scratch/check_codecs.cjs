const fs = require('fs');
const path = require('path');

function parseMp4Codec(filePath) {
  console.log(`\nChecking file: ${filePath}`);
  const fd = fs.openSync(filePath, 'r');
  const size = fs.statSync(filePath).size;
  const buffer = Buffer.alloc(Math.min(size, 20 * 1024 * 1024)); // read first 20MB
  const bytesRead = fs.readSync(fd, buffer, 0, buffer.length, 0);
  fs.closeSync(fd);

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
      
      // recurse into container boxes
      if (['moov', 'trak', 'mdia', 'minf', 'stbl'].includes(boxType)) {
        scan(pos + 8, Math.min(pos + boxSize, end), currentPath);
      } else if (boxType === 'stsd') {
        // Sample Description Box
        // entry_count is at pos + 12 (4 bytes)
        // first entry is at pos + 16 (size 4 bytes, format 4 bytes)
        if (pos + 24 <= end) {
          const entryCount = buffer.readUInt32BE(pos + 12);
          const entrySize = buffer.readUInt32BE(pos + 16);
          const format = buffer.toString('ascii', pos + 20, pos + 24);
          console.log(`  - Found stsd entry in ${parentPath}: format=${format}, size=${entrySize}, count=${entryCount}`);
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
  'Video atualizado.mp4',
  'Video Teste.mp4',
  'video-inicial.mp4'
];

for (const f of files) {
  const p = path.join('c:\\Users\\Marketing Elo\\Desktop\\CIET\\public', f);
  if (fs.existsSync(p)) {
    try {
      parseMp4Codec(p);
    } catch (e) {
      console.error(`Error parsing ${f}:`, e);
    }
  } else {
    console.log(`File not found: ${p}`);
  }
}
