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
  nvDate: {
    type: Date,
    required: true,
  },
});

model('User', userSchema);
