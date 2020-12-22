
const images = require('../models/imagesModal');



exports.addImage = async   function(req, res) {
  const array = Object.values(req.body)
    console.log(array.length);
    const image = new images({
      id: req.body.id,
      albumId: req.body.albumId,
      title: req.body.title,
      url: req.body.url,
      thumbnailUrl: req.body.thumbnailUrl
  });
  const newImage = await image.save();
  if (newImage) {
    return res
      .status(201)
      .send({ message: 'New Image Created', data: newImage });
  }
  return res.status(500).send({ message: ' Error in Creating Image.' });
  
  }
  exports.getImages = async function (req, res){
    

    let array = [];
    let j = 0;
    for (let i = 0; i < 100; i++) {
        if ((i % 2) != 0) {
          const imagess = await images.find({}).skip(i*50).limit(1);
          array[j] = imagess[0]
          j++;
        }
       
      
      
      
    }
    if (array) {
    res.send(array)
      
    } else {
   res.send({ message: ' Error Find Imagas.' });

      
    }
   
  }
 

  