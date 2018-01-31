import React from 'react';
import { Container, Content, Form , Item, Input, Button, Text} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';

export default class Login extends React.Component {
  constructor(){
    super();
    this.state = {
      error: '',
      username: '',
      pass: '',
    }
  }

  renderToRegister(){
    console.log('go To Register');
    Actions.Register();
  }
  async checkLogin(token, tokenItem){
      await AsyncStorage.setItem(token, tokenItem);
  }

  saveLogin(){
    fetch('http://56fd4bc8.ngrok.io/api/login', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.username,
        password: this.state.pass,
      })
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.error){
          console.log("error: "+ response.error);
          console.log("token : "+response.token);

          this.setState({
            error: response.error,
            username: '',
            pass: '',
          });
        }
        else{
          console.log("token : "+response.token);
          this.checkLogin('token', response.token);
          Actions.EventOwner();
        }
      })
      .catch((err) => console.log(err))
      .done();
  }
  render() {

    return (
      <Container>
        <Form>
          <Item floatingLabel>
            <Input placeholder="Username or Email" value={ this.state.username } onChangeText={(username) => this.setState({username: username, error: ''})}/>
          </Item>
          <Item floatingLabel>
            <Input
              placeholder="Password"
              onChangeText={(pass) => this.setState({pass})}
              value={ this.state.pass }/>
          </Item>
        </Form>
        <Button full onPress={ this.saveLogin.bind(this) }>
          <Text>Sign In</Text>
        </Button>

        <Button transparent onPress={this.renderToRegister.bind(this)}>
          <Text>create account</Text>
        </Button>
        <Text style={{color: 'red'}}>{this.state.error}</Text>
      </Container>
    );
  }
}
