import mongoose from 'mongoose';

export default mongoose.connect('mongodb://localhost:27017/wet-nose', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
