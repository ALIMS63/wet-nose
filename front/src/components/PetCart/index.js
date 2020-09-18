import React,{useState} from "react"
import {useDispatch, useSelector} from 'react-redux'
//import img from '../../img/1.jpg'

 export default function PetCart(){
    const [modal, setModal] = useState(false)
    const [btnStat, setBtnStat] = useState(true)
    
    const data =  useSelector(state => state.animals).animals
    console.log('......',data);
    const animalType = Object.keys(data)
    const Animals = data[animalType[0]]
    
   
    
    
    

    function handlePetInfo(){
        setModal(!modal)
        setBtnStat(!btnStat)
    }

    return (
        <>
           {Animals ? Animals.map(animal => (
        <div className='container-1'>
            <div className='pet-content'>
                <img className='pet-img' src={animal.photo[0]} />
                <div className='textContainer'>
                    
                    
           <h3>nickname:{animal.nickname}  </h3>
                    <div className='content-text'>
           <p>{animal.kind}</p>
                        <p>возраст:{animal.age} </p>
                        <p>{animal.description}</p>
                        
                    </div>
                    <a onClick={handlePetInfo} className='pet-link'>{btnStat? 'подробнее' : 'свернуть'}</a>
                </div>
                {modal ? 
                <div className='textContainer moreDetails'>
                    <p>характер: очень хороший и добрый</p>
                    <p>аллергия: нет</p>
                    <p>корм: сухой, мокрый, сырой</p>
                    <p>здоровье: богатырское</p>
                </div> : ''}
                
            </div>
        </div>
                )) : ''}
                </>
    )
 }

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import img from '../../img/1.jpg'

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
// });

// export default function PetCart() {
//   const classes = useStyles();

//   return (
//     <Card className={classes.root}>
//       <CardActionArea>
//         <div className='card-container'>
//         <CardMedia
//           component='img'
//           alt="Contemplative Reptile"
//           height="140"
//           image={img}
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//           Барсик крокодил нильский
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//                         <div className='textContainer'>
//                             <p>возраст: 12лет</p>
//                             <p>самка</p>
//                             <p>размер(д/ш/в):3м/60см/40см</p> 
//                         </div>
//           </Typography>
//         </CardContent>
//       </div>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//         <Button size="small" color="primary">
//           Learn More
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }