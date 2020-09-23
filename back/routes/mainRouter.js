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
    res.json({ message: 'The email you provided is actually wrong' });
  }
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    res.status(401);
    res.json({ message: 'The password you provided is actually wrong' });
  }
  console.log(serializeUser(user));
  req.session.user = serializeUser(user);
  res.status(200);
  console.log(user);
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
  let user;
  const validUsername = await User.findOne({ name, email });
  if (validUsername) {
    res.status(401);
    res.json({ message: 'The user with such email already exists' });
  } else {
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
      user = await User.create({
        name,
        email,
        password: hashedPassword,
        phone,
        whoAreYou,
      });
    } catch (err) {
      res.status(401);
      return res.json(err);
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
  const { id } = req.params;
  const photo = req.file.path.slice(7);
  const {
    bigType, kindDog, kindCat, kindOther, nickname, age, description, pay, price, adultSize, adultweight, possibleForAllergySufferers, longHaired, guideВog, serviceAnimal, warDog, pet, onlyInNonApartments, specialConditionsOfDetention, childrenInTheHouse, exotic, farmAnimal, gender, pedigree, vaccinationРistory,
  } = req.body;
  if (bigType === 'dogs') {
    await Dog.updateOne({ _id: id }, {
      kind: kindDog, nickname, gender, age, description, pay, price, pedigree, vaccinationРistory, adultSize, adultweight, pet, exotic, farmAnimal, serviceAnimal, warDog, guideВog, longHaired, possibleForAllergySufferers, onlyInNonApartments, specialConditionsOfDetention, childrenInTheHouse, photo, sellerID: req.session.user.id,
    });
    const newDog = await Dog.findById(id);
    return res.json(newDog);
  }
  if (bigType === 'cats') {
    await Cat.updateOne({ _id: id }, {
      kind: kindCat, nickname, gender, age, description, pay, price, pedigree, vaccinationРistory, adultSize, adultweight, pet, exotic, farmAnimal, serviceAnimal, warDog, guideВog, longHaired, possibleForAllergySufferers, onlyInNonApartments, specialConditionsOfDetention, childrenInTheHouse, photo, sellerID: req.session.user.id,
    });
    const newCat = await Cat.findById(id);
    return res.json(newCat);
  }
  await Other.updateOne({ _id: id }, {
    type: bigType, kind: kindOther, nickname, gender, age, description, pay, price, pedigree, vaccinationРistory, adultSize, adultweight, pet, exotic, farmAnimal, serviceAnimal, warDog, guideВog, longHaired, possibleForAllergySufferers, onlyInNonApartments, specialConditionsOfDetention, childrenInTheHouse, photo, sellerID: req.session.user.id,
  });
  const newOtherAnimal = await Other.findById(id);
  return res.json(newOtherAnimal);
});

router.post('/api/allAnimals', upload, async (req, res) => {
  const photo = req.file.path.slice(7);
  const {
    bigType, kindDog, kindCat, kindOther, nickname, age, description, pay, price, adultSize, adultweight, possibleForAllergySufferers, longHaired, guideВog, serviceAnimal, warDog, pet, onlyInNonApartments, specialConditionsOfDetention, childrenInTheHouse, exotic, farmAnimal, gender, pedigree, vaccinationРistory,
  } = req.body;
  if (bigType === 'dogs') {
    const newDog = await new Dog({
      kind: kindDog, nickname, gender, age, description, pay, price, pedigree, vaccinationРistory, adultSize, adultweight, pet, exotic, farmAnimal, serviceAnimal, warDog, guideВog, longHaired, possibleForAllergySufferers, onlyInNonApartments, specialConditionsOfDetention, childrenInTheHouse, photo, sellerID: req.session.user.id,
    }).save();
    return res.json(newDog);
  }
  if (bigType === 'cats') {
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
  console.log(req.params);
  const cat = await Cat.findOne({ _id: req.params.id }).exec();
  const dog = await Dog.findOne({ _id: req.params.id }).exec();
  const other = await Other.findOne({ _id: req.params.id }).exec();
  if (cat) await Cat.deleteOne({ _id: req.params.id });
  else if (dog) await Dog.deleteOne({ _id: req.params.id });
  else if (other) await Other.deleteOne({ _id: req.params.id });
});

router.get('/api/user/:id', async (req, res) => {
  const oneUser = await User.findOne({ _id: req.params.id });
  console.log(oneUser);
  res.json(oneUser);
});

export default router;
