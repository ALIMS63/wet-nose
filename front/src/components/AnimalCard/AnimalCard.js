import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  block: {
    marginLeft: '190px',

    width: '1300px',
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
    boxShadow: '0 0 5px 2px',
    border: '2px solid black',
    borderRadius: '30px 30px 30px 30px',
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
});

function AnimalCard() {
  const classes = useStyles();

  return (
    <>
      <container className={classes.block}>
        <div className={classes.onePet}>
          <div>
            <img className={classes.img} src="https://lh3.googleusercontent.com/proxy/tnHGrMGNj0aMKp-wyVZcpnzWcS-9t4XvjpnyXNtZIvKeTecqgTrs9VNRhlaagquHPdRPUrjecmHJVjVrupz7YnBRX76C84ZlHyDUepk_YOXD_8z_o-DTRiwp0kGredyzZpxuw4vMf5YGdAOf8GKkWio2QItz9XWELmvPGVa44FhOMhH8W59zsnr0ykqH4OW1a51-Wwr0JgdLCKUim53GCldP" alt="animal" />
          </div>
        </div>

        <div className={classes.onePet}>
          <div>
            <img className={classes.img} src="https://lh3.googleusercontent.com/proxy/tnHGrMGNj0aMKp-wyVZcpnzWcS-9t4XvjpnyXNtZIvKeTecqgTrs9VNRhlaagquHPdRPUrjecmHJVjVrupz7YnBRX76C84ZlHyDUepk_YOXD_8z_o-DTRiwp0kGredyzZpxuw4vMf5YGdAOf8GKkWio2QItz9XWELmvPGVa44FhOMhH8W59zsnr0ykqH4OW1a51-Wwr0JgdLCKUim53GCldP" alt="animal" />
          </div>
        </div>

        <div className={classes.onePet}>
          <div>
            <img className={classes.img} src="https://lh3.googleusercontent.com/proxy/tnHGrMGNj0aMKp-wyVZcpnzWcS-9t4XvjpnyXNtZIvKeTecqgTrs9VNRhlaagquHPdRPUrjecmHJVjVrupz7YnBRX76C84ZlHyDUepk_YOXD_8z_o-DTRiwp0kGredyzZpxuw4vMf5YGdAOf8GKkWio2QItz9XWELmvPGVa44FhOMhH8W59zsnr0ykqH4OW1a51-Wwr0JgdLCKUim53GCldP" alt="animal" />
          </div>
        </div>

        <div className={classes.onePet}>
          <div>
            <img className={classes.img} src="https://lh3.googleusercontent.com/proxy/tnHGrMGNj0aMKp-wyVZcpnzWcS-9t4XvjpnyXNtZIvKeTecqgTrs9VNRhlaagquHPdRPUrjecmHJVjVrupz7YnBRX76C84ZlHyDUepk_YOXD_8z_o-DTRiwp0kGredyzZpxuw4vMf5YGdAOf8GKkWio2QItz9XWELmvPGVa44FhOMhH8W59zsnr0ykqH4OW1a51-Wwr0JgdLCKUim53GCldP" alt="animal" />
          </div>
        </div>

        <div className={classes.onePet}>
          <div>
            <img className={classes.img} src="https://lh3.googleusercontent.com/proxy/tnHGrMGNj0aMKp-wyVZcpnzWcS-9t4XvjpnyXNtZIvKeTecqgTrs9VNRhlaagquHPdRPUrjecmHJVjVrupz7YnBRX76C84ZlHyDUepk_YOXD_8z_o-DTRiwp0kGredyzZpxuw4vMf5YGdAOf8GKkWio2QItz9XWELmvPGVa44FhOMhH8W59zsnr0ykqH4OW1a51-Wwr0JgdLCKUim53GCldP" alt="animal" />
          </div>
        </div>

        <div className={classes.onePet}>
          <div>
            <img className={classes.img} src="https://lh3.googleusercontent.com/proxy/tnHGrMGNj0aMKp-wyVZcpnzWcS-9t4XvjpnyXNtZIvKeTecqgTrs9VNRhlaagquHPdRPUrjecmHJVjVrupz7YnBRX76C84ZlHyDUepk_YOXD_8z_o-DTRiwp0kGredyzZpxuw4vMf5YGdAOf8GKkWio2QItz9XWELmvPGVa44FhOMhH8W59zsnr0ykqH4OW1a51-Wwr0JgdLCKUim53GCldP" alt="animal" />
          </div>
        </div>

        <div className={classes.onePet}>
          <div>
            <img className={classes.img} src="https://lh3.googleusercontent.com/proxy/tnHGrMGNj0aMKp-wyVZcpnzWcS-9t4XvjpnyXNtZIvKeTecqgTrs9VNRhlaagquHPdRPUrjecmHJVjVrupz7YnBRX76C84ZlHyDUepk_YOXD_8z_o-DTRiwp0kGredyzZpxuw4vMf5YGdAOf8GKkWio2QItz9XWELmvPGVa44FhOMhH8W59zsnr0ykqH4OW1a51-Wwr0JgdLCKUim53GCldP" alt="animal" />
          </div>
        </div>

        <div className={classes.onePet}>
          <div>
            <img className={classes.img} src="https://lh3.googleusercontent.com/proxy/tnHGrMGNj0aMKp-wyVZcpnzWcS-9t4XvjpnyXNtZIvKeTecqgTrs9VNRhlaagquHPdRPUrjecmHJVjVrupz7YnBRX76C84ZlHyDUepk_YOXD_8z_o-DTRiwp0kGredyzZpxuw4vMf5YGdAOf8GKkWio2QItz9XWELmvPGVa44FhOMhH8W59zsnr0ykqH4OW1a51-Wwr0JgdLCKUim53GCldP" alt="animal" />
          </div>
        </div>

        <div className={classes.onePet}>
          <div>
            <img className={classes.img} src="https://lh3.googleusercontent.com/proxy/tnHGrMGNj0aMKp-wyVZcpnzWcS-9t4XvjpnyXNtZIvKeTecqgTrs9VNRhlaagquHPdRPUrjecmHJVjVrupz7YnBRX76C84ZlHyDUepk_YOXD_8z_o-DTRiwp0kGredyzZpxuw4vMf5YGdAOf8GKkWio2QItz9XWELmvPGVa44FhOMhH8W59zsnr0ykqH4OW1a51-Wwr0JgdLCKUim53GCldP" alt="animal" />
          </div>
        </div>

        <div className={classes.onePet}>
          <div>
            <img className={classes.img} src="https://lh3.googleusercontent.com/proxy/tnHGrMGNj0aMKp-wyVZcpnzWcS-9t4XvjpnyXNtZIvKeTecqgTrs9VNRhlaagquHPdRPUrjecmHJVjVrupz7YnBRX76C84ZlHyDUepk_YOXD_8z_o-DTRiwp0kGredyzZpxuw4vMf5YGdAOf8GKkWio2QItz9XWELmvPGVa44FhOMhH8W59zsnr0ykqH4OW1a51-Wwr0JgdLCKUim53GCldP" alt="animal" />
          </div>
        </div>
      </container>
    </>
  );
}

export default AnimalCard;
