import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { Select } from 'antd';
import 'antd/dist/antd.css';
import {startAnimals, setAnimalCategory} from '../../redux/actions'

const { Option } = Select;



function Filter() {
  
  const dispatch = useDispatch()
  
  const animalsFromState = useSelector((state) => state.animals)
  const filterAnimalsFromState = useSelector((state) => state.animals.filterAnimals)
  console.log(filterAnimalsFromState);
  

  // console.log(animalsFromState);
  
  
  useEffect(() => {
    dispatch(startAnimals())
  },[])

  
  function handleChange(value) {
    console.log(animalsFromState);
    
    console.log(`selected ${value}`);
    console.log(animalsFromState.animals[value]);
    dispatch(setAnimalCategory(value))
    
  }
  return (
    <>
      <Select defaultValue="Category" style={{ width: 120 }} onChange={handleChange}>
        <Option value="cats">Cats</Option>
        <Option value="dogs">Dogs</Option>
        <Option value="other">Other</Option>
      </Select>
      {' '}
      <Select defaultValue="Pay" style={{ width: 120 }} onChange={handleChange}>
        <Option value="true">True</Option>
        <Option value="false">False</Option>
      </Select>
      {' '}
      <Select defaultValue="Choose" style={{ width: 120 }} onChange={handleChange}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
      </Select>
      {' '}
      <Select defaultValue="Choose" style={{ width: 120 }} onChange={handleChange}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
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
