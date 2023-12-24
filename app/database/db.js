const mongoose = require('mongoose');

const connectMongoose = () => {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Failed to connect to MongoDB:', error));
};

module.exports = { connectMongoose };




// const mongoose = require('mongoose');/


// const connectMongoose = () => {
//   mongoose.connect('mongodb+srv://er-abhii-FSD:Hitler1916@abhiapi.lihuexo.mongodb.net/', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     // Remove the deprecated options
//     // useCreateIndex: true,
//     // useFindAndModify: false
//   })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(error => console.error('Failed to connect to MongoDB:', error));
// };

// module.exports = { connectMongoose };
