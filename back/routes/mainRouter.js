/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */

import express from 'express';
import bcrypt from 'bcrypt';
import multer from 'multer';
import path from 'path';
import User from '../models/user.js';
import Dog from '../models/dog.js';
import Cat from '../models/cat.js';
import Other from '../models/otherAnimal.js';

const storage = multer.diskStorage({
  destination: './public/',
  filename(req, file, cb) {
    cb(null, `IMAGE-${Date.now()}${path.extname(file.originalname)}`);
  },
});
const upload = multer({
  storage,
  limits: { fileSize: 1000000 },
}).single('photo');

const router = express.Router();
function serializeUser(user) {
  return {
    id: user._id,
    name: user.name,
  };
}

router.get('/api', (req, res) => {
  res.send('some text');
});

router.get(
  '/api/secret',
  (req, res, next) => {
    if (req.session.user) {
      return next();
    }
    res.status(401).end();
  },
  (req, res) => {
    res.json({
      email: req.session.user.email,
      yes: true,
    });
  },
);

router.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).exec();
  if (!user) {
    res.status(401);
    res.json({ message: 'Указанная электронная почта неверная' });
  }
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    res.status(401);
    res.json({ message: 'Указанный пароль неверный' });
  }
  req.session.user = serializeUser(user);
  res.status(200);
  return res.json({
    id: user._id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    whoAreYou: user.whoAreYou,
    createdAt: user.createdAt,
  });
});

router.post('/api/registration', async (req, res) => {
  const {
    name, email, password, phone, whoAreYou,
  } = req.body;
  console.log(name, email, password, phone, whoAreYou);
  let user;
  const validUsername = await User.findOne({ name, email });
  if (validUsername) {
    res.status(401);
    res.json({ message: 'Пожалуйста, попробуйте изменить введенные данные и повторите регистрацию' });
  } else {
    const hashedPassword = await bcrypt.hash(password, 10);
    user = await User.create({
      name,
      email,
      password: hashedPassword,
      phone,
      whoAreYou,
    });
    req.session.user = serializeUser(user);
    res.status(200);
    return res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      whoAreYou: user.whoAreYou,
      createdAt: user.createdAt,
    });
  }
});

router.get('/api/logout', (req, res, next) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }
      res.clearCookie(req.app.get('session cookie name'));
      res.end();
    });
  } else {
    res.end();
  }
});

router.get('/api/allAnimals', async (req, res) => {
  const cats = await Cat.find();
  const dogs = await Dog.find();
  const other = await Other.find();
  res.json({ cats, dogs, other });
});

router.put('/api/allAnimals/:id', upload, async (req, res) => {
  console.log('зашли на ручку put')
  const { id } = req.params;
  console.log(id)
  const photo = req.file.path.slice(7);
  const {
    bigType, kindDog, kindCat, kindOther, nickname, age, description, pay, price, adultSize, adultweight, possibleForAllergySufferers, longHaired, guideВog, serviceAnimal, warDog, pet, onlyInNonApartments, specialConditionsOfDetention, childrenInTheHouse, exotic, farmAnimal, gender, pedigree, vaccinationРistory,
  } = req.body;
  if (bigType === 'собака') {
    console.log('if 1')
    await Dog.updateOne({ _id: id }, {
      kind: kindDog, nickname, gender, age, description, pay, price, pedigree, vaccinationРistory, adultSize, adultweight, pet, exotic, farmAnimal, serviceAnimal, warDog, guideВog, longHaired, possibleForAllergySufferers, onlyInNonApartments, specialConditionsOfDetention, childrenInTheHouse, photo, sellerID: req.session.user.id,
    });

    const newUpdateAnimal = await Dog.findById(id);
    console.log(newUpdateAnimal)
    return res.json(newUpdateAnimal);
  }
  if (bigType === 'кот') {
    console.log('if 2')
    await Cat.updateOne({ _id: id }, {
      kind: kindCat, nickname, gender, age, description, pay, price, pedigree, vaccinationРistory, adultSize, adultweight, pet, exotic, farmAnimal, serviceAnimal, warDog, guideВog, longHaired, possibleForAllergySufferers, onlyInNonApartments, specialConditionsOfDetention, childrenInTheHouse, photo, sellerID: req.session.user.id,
    });
    const newUpdateAnimal = await Cat.findById(id);
    console.log(newUpdateAnimal)
    return res.json(newUpdateAnimal);
  }
  console.log('if 3')
  await Other.updateOne({ _id: id }, {
    type: bigType, kind: kindOther, nickname, gender, age, description, pay, price, pedigree, vaccinationРistory, adultSize, adultweight, pet, exotic, farmAnimal, serviceAnimal, warDog, guideВog, longHaired, possibleForAllergySufferers, onlyInNonApartments, specialConditionsOfDetention, childrenInTheHouse, photo, sellerID: req.session.user.id,
  });
  const newUpdateAnimal = await Other.findById(id);
  console.log(newUpdateAnimal)
  return res.json(newUpdateAnimal);
});

router.post('/api/allAnimals', upload, async (req, res) => {
  console.log(req.body);
  const photo = req.file.path.slice(7);
  const {
    bigType, kindDog, kindCat, kindOther, nickname, age, description, pay, price, adultSize, adultweight, possibleForAllergySufferers, longHaired, guideВog, serviceAnimal, warDog, pet, onlyInNonApartments, specialConditionsOfDetention, childrenInTheHouse, exotic, farmAnimal, gender, pedigree, vaccinationРistory,
  } = req.body;
  if (bigType === 'собака') {
    const newDog = await new Dog({
      kind: kindDog, nickname, gender, age, description, pay, price, pedigree, vaccinationРistory, adultSize, adultweight, pet, exotic, farmAnimal, serviceAnimal, warDog, guideВog, longHaired, possibleForAllergySufferers, onlyInNonApartments, specialConditionsOfDetention, childrenInTheHouse, photo, sellerID: req.session.user.id,
    }).save();
    return res.json(newDog);
  }
  if (bigType === 'кот') {
    const newCat = await new Cat({
      kind: kindCat, nickname, gender, age, description, pay, price, pedigree, vaccinationРistory, adultSize, adultweight, pet, exotic, farmAnimal, serviceAnimal, warDog, guideВog, longHaired, possibleForAllergySufferers, onlyInNonApartments, specialConditionsOfDetention, childrenInTheHouse, photo, sellerID: req.session.user.id,
    }).save();
    return res.json(newCat);
  }
  const newOtherAnimal = await new Other({
    type: bigType, kind: kindOther, nickname, gender, age, description, pay, price, pedigree, vaccinationРistory, adultSize, adultweight, pet, exotic, farmAnimal, serviceAnimal, warDog, guideВog, longHaired, possibleForAllergySufferers, onlyInNonApartments, specialConditionsOfDetention, childrenInTheHouse, photo, sellerID: req.session.user.id,
  }).save();
  return res.json(newOtherAnimal);
});

router.get('/api/delete/:id', async (req, res) => {
  const cat = await Cat.findOne({ _id: req.params.id }).exec();
  const dog = await Dog.findOne({ _id: req.params.id }).exec();
  const other = await Other.findOne({ _id: req.params.id }).exec();
  if (cat) await Cat.deleteOne({ _id: req.params.id });
  else if (dog) await Dog.deleteOne({ _id: req.params.id });
  else if (other) await Other.deleteOne({ _id: req.params.id });
});

router.get('/api/user/:id', async (req, res) => {
  const oneUser = await User.findOne({ _id: req.params.id });
  res.json(oneUser);
});

// router.post('/api/addPhoto')

export default router;
