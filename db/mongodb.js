const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/products');
  console.log('ok')
}
// await mongoose.connect('mongodb+srv://Samuel:fnLZMB5WZpHLgebV@atlascluster.ri55fhf.mongodb.net/products');