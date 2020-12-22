const mongoose = require("mongoose");


const imageSchema = new mongoose.Schema({
    id: { type: String, required: true },
    albumId: { type: String, required: true },
    title: { type: String, required: true },
    url: { type: String, required: true },
    thumbnailUrl : { type: String, required: true }
  
  });
  

  const imagesModel = module.exports = mongoose.model('images', imageSchema);
  
  module.exports.get = function (callback, limit) {
    imagesModel.find(callback).limit(limit); 
   }
 