import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Select } from 'antd';
import 'antd/dist/antd.css';
import { startAnimals, setAnimalCategory, paymentFilter, setFilteredAnimals } from '../../redux/actions'

const { Option } = Select;



function Filter() {

  const dispatch = useDispatch()
  const [category, setCategory] = useState()
  // const [filtered, setFiltered] = useState([])
  const animalsFromState = useSelector((state) => state.animals)
  const filterAnimalsFromState = useSelector((state) => state.animals.filterAnimals)
  console.log('filtered ARR ==>>>', filterAnimalsFromState);


  useEffect(() => {
    dispatch(startAnimals())
  }, [])

  let arr = []

  async function chooseCategory(value) {
    setCategory(value)
    dispatch(startAnimals())
    dispatch(setAnimalCategory(value))
  }

  function choosePay(value) {
    arr = []
    dispatch(paymentFilter())
    for (let animal in filterAnimalsFromState) {
      if (String(filterAnimalsFromState[animal].pay) === value) {
        arr.push(filterAnimalsFromState[animal])
      }
    }
    dispatch(setFilteredAnimals(arr));
    console.log('arr PAY', arr);
  }

  function chooseAge(value) {
    arr = []
    for (let animal in filterAnimalsFromState) {
      if (filterAnimalsFromState[animal].age >= value[0] && filterAnimalsFromState[animal].age <= value[2]) {
        arr.push(filterAnimalsFromState[animal])
      }
    }
    dispatch(setFilteredAnimals(arr))
    console.log('arr AGE', arr);
  }

  function choosePrice(value) {
    arr = []
    for (let animal in filterAnimalsFromState) {
      console.log(filterAnimalsFromState[animal].price);
      let price = value.split('-')
      if (filterAnimalsFromState[animal].price >= Number(price[0]) && filterAnimalsFromState[animal].price <= Number(price[1])) {
        arr.push(filterAnimalsFromState[animal])
      }
    }
    dispatch(setFilteredAnimals(arr))
    console.log('arr PRICE', arr);
  }

  return (
    <>
      <Select defaultValue="Category" style={{ width: 120 }} onChange={chooseCategory}>
        <Option value="cats">Cats</Option>
        <Option value="dogs">Dogs</Option>
        <Option value="other">Other</Option>
      </Select>
      {' '}
      <Select
        // disabled={category ? false : true}
        defaultValue="Pay"
        style={{ width: 120 }}
        onChange={choosePay}>
        <Option value="true">True</Option>
        <Option value="false">False</Option>
      </Select>
      {' '}
      <Select
        // disabled={category ? false : true}
        defaultValue="Age"
        style={{ width: 120 }}
        onChange={chooseAge}>
        <Option value="1">0-1</Option>
        <Option value="1-3">1-3</Option>
        <Option value="3-7">3-7</Option>
      </Select>
      {' '}
      <Select
        // disabled={category ? false : true}
        defaultValue="Price"
        style={{ width: 120 }}
        onChange={choosePrice}>
        <Option value="0-1000">0-1000</Option>
        <Option value="1000-5000">1000-5000</Option>
        <Option value="5000-10000">5000-10000</Option>
        <Option value="10000-999999"> &gt;10000</Option>
      </Select>
    </>
  )
}

export default Filter




// import { makeStyles, withStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import NativeSelect from '@material-ui/core/NativeSelect';
// import InputBase from '@material-ui/core/InputBase';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import axios from 'axios'


// const BootstrapInput = withStyles((theme) => ({
//   root: {
//     'label + &': {
//       marginTop: theme.spacing(3),
//     },
//   },
//   input: {
//     borderRadius: 4,
//     position: 'relative',
//     backgroundColor: theme.palette.background.paper,
//     border: '1px solid #ced4da',
//     fontSize: 16,
//     padding: '10px 26px 10px 12px',
//     transition: theme.transitions.create(['border-color', 'box-shadow']),
//     // Use the system font instead of the default Roboto font.
//     fontFamily: [
//       '-apple-system',
//       'BlinkMacSystemFont',
//       '"Segoe UI"',
//       'Roboto',
//       '"Helvetica Neue"',
//       'Arial',
//       'sans-serif',
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(','),
//     '&:focus': {
//       borderRadius: 4,
//       borderColor: '#80bdff',
//       boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
//     },
//   },
// }))(InputBase);

// const useStyles = makeStyles((theme) => ({
//   margin: {
//     margin: theme.spacing(1),
//   },
// }));

// export default function CustomizedSelects(animals) {

//   const classes = useStyles();
//   const [age, setAge] = React.useState('');
//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };

//   return (
//     <div>
//       <h2>Filters</h2>

//       <FormControl className={classes.formControl}>
//         <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
//         <Select
//           labelId="demo-simple-select-helper-label"
//           id="demo-simple-select-helper"
//           value={age}
//           onChange={handleChange}
//         >
//           <MenuItem value=""><em>None</em></MenuItem>
//           <MenuItem value='cats'>Cats</MenuItem>
//           <MenuItem value='dogs'>Dogs</MenuItem>
//           <MenuItem value='other'>Other</MenuItem>
//         </Select>
//         <FormHelperText>Some important helper text</FormHelperText>
//       </FormControl>
//       <FormControl className={classes.formControl}>
//         <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
//         <Select
//           labelId="demo-simple-select-helper-label"
//           id="demo-simple-select-helper"
//           value={age}
//           onChange={handleChange}
//         >
//           <MenuItem value=""><em>None</em></MenuItem>
//           <MenuItem value={10}>Ten</MenuItem>
//           <MenuItem value={20}>Twenty</MenuItem>
//           <MenuItem value={30}>Thirty</MenuItem>
//         </Select>
//         <FormHelperText>Some important helper text</FormHelperText>
//       </FormControl>
//       <FormControl className={classes.formControl}>
//         <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
//         <Select
//           labelId="demo-simple-select-helper-label"
//           id="demo-simple-select-helper"
//           value={age}
//           onChange={handleChange}
//         >
//           <MenuItem value=""><em>None</em></MenuItem>
//           <MenuItem value={10}>Ten</MenuItem>
//           <MenuItem value={20}>Twenty</MenuItem>
//           <MenuItem value={30}>Thirty</MenuItem>
//         </Select>
//         <FormHelperText>Some important helper text</FormHelperText>
//       </FormControl>

//       <FormControl className={classes.formControl}>
//         <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
//         <Select
//           labelId="demo-simple-select-helper-label"
//           id="demo-simple-select-helper"
//           value={age}
//           onChange={handleChange}
//         >
//           <MenuItem value=""><em>None</em></MenuItem>
//           <MenuItem value={10}>Ten</MenuItem>
//           <MenuItem value={20}>Twenty</MenuItem>
//           <MenuItem value={30}>Thirty</MenuItem>
//         </Select>
//         <FormHelperText>Some important helper text</FormHelperText>
//       </FormControl>

//     </div>
//   );
// }
