import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles({
  block: {
    marginLeft: '190px',

    marginTop: '80px',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',

  },
  img: {
    height: '250px',
    width: '400px',
    borderRadius: '30px 30px 30px 30px',
  },
  onePet: {
    backgroundColor: '#39f250',
    boxShadow: '0 0 5px 2px white',
    border: '1px solid white',
    borderRadius: '30px 30px 30px 30px',
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
});

function AnimalCard() {
  const classes = useStyles();
  const data = useSelector(state => state.animals).animals;
  const filters = useSelector(state => state.animals).filters;
  const history = useHistory();

    useEffect(() => {
      console.log(123);
      
    }, [filters])

  return (
    <>
      <container className='animal-card'>
        {Object.keys(data) && Object.keys(data).map(key => {
          return (data[key] && data[key].map(obj => {
            return (
              <div key={obj._id} onClick={() => history.push(`/oneAnimal/${obj._id}`)} className={classes.onePet}>
                <div>
                  <img className={classes.img} src={`/${obj.photo}`} alt="animal" />
                </div>
              </div>
            )
          }))
        })
        }
      </container>
    </>
  );
}

export default AnimalCard;
