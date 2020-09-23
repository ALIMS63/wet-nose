import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles({
  block: {
    margin: 'auto',
    width: '60%',
    marginTop: '50px',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',

  },
  img: {
    height: '200px',
    width: '200px',
    borderRadius: '5px',
    objectFit: 'cover',
  },
  onePet: {
    backgroundColor: '#39f250',
    // boxShadow: '0 0 5px 2px white',
    border: '1px solid white',
    borderRadius: '5px',
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  onePetHover: {
    boxShadow: '0 0 5px 2px white',
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
      <container className={classes.block}>
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
