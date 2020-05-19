import React from 'react';

import classes from './ModalPay.module.css';
import BackDrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary';

const modalPay = (props) => (
    <Aux>
        <BackDrop show={props.show} clicked={props.modalClosed}/>
        <div 
        className={classes.ModalPay}
        style={{
        transform: props.show ? 'translateY(0)' : "translateY(-100vh)",
        opacity: props.show ? '1' : '0'}}
        >
        {props.children}
        </div>
    </Aux>
);

export default modalPay;