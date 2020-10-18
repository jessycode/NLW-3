import multer from 'multer';
import path from 'path';

export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'upload'),
    filename: (request, file, cb) => {
      const filename = `${Date.now()}-${file.originalname}}`;
      cb(null, filename);
    }
  })
}