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
// import Task from '../models/task.js';
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
    username: user.username,
  };
}

// router.get('/api', async (req, res) => {
// let tasks = await Task.find();
// res.json({ tasks });
// });

// router.post('/api/add', async (req, res) => {
// console.log(req.body.inputValue);
// const item = await Task.create({ text: req.body.inputValue });
// res.json({ item });
// });

// router.post('/api/check', async (req, res) => {
// console.log(req.body.id);
// const item = await Task.findOne({ _id: req.body.id });
// item.status = !item.status;
// await item.save();
// res.redirect('/api');
// });

// router.post('/api/delete', async (req, res) => {
// console.log(req.body.id);
// const item = await Task.findOneAndDelete({ _id: req.body.id });
// res.redirect('/api');
// });

router.get('/api', (req, res) => {
  res.send('some text');
});

router.get(
  '/api/secret',
  (req, res, next) => {
    console.log('1apiLog');
    if (req.session.user) {
      console.log('2apiLog');
      return next();
    }
    res.status(401).end();
  },
  (req, res) => {
    console.log('3apiLog');
    res.json({
      email: req.session.user.email,
      yes: true,
    });
  },
);

router.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  const user = await User.findOne({ email }).exec();
  if (!user) {
    res.status(401);
    res.json({ message: 'The email you provided is actually wrong' });
  }
  const isValidPassword = await bcrypt.compare(password, user.password);
  console.log(isValidPassword);
  if (!isValidPassword) {
    res.status(401);
    res.json({ message: 'The password you provided is actually wrong' });
  }
  console.log(serializeUser(user));
  req.session.user = serializeUser(user);
  res.status(200);
  return res.json({ id: user._id, name: user.name, email: user.email });
});

router.post('/api/registration', async (req, res) => {
  const {
    username, email, password, phone, whoAreYou,
  } = req.body;
  console.log(111);
  let user;
  const validUsername = await User.findOne({ username, email });
  if (validUsername) {
    res.status(401);
    console.log('answer from back');
    res.json({ message: 'The user with such email already exists' });
  } else {
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
      user = await User.create({
        username,
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

router.post('/api/allAnimals', upload, async (req, res) => {
  // console.log('Request file ---', req.file);
  // console.log('1111111111111111111', req.body);
  const photo = req.file.path.slice(7);
  // console.log(photo);
  const {
    bigType, kindDog, kindCat, kindOther, nickname, age, description, pay, price, adultSize, adultweight, possibleForAllergySufferers, longHaired, guideВog, serviceAnimal, warDog, pet, onlyInNonApartments, specialConditionsOfDetention, childrenInTheHouse, exotic, farmAnimal, gender, pedigree, vaccinationРistory,
  } = req.body;
  if (bigType === 'Собака') {
    const newDog = await new Dog({
      kind: kindDog, nickname, gender, age, description, pay, price, pedigree, vaccinationРistory, adultSize, adultweight, pet, exotic, farmAnimal, serviceAnimal, warDog, guideВog, longHaired, possibleForAllergySufferers, onlyInNonApartments, specialConditionsOfDetention, childrenInTheHouse, photo, sellerID: req.session.user.id,
    }).save();
    return res.json(newDog);
  }
  if (bigType === 'Кот') {
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

export default router;
