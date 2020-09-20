import mongoose from 'mongoose';

const OtherAnimalSchema = new mongoose.Schema({
  type: { // вид животного
    type: String,
    required: true,
  },
  kind: { // порода животного
    type: String,
  },
  nickname: { // кличка животного
    type: String,
  },
  photo: [{ // фото животного
    type: String,
  }],
  description: { // описание животного
    type: String,
  },
  age: { // возраст животного
    type: Number,
  },
  pay: { // оплата животного  (платно-бесплатно)
    type: Boolean,
  },
  price: { // цена животного
    type: Number,
  },
  // размер взрослого животного (очень маленькое (хомяк и меньше),
  // маленькое (кошка), среднее (бульдог), , большое (сенбернар?), очень большое (лошадь и более)
  adultSize: {
    type: String,
  },
  adultweight: { // вес взрослого животного
    type: String,
  },
  possibleForAllergySufferers: Boolean, // возможно для аллергиков
  wserviceAnimal: Boolean, // служебное  животное
  longHaired: Boolean, // длинношерстное
  pet: Boolean, // домашнее животное?
  onlyInNonApartments: Boolean, // только в не квартиры
  specialConditionsOfDetention: Boolean, // специальные условия содержания
  childrenInTheHouse: Boolean, // дети в доме
  exotic: Boolean, // экзотическое животное
  farmAnimal: Boolean, // сельскохозяйственное животное
  sellerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    // required: true,
  },
});

export default mongoose.model('OtherAnimal', OtherAnimalSchema);
