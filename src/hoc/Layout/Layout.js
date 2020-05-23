import React, { Component } from 'react';

import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state ={
        showSideDrawer: false,
    }

    sideDrawerOpenHandler = () => {
        this.setState({showSideDrawer: true})
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }
    /* how to make a proper toggle button
    sideDrawerToggleHandler = () => {
        this.setState((prevState) =>{
            return {showSideDrawer: !prevState.showSideDrawer};
        });
        //dont use state in setState calls
        //this.setState({showSideDrawer: !this.state.showSideDrawer});}*/
    

    render() {
        return(
            <Aux>
                <Toolbar 
                menuOpen={this.sideDrawerOpenHandler}
                >
                </Toolbar>
                <SideDrawer
                open={this.state.showSideDrawer}
                closed={this.sideDrawerClosedHandler}
                >
                </SideDrawer>
                <main className={classes.Content}>
                {this.props.children}
                </main>
            </Aux>  
            )
    }
};

export default Layout;