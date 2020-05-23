import React, { Component } from 'react';

import classes from './ModalPay.module.css';
import BackDrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

class ModalPay extends Component { 
    shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps.show !== this.props.show;
    }
    componentDidUpdate() {
        console.log('[ModalPay] did update')
    }

    render() {
        return(
            <Aux>
                <BackDrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div 
                className={classes.ModalPay}
                style={{
                transform: this.props.show ? 'translateY(0)' : "translateY(-100vh)",
                opacity: this.props.show ? '1' : '0'}}
                >
                {this.props.children}
                </div>
            </Aux>
            );
        }
    }

export default ModalPay;