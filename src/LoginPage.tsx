import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './LoginPage.css'

export class LoginPage extends React.Component< any, any > {
    componentDidMount(){
        //document.getElementsByTagName("nav")!.item(0)!.classList.add("hidden");
    }
    componentWillUnmount(){

    }
    render() {
        return (
            <div>
                <p> Logo Here </p>
                <div>

                </div>
                <div className="LoginArea">
                    <Form>
                        <Form.Group controlId = "formUserName">
                            <Form.Control placeholder="UserName" name = "usernameField" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" name = "passwordField" />
                        </Form.Group>
                        <Button className="ButtonSpacing" variant="primary" type="submit" href="/home"> Sign In </Button>
                        <Button className="ButtonSpacing" href = "/createAccount"> Create Account </Button>
                    </Form>
                </div>
            </div>
        )
    }
}

export default LoginPage;