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
      photo: '',
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
      sellerID: mongoose.Types.ObjectId('5f3a5c67de4a0103d3dde537'),
    },
    {
      kind: 'Беспородная',
      nickname: 'Лютик',
      photo: '',
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
      sellerID: mongoose.Types.ObjectId('5f3a5c67de4a0103d3dde537'),
    },
  ]);
}
// createDog();

async function createCat() {
  await CatModel.insertMany([
    {
      kind: 'Перс',
      nickname: 'Вася',
      photo: '',
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
      sellerID: mongoose.Types.ObjectId('5f3a5c67de4a0103d3dde537'),
    },
    {
      kind: 'Беспородная',
      nickname: 'Ирма',
      photo: '',
      description: 'Диванодер',
      age: 1,
      pay: false,
      adultSize: 'Маленькое',
      adultweight: '3-4 кг',
      possibleForAllergySufferers: true,
      longHaired: false,
      specialConditionsOfDetention: false,
      childrenInTheHouse: true,
      sellerID: mongoose.Types.ObjectId('5f3a5c67de4a0103d3dde537'),
    },
  ]);
}
// createCat();

async function createOtherAnimal() {
  await OtherAnimalModel.insertMany([
    {
      type: 'крокодил',
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
      sellerID: mongoose.Types.ObjectId('5f3a5c67de4a0103d3dde537'),
    },
  ]);
}
// createOtherAnimal();
