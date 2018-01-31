import React from 'react';
import { AsyncStorage, StyleSheet, View, ListView } from 'react-native';
import { Container, Header, Right, Content, Icon, Input, Button, Text, Item, Card, CardItem, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';
// import { getEventOwner } from '../utils/api';

class EventOwner extends React.Component{

  constructor(){
    super();
      const ds = new ListView.DataSource({rowHasChanged: (r1,r2)=>true});
      this.state= {
        events: ds,
      }
  }
  async logOut(){
    Actions.Login();
     await AsyncStorage.removeItem('token');
    console.log('LogOut');
  }

  getEventOwner(){
    console.log('Im here');
    AsyncStorage.getItem('token').then((token) => {
      fetch(' http://56fd4bc8.ngrok.io/api/comments', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + token
        }
      })
      .then((response) => response.json())
      .then((response) => {

        this.setState({
          events: this.state.events.cloneWithRows(response.data),
        })
        // console.log("token :" +token);
        // console.log("now my data: "+ this.state.events);
    })
      .done()
    });
  }

  componentWillMount(){
    this.getEventOwner();
  }

  renderRow(event){
      return(
        <Card>
          <CardItem>
            <Body>
              <Text>
                 { event.content }
              </Text>
            </Body>
          </CardItem>
        </Card>
      );
  }

  render(){
    return(
      <Container>
        <Header style={{backgroundColor: '#fff'}}>
          <Right>
            <Button transparent onPress={this.logOut.bind(this)}>
              <Text>Logout</Text>
            </Button>
          </Right>
        </Header>

          <ListView
            dataSource ={ this.state.events }
            renderRow={ this.renderRow }
          />

      </Container>
    );
  }
}
const styles = StyleSheet.create({
  content: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default EventOwner;
