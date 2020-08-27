import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

const storage = multer.diskStorage({
  destination: path.resolve(__dirname, '..', '..', 'uploads'), 
  filename(request, file, callback) {
    const hashName = crypto.randomBytes(6).toString('hex');
    const fileName = `${hashName}-${file.originalname}`;

    callback(null, fileName);
  }
})

const upload = multer({ 
  storage, 
  fileFilter(request, file, callback) {
    const jpg = file.mimetype == 'image/jpeg';
    const svg = file.mimetype == 'image/svg+xml';
    const png = file.mimetype == 'image/png';
    (jpg || svg  || png) ? callback(null, true) : callback(null, false);
  },
  limits: {
    fileSize: 2000000,
  },
});

export default upload;