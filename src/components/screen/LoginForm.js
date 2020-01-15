import React, {Component} from 'react';
import {connect} from 'redux';
import {emailChanged} from '../../actions/index';
import { Card , CardSection, Input, Button} from '../common/Index'

class LoginForm extends Component {
    
    onEmailChange(text){
     
        this.props.emailChanged(text);

    }

    render() {
        return (
            <Card>
             <CardSection>
               <Input label="email" placeholder="email address" onChangeText={this.onEmailChange.bind(this)}/>
             </CardSection>
             <CardSection>
             <Input label="password" secureTextEntry placeholder="password"/>
             </CardSection>
             <CardSection>
                 <Button>Login</Button>
             </CardSection>
            </Card>
        );
    }
}

export default connect(null, {}) (LoginForm);
