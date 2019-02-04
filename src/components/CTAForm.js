import {Component} from "react";
import React from "react";
import Form from "react-bootstrap/Form";
import {Button, FormControl, FormGroup, Row, Col} from "react-bootstrap";

class CTAForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };
    }

    handleSubmit = (event) => {
        //post
        event.preventDefault()
    };

    handleChange = (event) => {
        this.setState({ [event.target.name] : event.target.value });
    };

    render() {
        return (
            <div className="CTAForm">
               <Form onSubmit={this.handleSubmit}>
                   <FormGroup>
                       <Row>
                           <Col>
                               <FormControl name="name" type="text" value={this.state.name} onChange={this.handleChange} placeholder="Your Name"/>
                           </Col>
                           <Col>
                               <FormControl name="email" type="email" value={this.state.email} onChange={this.handleChange} placeholder="Email"/>
                           </Col>
                       </Row>
                   </FormGroup>
                   <FormGroup>
                    <FormControl className="App-message" name="message" type="text" value={this.state.message} onChange={this.handleChange} placeholder="Your message here"/>
                   </FormGroup>
                   <Button type="submit" value="Submit">Join Now!</Button>
               </Form>
            </div>
        );
    }
}

export default CTAForm;