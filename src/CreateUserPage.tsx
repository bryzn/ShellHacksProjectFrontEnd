import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class CreateUserPage extends React.Component<{}, {}>
{
    componentDidMount(){
        document.getElementById("navBar")!.style.display = "none";
    }
    render() {
        return (
            <div>
                <div className = "titleFix">
                    <p> <strong> Create User </strong> </p>
                </div>

                <div className = "FormArea">
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />

                            <Form.Label>Username</Form.Label>
                            <Form.Control placeholder = "username"/>

                            <Form.Label>Password</Form.Label>
                            <Form.Control type = "password" placeholder = "password"/>

                            <Form.Label>Monthly Income</Form.Label>
                            <Form.Control placeholder = ""/>

                            <Form.Label>Total Debt</Form.Label>
                            <Form.Control placeholder = ""/>

                            <Form.Label>What's percentage of your income do you want to spend ideally on debt</Form.Label>
                            <Form.Control  placeholder = "20%"/>

                            <Form.Label>What's percentage of your income do you want to spend ideally on savings/investments</Form.Label>
                            <Form.Control  placeholder = "10%"/>

                            <Form.Label>What's percentage of your income do you want to spend ideally on spending</Form.Label>
                            <Form.Control  placeholder = "70%"/>

                        </Form.Group>
                    </Form>
                </div>
                <div>
                    <Button className="ButtonSpacingLogin" href = "/"> Back </Button>
                    <Button className="ButtonSpacingLogin" variant="primary" type="submit" href = "/home"> Create Account </Button>
                </div>

            </div >
        )
    }
}

export default CreateUserPage;
