import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  surname: { type: String, required: true },
  username: { type: String, required: true, },
  email: { type: String, required: true, },
  password: { type: String, required: true },
  department: { type: String, required: true },
  designation: { type: String, required: true },
  userId: { type: Number, required: true, },
  locationId: {
    type: String,
    // type:Schema.Types.ObjectId,
    ref: 'Location',
    required: true
  }
});

export default mongoose.model('User', userSchema);