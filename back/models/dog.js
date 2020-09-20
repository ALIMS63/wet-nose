import mongoose from 'mongoose';

const DogSchema = new mongoose.Schema({
  kind: { // порода животного
    type: String,
  },
  nickname: { // кличка животного
    type: String,
  },
  description: { // описание животного
    type: String,
  },
  age: { // возраст животного
    type: Number,
  },
  pay: { // Даром
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
  longHaired: Boolean, // длинношерстное
  guideВog: Boolean, // собака поводырь
  warDog: Boolean, // служебная собака
  onlyInNonApartments: Boolean, // только в не квартиры
  specialConditionsOfDetention: Boolean, // специальные условия содержания
  childrenInTheHouse: Boolean, // дети в доме
  sellerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    // required: true,
  },
  photo: [{ // фото животного
    type: String,
  }],
});

export default mongoose.model('Dog', DogSchema);
