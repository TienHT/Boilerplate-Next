import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import PropTypes from 'prop-types'

CustomZoomOut.propTypes = {
    onOpen :PropTypes.bool,
    onClose:PropTypes.func,
    typeZoomOut:PropTypes.oneOf(['image','item']),
    itemZoomOut:PropTypes.object
}


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight:'650px',
    overflow:'auto'
  },
   zoomOut:{
    transform: 'scale(1.5)',
    maxHeight:'50vh',
   },
   paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    width:'500px',
    paddingTop:'10rem'
  },
}));


export default function CustomZoomOut(props) {
  const classes = useStyles();
  
  const {
    onOpen,
    typeZoomOut,
    itemZoomOut,
    onClose
  } = props;
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={onOpen}
        onClose={onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={onOpen}>
          {
              typeZoomOut==='image'?<img alt={JSON.stringify(itemZoomOut)} className={classes.zoomOut} src={itemZoomOut}/>:
              
              <div className={classes.paper} >
              {itemZoomOut}
              </div>
          }
        </Fade>
      </Modal>
    </div>
  );
}
