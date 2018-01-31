import React from 'react';
import { Container, Content, Form , Item, Input, Button, Text} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Login extends React.Component {
  constructor(){
    super();
    this.state = {
      username: '',
      pass: '',
    }
  }

  renderToRegister(){
    console.log('go To Register');
    Actions.Register();
  }
  async checkLogin(token, selected){
    await AsyncStorage.setItem(token, selected);
  }

  saveLogin(){
    console.log("navigate");
    Actions.EventPage();

    // fetch('http://192.168.1.19/api/login', {
    //   method: 'POST',
    //   headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     username: this.state.username,
    //     password: this.state.pass,
    //   })
    // })
    //   .then((response) => response.json)
    //   .then((response) => {
    //     this.checkLogin('id_token', response.id_token);
    //     Actions.EventPage();
    //   })
    //   .done();
  }
  render() {

    return (
      <Container>
        <Form>
          <Item floatingLabel>
            <Input placeholder="Username" value={ this.state.username } onChangeText={(username) => this.setState({username})}/>
          </Item>
          <Item floatingLabel>
            <Input
              placeholder="Password"
              onChangeText={(pass) => this.setState({pass})}
              value={ this.state.pass }/>
          </Item>
        </Form>
        <Button full onPress={ this.saveLogin.bind(this) }>
          <Text>Login</Text>
        </Button>

        <Button transparent onPress={this.renderToRegister.bind(this)}>
          <Text>create account</Text>
        </Button>
      </Container>
    );
  }
}
