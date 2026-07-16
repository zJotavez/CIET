const fs = require('fs');
const path = require('path');

function parseMp4(filePath) {
  console.log(`Checking file: ${filePath}`);
  const fd = fs.openSync(filePath, 'r');
  const size = fs.statSync(filePath).size;
  const buffer = Buffer.alloc(100 * 1024 * 1024); // read first 100MB
  const bytesRead = fs.readSync(fd, buffer, 0, Math.min(size, buffer.length), 0);
  fs.closeSync(fd);

  let offset = 0;
  const tracks = [];
  
  function scan(start, end, parentPath = '') {
    let pos = start;
    while (pos < end - 8) {
      const boxSize = buffer.readUInt32BE(pos);
      const boxType = buffer.toString('ascii', pos + 4, pos + 8);
      if (boxSize === 0) break;
      const currentPath = parentPath ? `${parentPath}.${boxType}` : boxType;
      
      if (boxType === 'trak') {
        tracks.push({ path: currentPath, pos });
      }
      
      // recurse into container boxes
      if (['moov', 'trak', 'mdia', 'minf', 'stbl'].includes(boxType)) {
        scan(pos + 8, pos + boxSize, currentPath);
      } else if (boxType === 'hdlr') {
        // The hdlr box contains the handler type (soun for audio, vide for video)
        // version (1 byte) + flags (3 bytes) + pre_defined (4 bytes) + handler_type (4 bytes)
        if (pos + 16 <= end) {
          const handlerType = buffer.toString('ascii', pos + 16, pos + 20);
          console.log(`Found handler type in ${parentPath}: ${handlerType}`);
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
  'Video inicial.mp4'
];

for (const f of files) {
  const p = path.join('c:\\Users\\Marketing Elo\\Desktop\\CIET\\public', f);
  if (fs.existsSync(p)) {
    try {
      parseMp4(p);
    } catch (e) {
      console.error(`Error parsing ${f}:`, e);
    }
  } else {
    console.log(`File not found: ${p}`);
  }
}
