import React from 'react';
import { AsyncStorage } from 'react-native';
import { Container, Content, Form ,Input, Item, Button, Text} from 'native-base';
import { Actions } from 'react-native-router-flux';

class Register extends React.Component {
  constructor(){
    super();
    this.state = {
      username: '',
      email: '',
      pass: '',
    }
  }
  async saveInfo(token, selected){
    await AsyncStorage.setItem(token, selected);
  }

  saveRegister(){
    console.log("navigate to eventPage");
    Actions.EventPage();
    // fetch('http://192.168.1.19/users/save',{
    //   method: 'POST',
    //   headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     username: this.state.username,
    //     email: this.state.email,
    //     password: this.state.pass,
    //   })
    // })
    //   .then((response) => response.json())
    //   .then((response) => {
    //     console.log(response);
    //     this.saveInfo('id_token', response.id_token);
    //     Actions.EventPage();
    //
    //   })
    //   .done();
  }
  render() {
    return (
      <Container>
        <Form>
          <Item>
            <Input placeholder="First Name" value={ this.state.username } />
          </Item>
          <Item>
            <Input placeholder="Last Name" value={ this.state.username } />
          </Item>
          <Item>
            <Input placeholder="Username" value={ this.state.username } />
          </Item>
          <Item>
            <Input placeholder="email" value={ this.state.email }/>
          </Item>
          <Item>
            <Input placeholder="pass" value={ this.state.pass }/>
          </Item>
          <Item>
            <Input placeholder="confirm"/>
          </Item>
        </Form>
        <Button full onPress={ this.saveRegister.bind(this) }>
          <Text>Register</Text>
        </Button>
      </Container>
    );
  }
}

export default Register;
