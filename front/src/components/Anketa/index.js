import React,{useState} from "react"
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Anketa(){

    return (
        <div className='container-form'>
            <div className='text-box'>
            <ul>
                <li><RadioGroup row aria-label="position" name="position" defaultValue="top">
        <FormControlLabel
          value="top"
          control={<Radio color="primary" />}
          label="есть время на обучение"
          labelPlacement="start"
        />{  <FormControlLabel
            value="start"
            control={<Radio color="primary" />}
            label="готов взять уже обученное "
            labelPlacement="start"
          />}
        </RadioGroup>
        </li>
                <li><RadioGroup row aria-label="position" name="position" defaultValue="top">
        <FormControlLabel
          value="top"
          control={<Radio color="primary" />}
          label="шерсть это проблема"
          labelPlacement="start"
        />
        {  <FormControlLabel
            value="end"
            control={<Radio color="primary" />}
            label="немного шерсти не страшно"
            labelPlacement="start"
          />}
        </RadioGroup>
        </li>
                <li><RadioGroup row aria-label="position" name="position" defaultValue="top">
                <FormControlLabel
          value="top"
          control={<Radio color="primary" />}
          label="классический домашеий"
          labelPlacement="start"
        />{  <FormControlLabel
            value="start"
            control={<Radio color="primary" />}
            label="экзотический вид"
            labelPlacement="start"
          />}
          </RadioGroup>
        </li>
                <li><RadioGroup row aria-label="position" name="position" defaultValue="top">
                <FormControlLabel
          value="top"
          control={<Radio color="primary" />}
          label="требует внимания и ухода"
          labelPlacement="start"
        />{  <FormControlLabel
            value="start"
            control={<Radio color="primary" />}
            label="требует только ухода"
            labelPlacement="start"
          />}
          </RadioGroup>

        </li>
                <li><RadioGroup row aria-label="position" name="position" defaultValue="top">
                <FormControlLabel
          value="top"
          control={<Radio color="primary" />}
          label="возможно содержание в квартире"
          labelPlacement="start"
        />{  <FormControlLabel
            value="start"
            control={<Radio color="primary" />}
            label="предпочтительно содержиние в доме с участком"
            labelPlacement="start"
          />}
          </RadioGroup>
        </li>

            </ul>
            <div className='form-button'>
               <Button variant="outlined" color="inherit">Подобрать</Button> 
            </div>
            
            </div>

        </div>
    )
}