import mongoose from 'mongoose';

export default mongoose.connect('mongodb://localhost:27017/your-animal', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
