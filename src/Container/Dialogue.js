import LogIn from './LogIn';
import SignUp from './SignUp';
import React from 'react';

export default class Dialogue extends React.Component{
    render(){
        return(
            <>
                <LogIn />
                <SignUp />
            </>
        )
    }
}