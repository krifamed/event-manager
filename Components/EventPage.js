import React from 'react';
import { AsyncStorage, StyleSheet } from 'react-native';
import { Container, Header, Right, Content, Icon, Input, Button, Text, Item } from 'native-base';
import { Actions } from 'react-native-router-flux';


class EventPage extends React.Component{

  async logOut(){
    Actions.Login();
    // await AsyncStorage.removeItem('id_token');
    console.log('LogOut');
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
        <Content style= {styles.content}>
          <Text>Search for events</Text>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
  }
});

export default EventPage;
