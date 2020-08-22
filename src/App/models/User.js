import { Schema, model } from 'mongoose';

/*
User: {
  userName: String,
  nvDate: Date
}
*/
const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  day: {
    type: Number,
    required: true,
  },
  month: {
    type: Number,
    required: true,
  },
  strDate: {
    type: String,
    required: true,
  },
});

model('User', userSchema);
