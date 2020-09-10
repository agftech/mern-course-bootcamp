const multer = require('multer')
const path = require('path')

module.exports = {
	storage: multer.diskStorage({
		destination: path.resolve(__dirname, '..', '..', 'files'),
		filename: (_, file, cb) => {
			const ext = path.extname(file.originalname)
			const name = path.basename(file.originalname, ext)

			cb(null, `${name.replace(/\s/g, '')}-${Date.now()}${ext}`)
		},
	}),
}
