/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import express from 'express';
import session from 'express-session';
import sessionFileStore from 'session-file-store';
// import './misc/env.js';
import './misc/db.js';
import path from 'path';
import methodOverride from 'method-override';
// import cors from 'cors';
import notFoundMiddleware from './middlewares/notfound.js';
import errorMiddleware from './middlewares/error.js';

import mainRouter from './routes/mainRouter.js';

const app = express();
const FileStore = sessionFileStore(session);
// app.use(multer({ dest: 'uploads' }).single('photo'));// значение single обязательно должно совпадать с name inputa buttona и const filedata чему присваивается req.file
// // Запоминаем название куки для сессий
app.set('session cookie name', 'sid');
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.env.PWD, 'public')));
app.use(session({
  name: app.get('session cookie name'),
  secret: 'someSecret',
  // secret: process.env.SESSION_SECRET,
  store: new FileStore({
    // Шифрование сессии
    secret: process.env.SESSION_SECRET,
  }),
  // Если true, сохраняет сессию, даже если она не поменялась
  resave: false,
  // Если false, куки появляются только при установке req.session
  saveUninitialized: false,
  cookie: {
    // В продакшне нужно "secure: true" для HTTPS
    secure: process.env.NODE_ENV === 'production',
  },
}));

app.use(methodOverride((req, res) => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

// -----------------------------------------Routers
app.use('/', mainRouter);
// -----------------------------------------Routers

app.use((req, res, next) => {
  if (req.session.user) {
    return next();
  }
  res.status(401).end();
});
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log('Connected', `${port}----------------------------------------------------------------------------->`);
});
