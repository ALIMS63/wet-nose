import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  // Имя пользователя
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 4,
    match: /^[A-Z]\w+$/i,
  },
  // Мы не храним пароль, а только его хэш
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  // Email
  email: {
    type: String,
    required: true,
    minlength: 3,
    match: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  },
  // Phone
  phone: {
    type: Number,
    required: true,
  },
  // Who is the seller
  whoAreYou: {
    type: String,
    required: true,
  },
});

export default mongoose.model('User', UserSchema);
