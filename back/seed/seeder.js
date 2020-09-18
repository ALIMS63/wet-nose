/* eslint-disable import/extensions */
import mongoose from 'mongoose';
import CatModel from '../models/cat.js';
import DogModel from '../models/dog.js';
import OtherAnimalModel from '../models/otherAnimal.js';

mongoose.connect('mongodb://localhost:27017/your-animal', { useNewUrlParser: true });

async function createDog() {
  await DogModel.insertMany([
    {
      kind: 'Сенбернар',
      nickname: 'Бетховен',
      photo: '/st_bernard_dog.jpeg',
      description: 'Отличная слюнявая собака',
      age: 1,
      pay: true,
      price: 5000,
      adultSize: 'Большое',
      adultweight: '50-91 кг',
      possibleForAllergySufferers: false,
      longHaired: true,
      guideВog: true,
      warDog: true,
      onlyInNonApartments: true,
      specialConditionsOfDetention: false,
      childrenInTheHouse: true,
<<<<<<< HEAD
      sellerID: mongoose.Types.ObjectId('5f64903ad81749e92a1eadbd'),
=======
      sellerID: mongoose.Types.ObjectId('5f636b0d818f4d1e20648e3b'),
>>>>>>> 89db3f35d435f8cbe22c1b2b0655abb434bf3732
    },
    {
      kind: 'Беспородная',
      nickname: 'Лютик',
      photo: 'mongrel_dog.jpeg',
      description: 'Друг на всегда',
      age: 7,
      pay: false,
      adultSize: 'Среднее',
      adultweight: '15-20 кг',
      possibleForAllergySufferers: false,
      longHaired: true,
      guideВog: false,
      warDog: false,
      onlyInNonApartments: false,
      specialConditionsOfDetention: false,
      childrenInTheHouse: false,
<<<<<<< HEAD
      sellerID: mongoose.Types.ObjectId('5f64903ad81749e92a1eadbd'),
    },
  ]);
}
 createDog();
=======
      sellerID: mongoose.Types.ObjectId('5f636b0d818f4d1e20648e3b'),
    },
  ]);
}
createDog();
>>>>>>> 89db3f35d435f8cbe22c1b2b0655abb434bf3732

async function createCat() {
  await CatModel.insertMany([
    {
      kind: 'Перс',
      nickname: 'Вася',
      photo: 'persian_cat.jpeg',
      description: 'Мерзавчик',
      age: 3.5,
      pay: true,
      price: 50000,
      adultSize: 'Маленькое',
      adultweight: '5-9 кг',
      possibleForAllergySufferers: false,
      longHaired: true,
      specialConditionsOfDetention: false,
      childrenInTheHouse: false,
<<<<<<< HEAD
      sellerID: mongoose.Types.ObjectId('5f64903ad81749e92a1eadbd'),
=======
      sellerID: mongoose.Types.ObjectId('5f636b0d818f4d1e20648e3b'),
>>>>>>> 89db3f35d435f8cbe22c1b2b0655abb434bf3732
    },
    {
      kind: 'Беспородная',
      nickname: 'Ирма',
      photo: 'mongrel_cat.jpeg',
      description: 'Диванодер',
      age: 1,
      pay: false,
      adultSize: 'Маленькое',
      adultweight: '3-4 кг',
      possibleForAllergySufferers: true,
      longHaired: false,
      specialConditionsOfDetention: false,
      childrenInTheHouse: true,
<<<<<<< HEAD
      sellerID: mongoose.Types.ObjectId('5f64903ad81749e92a1eadbd'),
    },
  ]);
}
 createCat();
=======
      sellerID: mongoose.Types.ObjectId('5f636b0d818f4d1e20648e3b'),
    },
  ]);
}
createCat();
>>>>>>> 89db3f35d435f8cbe22c1b2b0655abb434bf3732

async function createOtherAnimal() {
  await OtherAnimalModel.insertMany([
    {
      type: 'crocodile.jpeg',
      nickname: 'Звезда',
      photo: '',
      description: 'За...опукусь',
      age: 13,
      pay: true,
      price: 150000,
      adultSize: 'Очень большое',
      adultweight: '150-200 кг',
      possibleForAllergySufferers: true,
      longHaired: false,
      pet: false,
      onlyInNonApartments: true,
      specialConditionsOfDetention: true,
      childrenInTheHouse: true,
      exotic: true,
      farmAnimal: false,
<<<<<<< HEAD
      sellerID: mongoose.Types.ObjectId('5f64903ad81749e92a1eadbd'),
    },
  ]);
}
 createOtherAnimal();
=======
      sellerID: mongoose.Types.ObjectId('5f636b0d818f4d1e20648e3b'),
    },
  ]);
}
createOtherAnimal();
>>>>>>> 89db3f35d435f8cbe22c1b2b0655abb434bf3732
