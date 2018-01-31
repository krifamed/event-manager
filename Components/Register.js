import React from 'react';
import { AsyncStorage } from 'react-native';
import { Container, Content, Form ,Input, Item, Button, Text} from 'native-base';
import { Actions } from 'react-native-router-flux';
import DatePicker from 'react-native-datepicker';

class Register extends React.Component {
  constructor(){
    super();
    this.state = {
      fname: '',
      lname: '',
      email: '',
      pass: '',
      confirm_pass: '',
      date: '1996-11-07',
      error: '',
    }
  }
  /*
  * save the token to get the session open
  async saveInfo(token, selected){
    await AsyncStorage.setItem(token, selected);
  }
*/
  // saveRegister(){
  //   console.log("navigate to eventPage");
  //   Actions.Login();
  //   fetch('http://56fd4bc8.ngrok.io/api/register',{
  //     method: 'POST',
  //     headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       fname: this.state.fname,
  //       lname: this.state.lname,
  //       email: this.state.email,
  //       password: this.state.pass,
  //       confirm_pass: this.state.confirm_pass,
  //       date: this.state.date,
  //     })
  //   })
  //     .then((response) => response.json())
  //     .then((response) => {
  //       console.log(response);
  //       this.saveInfo('id_token', response.id_token);
  //       Actions.EventPage();
  //
  //     })
  //     .done();
  // }

  saveRegister(){

    fetch('http://56fd4bc8.ngrok.io/api/register',{
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: this.state.fname,
        last_name: this.state.lname,
        email: this.state.email,
        password: this.state.pass,
        password_confirmation: this.state.confirm_pass,
        birthday: this.state.date,
      })
    })
      .then((response) => response.json())
      .then((response) => {
        if(response.errors){
          console.log(response.errors)
        }else
          Actions.Login();
        // if(response.errors){
          // this.setState{
            // errors: response.errors
          // }
        // }
        // else
        // this.saveInfo('id_token', response.id_token);

      })
      .done();
  }
  render() {
    return (
      <Container>
        <Form>
          <Item>
            <Input placeholder="First Name" value={ this.state.fname } onChangeText={(fname) => this.setState({fname})}/>
          </Item>
          <Item>
            <Input placeholder="Last Name" value={ this.state.lname } onChangeText={(lname) => this.setState({lname})}/>
          </Item>
          <Item>
            <Input placeholder="email" value={ this.state.email } onChangeText={(email) => this.setState({email})}/>
          </Item>
          <Item>
            <Input placeholder="pass" value={ this.state.pass }onChangeText={(pass) => this.setState({pass})}/>
          </Item>
          <Item>
            <Input placeholder="confirm password" value={ this.state.confirm_pass } onChangeText={(confirm_pass) => this.setState({confirm_pass})}/>
          </Item>
          <DatePicker
            mode="date"
            date={this.state.date }
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="1900-01-01"
            maxDate="2018-01-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            onDateChange={(date) => {this.setState({date: date})}}
          />
        </Form>
        <Button full onPress={ this.saveRegister.bind(this) }>
          <Text>Sign Up</Text>
        </Button>
      </Container>
    );
  }
}

export default Register;
