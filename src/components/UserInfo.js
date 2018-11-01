import React, { Component } from "react";
import Login from "./Login";
import firebase from "firebase";
import base, {firebaseApp} from "../base";

class UserInfo extends Component {
    state = {
        email: null,
        displayName: null
    };

    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                this.authHandler({user});
            }
        });
    }
    //Provider authentication
    authenticate = provider => {
        console.log(provider);
        const authProvider = new firebase.auth['${provider}AuthProvider']();
        firebaseApp
        .auth()
        .signInWithPopup(authProvider)
        .then(this.authHandler);
    };

    //Process after authenticate
    authHandler = async authData => {
        const user = authData.user;
        this.setState({
            email: user.email,
            displayName: user.displayName
        });
    };

    render() {
        const logout = <button onClick={this.logout}>Log Out!</button>;
        if(!this.state.email){
            return <Login authenticate={this.authenticate} />;
        }
        return (
            <div className="user-info">
                <label>Email:</label>
                <span type ="text" id="email">
                    test@test.com
                </span>
            </div>
        );
    }
}

export default UserInfo;