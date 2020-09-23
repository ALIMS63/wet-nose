/* eslint-disable import/extensions */
import mongoose from 'mongoose';
import '../misc/db.js';
import CatModel from '../models/cat.js';
import DogModel from '../models/dog.js';
import OtherAnimalModel from '../models/otherAnimal.js';

async function createDog() {
  await DogModel.insertMany([
    {
      kind: 'Сенбернар',
      nickname: 'Бетховен',
      photo: 'dog2.jpeg',
      description: 'Отличная слюнявая собака',
      age: 1,
      pay: true,
      price: 5000,
      adultSize: 'Большое (ориентир: как сенбернар)',
      adultweight: '50-91 кг',
      possibleForAllergySufferers: false,
      longHaired: true,
      guideВog: true,
      warDog: true,
      onlyInNonApartments: true,
      specialConditionsOfDetention: false,
      childrenInTheHouse: true,
      sellerID: mongoose.Types.ObjectId('5f68e2d5a36fbd03fc75f80c'),
      gender: 'male',
      pedigree: 'длиннющая',
      vaccinationРistory: 'проставлены',
    },
    {
      kind: 'Беспородная',
      nickname: 'Лютик',
      photo: 'dog1.jpeg',
      description: 'Друг навсегда',
      age: 7,
      pay: false,
      adultSize: 'Среднее (ориентир: как бульдог)',
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
      sellerID: mongoose.Types.ObjectId('5f68e2d5a36fbd03fc75f80c'),
    },
  ]);
}

async function createCat() {
  await CatModel.insertMany([
    {
      kind: 'Персидский кот',
      nickname: 'Вася',
      photo: 'cat2.jpeg',
      description: 'Мерзавчик',
      age: 3.5,
      pay: true,
      price: 50000,
      adultSize: 'Маленькое (ориентир: как кошка)',
      adultweight: '5-9 кг',
      possibleForAllergySufferers: false,
      longHaired: true,
      specialConditionsOfDetention: false,
      childrenInTheHouse: false,
      gender: 'male',
      pedigree: 'наследный принц',
      vaccinationРistory: 'все обязательные',
      sellerID: mongoose.Types.ObjectId('5f68e2d5a36fbd03fc75f80c'),
    },
    {
      kind: 'Беспородная',
      nickname: 'Ирма',
      photo: 'cat1.jpeg',
      description: 'Диванодер',
      age: 1,
      pay: false,
      adultSize: 'Маленькое (ориентир: как кошка)',
      adultweight: '3-4 кг',
      possibleForAllergySufferers: true,
      longHaired: false,
      specialConditionsOfDetention: false,
      childrenInTheHouse: true,
      gender: 'female',
      pedigree: '-',
      vaccinationРistory: 'нет',
      sellerID: mongoose.Types.ObjectId('5f68e2d5a36fbd03fc75f80c'),
    },
  ]);
}

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
      adultSize: 'Очень большое (ориентир: как лошадь и более)',
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
      sellerID: mongoose.Types.ObjectId('5f68e2d5a36fbd03fc75f80c'),
    },
  ]);
}

createDog();
createCat();
createOtherAnimal();
