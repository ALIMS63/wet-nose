/* eslint-disable import/extensions */
import '../misc/db.js';
import CatModel from '../models/cat.js';
import DogModel from '../models/dog.js';
import OtherAnimalModel from '../models/otherAnimal.js';
import mongoose from 'mongoose'

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
      gender: 'male',
      pedigree: 'длиннющая',
      vaccinationРistory: 'проставлены',
      sellerID: mongoose.Types.ObjectId('5f636b0d818f4d1e20648e3b'),

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
      gender: 'male',
      pedigree: 'не имеется',
      vaccinationРistory: 'не имеется',
      sellerID: mongoose.Types.ObjectId('5f636b0d818f4d1e20648e3b'),
    },
  ]);
}
createDog();

async function createCat() {
  await CatModel.insertMany([
    {
      kind: 'Персидский кот',
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
      gender: 'male',
      pedigree: 'наследный принц',
      vaccinationРistory: 'все обязательные',
      sellerID: mongoose.Types.ObjectId('5f636b0d818f4d1e20648e3b'),
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
      gender: 'female',
      pedigree: '-',
      vaccinationРistory: 'нет',
      sellerID: mongoose.Types.ObjectId('5f636b0d818f4d1e20648e3b'),
    },
  ]);
}
createCat();

async function createOtherAnimal() {
  await OtherAnimalModel.insertMany([
    {
      type: 'Крокодил',
      nickname: 'Звезда',
      photo: 'crocodile.jpeg',
      description: 'Запопукусь',
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
      gender: 'female',
      pedigree: 'отцы и деды призеры Нила',
      vaccinationРistory: 'нет',
      sellerID: mongoose.Types.ObjectId('5f636b0d818f4d1e20648e3b'),
    }
  ]);
}
createOtherAnimal();
