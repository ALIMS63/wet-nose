// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import InputLabel from "@material-ui/core/InputLabel";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     padding: '0px',
//     margin: '0px',
//     height: '50px',
//     width: '397px',
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2)
//   }
// }));

// export default function NativeSelects() {
//   const classes = useStyles();
//   const [state, setState] = React.useState({
//     age: "",
//     name: "hai"
//   });

//   const handleChange = (event) => {
//     const name = event.target.name;
//     setState({
//       ...state,
//       [name]: event.target.value
//     });
//   };

//   return (
//     // <div>
//       <FormControl variant="outlined" className={classes.formControl}>
//         <InputLabel htmlFor="outlined-age-native-simple">Who are you?</InputLabel>
//         <Select
//           native
//           value={state.age}
//           onChange={handleChange}
//           label="Who are you?"
//           inputProps={{
//             name: "age",
//             id: "outlined-age-native-simple"
//           }}
//         >
//           <option aria-label="None" value="" />
//           <option value={10}>Professional Breeder</option>
//           <option value={20}>Animal Shelter</option>
//           <option value={30}>Private Person</option>
//         </Select>
//       </FormControl>
//     // </div>
//   );
// }



