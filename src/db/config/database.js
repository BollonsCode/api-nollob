import mongoose from 'mongoose';

const connection = {
  con() {
    return mongoose.connect('mongodb://localhost:27017/nollob_dev_db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  },
};

export default connection;
