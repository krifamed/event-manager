import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,AsyncStorage } from 'react-native';
import { Agenda } from 'react-native-calendars';


export default class EventSessions extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      items: {},

    };
}

  render(){
    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        selected= {2018-01-31}
        minDate={selected}
        maxDate={ended}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        markedDates={{
        }}
    />
  );
  }

   loadItems(day){
     const newItem = {};
     // newItem[this.state.info.started]= [];
     this.state.sessions.forEach((session) => {
       if(!newItem[session.from]){
          newItem[session.from]= [];
          newItem[session.from].push(session);
       }
       else
          newItem[session.from].push(session);
     });
     this.setState({
       items: newItem,
     });
   }




  renderItem(item) {
    const { navigate } = this.props.navigation;
    return (
      <TouchableOpacity onPress={ ()=> navigate('Detail',{item})}>
      <View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text><Text>{item.from} {item.start} - {item.to} {item.end}</Text></View>
      </TouchableOpacity>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}




const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});
