const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://Samuel:fnLZMB5WZpHLgebV@atlascluster.ri55fhf.mongodb.net/products');
  console.log('ok')
}
