import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { addNewAnimal } from '../../redux/actions'
// material-ui========================================
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    //button
    '& > *': {
      margin: theme.spacing(1),
    },
    // разметка
    flexGrow: 1,
  },
  textar: {
    // textarea
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  // селекты
  formControl: {
    margin: "20px",
    minWidth: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  // разметка
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  margin: {
    marginBottom: "25"
  },
  ch: {
    margin: "8px",
  },
  input: {
    display: 'none',
  },
  inp: {
    backgroundColor: 'white',
    borderRadius: '5px',
    opacity: '0.8'
  },
  sel: {
    color: 'black'
  }
}));
//======================================
function NewAnimal() {
  const dispatch = useDispatch();
  const allAnimals = useSelector((state) => state.animals.animals)
  console.log(allAnimals)
  const classes = useStyles();  //material-ui button
  const [error, setError] = useState(false);
  const history = useHistory();
  const [inputs, setInputs] = useState({
    bigType: '',
    kindDog: '',
    kindCat: '',
    kindOther: '',
    nickname: '',
    description: '',
    age: '',
    pay: true,
    price: '',
    adultSize: '',
    adultweight: '',
    possibleForAllergySufferers: false,
    longHaired: false,
    guideВog: false,
    serviceAnimal: false,
    warDog: false,
    pet: false,
    onlyInNonApartments: false,
    specialConditionsOfDetention: false,
    childrenInTheHouse: false,
    exotic: false,
    farmAnimal: false,
    photo: null,
    gender: 'female',
    pedigree: '',
    vaccinationРistory: '',
  });

  function changed({ target: { value, name } }) {
    console.log(value)
    setInputs({
      ...inputs,
      [name]: value,
    });
  }
  function fooCheckbox({ target: { name } }) {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: !prevInputs[name],
    }));
  }
  function photoChanged({ target: { files, name } }) {
    setInputs({
      ...inputs,
      [name]: files[0],
    });;
  }
  async function addAnimal(event) {
    event.preventDefault();

    const formData = new FormData();
    Object.keys(inputs).forEach((key) => {
      formData.append(key, inputs[key])
    })
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };
    const response = await axios.post('/api/allAnimals', formData, config);
    // console.log(response.data)
    const newAnimal = response.data
    console.log(newAnimal);

    for (let typeAnimals in allAnimals) {
      console.log('for', typeof typeAnimals, typeof newAnimal.type)
      if (typeAnimals === newAnimal.type) {
        console.log(newAnimal.type, 'sjdvbrhjvbzhjvb')
        return dispatch(addNewAnimal(newAnimal.type, newAnimal))
      } console.log('else')
      return dispatch(addNewAnimal('other', newAnimal))
    }
    // return history.push(`/oneAnimal/${}`);
  }

  return (
    <>
      <form onSubmit={addAnimal} encType="multipart/form-data">
        <div className={classes.root}>
          <Grid container spacing={5} >
            {/* Тип, порода, кличка */}
            <Grid container direction="row" justify="space-evenly" alignItems="center" >
              <div style={{ width: 300 }}>
                <Autocomplete name="bigType" inputValue={inputs.bigType} id="free-solo-demo" freeSolo
                  options={typeAnimal.map((option) => option.type)}
                  onInputChange={(event, newInputValue) => {
                    changed({ target: { value: newInputValue, name: 'bigType' } })
                  }}
                  renderInput={(params) => (
                    <TextField {...params} label="Тип животного" margin="normal" variant="outlined"
                      required />
                  )}
                />
              </div>
              {inputs.bigType === "dogs" ?
                <div style={{ width: 300 }}>
                  <Autocomplete name="kindDog" inputValue={inputs.kindDog} id="free-solo-demo" freeSolo
                    options={kindDog.map((option) => option.type)}
                    onInputChange={(event, newInputValue) => {
                      changed({ target: { value: newInputValue, name: 'kindDog' } })
                    }}
                    renderInput={(params) => (
                      <TextField {...params} label="Порода" margin="normal" variant="outlined"
                        required />
                    )}
                  />
                </div>
                : inputs.bigType === "cats" ?
                  <div style={{ width: 300 }}>
                    <Autocomplete name="kindCat" inputValue={inputs.kindCat} id="free-solo-demo" freeSolo
                      options={kindCat.map((option) => option.type)}
                      onInputChange={(event, newInputValue) => {
                        changed({ target: { value: newInputValue, name: 'kindCat' } })
                      }}
                      renderInput={(params) => (
                        <TextField {...params} label="Порода" margin="normal" variant="outlined"
                          required />
                      )}
                    />
                  </div>
                  : <TextField className={classes.inp} id="standard-required" name="kindOther" label="Порода" value={inputs.kindOther} onChange={changed} />
              }
              <TextField className={classes.inp} id="standard-required" name="nickname" label="Кличка" required value={inputs.nickname} onChange={changed} />
            </Grid>
            {/* Гендер, возраст, Описание */}
            <Grid container direction="row" justify="space-evenly" alignItems="center" className={classes.formControl}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" name="gender" value={inputs.gender} onChange={changed}>
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                </RadioGroup>
              </FormControl>
              <TextField className={classes.inp} id="outlined-number" label="Возраст" type="number" variant="outlined" name="age" required
                value={inputs.age} onChange={changed}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                className={classes.inp}
                onChange={changed}
                name="description"
                id="outlined-multiline-static"
                label="Oписание"
                multiline
                rows={3}
                // cols={1}
                value={inputs.description}
                variant="outlined"
              />
            </Grid>
            {/* Даром, цена */}
            <Grid container direction="row" justify="space-evenly" alignItems="center" className={classes.formControl}>
              <label htmlFor="pay">Даром:
          <Checkbox
                  className={classes.inp}
                  name="pay"
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                  checked={inputs.pay}
                  onChange={fooCheckbox}
                />
              </label>
              {inputs.pay ?
                <TextField className={classes.inp} disabled id="filled-disabled" label="цена" defaultValue="-" variant="filled" />
                : <TextField className={classes.inp} id="outlined-number" label="Цена" type="number" variant="outlined" name="price" required
                  value={inputs.price} onChange={changed}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />}
            </Grid>
            {/* Родословная, история прививок */}
            <Grid container direction="row" justify="space-around" alignItems="center" className={classes.formControl}>
              <TextField className={classes.inp} onChange={changed} name="pedigree" id="outlined-helperText" label="Родословная" value={inputs.pedigree} helperText="" variant="outlined" />
              <TextField className={classes.inp} onChange={changed} name="vaccinationРistory" id="outlined-helperText" label="История прививок" value={inputs.vaccinationРistory} helperText="" variant="outlined" />
            </Grid>
            {/* Размер взрослого животного, вес взрослого животного */}
            <Grid container direction="row" justify="space-around" alignItems="center" className={classes.formControl}>
              <FormControl className={classes.formControl}>
                <InputLabel className={classes.sel} id="demo-simple-select-label">Размер взрослого животного</InputLabel>
                <Select
                  className={classes.inp}
                  name="adultSize"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={inputs.adultSize}
                  onChange={changed}
                >
                  <MenuItem value="очень маленькое (хомяк и меньше)">очень маленькое (хомяк и меньше)</MenuItem>
                  <MenuItem value="маленькое (кошка)">маленькое (кошка)</MenuItem>
                  <MenuItem value="среднее (бульдог)">среднее (бульдог)</MenuItem>
                  <MenuItem value="большое (сенбернар)">большое (сенбернар)</MenuItem>
                  <MenuItem value="очень большое (лошадь и более)">очень большое (лошадь и более)</MenuItem>
                </Select>
              </FormControl>
              <TextField className={classes.inp} onChange={changed} name="adultweight" id="outlined-helperText" label="Вес взрослого животного" value={inputs.adultweight} helperText="" variant="outlined" />
            </Grid>
            {/* Домашнее, экзотическое, сельскохозяйственное */}
            <Grid container direction="row" justify="space-evenly" alignItems="center" className={classes.ch}>
              <label htmlFor="pet">Домашнее животное:
          <Checkbox
                  className={classes.inp}
                  name="pet"
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                  checked={inputs.pet}
                  onChange={fooCheckbox}
                />
              </label>
              <label htmlFor="exotic">Экзотическое животное:
          <Checkbox
                  className={classes.inp}
                  name="exotic"
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                  checked={inputs.exotic}
                  onChange={fooCheckbox}
                />
              </label>
              <label htmlFor="farmAnimal">Сельскохозяйственное животное:
          <Checkbox
                  className={classes.inp}
                  name="farmAnimal"
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                  checked={inputs.farmAnimal}
                  onChange={fooCheckbox}
                />
              </label>
            </Grid>
            {/* Служебное животное, служебная собака, собака-поводырь */}
            <Grid container direction="row" justify="space-around" alignItems="center" className={classes.ch}>
              <label htmlFor="serviceAnimal">Cлужебное  животное:
          <Checkbox
                  className={classes.inp}
                  name="serviceAnimal"
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                  checked={inputs.serviceAnimal}
                  onChange={fooCheckbox}
                />
              </label>
              <label htmlFor="warDog">Служебная собака:
          <Checkbox
                  className={classes.inp}
                  name="warDog"
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                  checked={inputs.warDog}
                  onChange={fooCheckbox}
                />
              </label>
              <label htmlFor="guideВog">Собака-поводырь:
          <Checkbox
                  className={classes.inp}
                  name="guideВog"
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                  checked={inputs.guideВog}
                  onChange={fooCheckbox}
                />
              </label>
            </Grid>
            {/* Длинношерстное, хороший вариант для аллергиков */}
            <Grid container direction="row" justify="space-evenly" alignItems="center" className={classes.ch}>
              <label htmlFor="longHaired">Длинношерстное:
          <Checkbox
                  className={classes.inp}
                  name="longHaired"
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                  checked={inputs.longHaired}
                  onChange={fooCheckbox}
                />
              </label>
              <label htmlFor="possibleForAllergySufferers">Хороший вариант для аллергиков:
          <Checkbox
                  className={classes.inp}
                  name="possibleForAllergySufferers"
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                  checked={inputs.possibleForAllergySufferers}
                  onChange={fooCheckbox}
                />
              </label>
            </Grid>
            {/* Только в не квартиры, специальные условия содержания */}
            <Grid container direction="row" justify="space-evenly" alignItems="center" className={classes.ch}>
              <label htmlFor="onlyInNonApartments">Только в не квартиры:
          <Checkbox
                  className={classes.inp}
                  name="onlyInNonApartments"
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                  checked={inputs.onlyInNonApartments}
                  onChange={fooCheckbox}
                />
              </label>
              <label htmlFor="specialConditionsOfDetention">Специальные условия содержания:
          <Checkbox
                  className={classes.inp}
                  name="specialConditionsOfDetention"
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                  checked={inputs.specialConditionsOfDetention}
                  onChange={fooCheckbox}
                />
              </label>
            </Grid>
            {/* Дети в доме */}
            <Grid container direction="row" justify="space-around" alignItems="center" className={classes.ch}>
              <label htmlFor="childrenInTheHouse">Дети в доме:
          <Checkbox
                  className={classes.inp}
                  name="childrenInTheHouse"
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                  checked={inputs.childrenInTheHouse}
                  onChange={fooCheckbox}
                />
              </label>
            </Grid>

          </Grid>
        </div>
        <label htmlFor="photo">Загрузите фотографию животного: {' '}
          <input type="file" name="photo" id="photo" accept="image/*,image/jpeg" required onChange={photoChanged} />
          {/* <img src={inputs.photo} alt="альтернативный текст" />
          <div>{inputs.photo}</div> */}
        </label>
        {/* value={inputs.photo} */}
        <div className={classes.root}><Button type="submit" variant="contained" color="primary">Добавить животное</Button></div>
        {error && <div className="error">{error}</div>}
      </form>
    </>
  )
}

const typeAnimal = [
  { type: 'dogs' },
  { type: 'cats' },
  { type: 'Впишите свой вариант' },
];
const kindDog = [
  { type: 'Дог' },
  { type: 'Беспородная' },
  { type: 'Впишите свой вариант' },
];
const kindCat = [
  { type: 'Персидский кот' },
  { type: 'Беспородная' },
  { type: 'Впишите свой вариант' },
];

export default NewAnimal;

{/* <div className={classes.root}>
          <input
            name="photo"
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span">Загрузите фотографии:</Button>
          </label> */}

{/* <input accept="image/*" className={classes.input} id="icon-button-file" type="file" /> */ }
{/* <label htmlFor="icon-button-file">
            <IconButton color="primary" aria-label="upload picture" component="span">
              <PhotoCamera />
            </IconButton>
          </label> */}
{/* </div> */ }
