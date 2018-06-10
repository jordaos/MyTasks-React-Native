import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import { Icon, Button, Container, Header, Content, Left } from 'native-base';
import CustomHeader from '../components/CustomHeader';

class HomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Homes'
  };

  render() {
    return (
      <Container>
        <CustomHeader title="Home" drawerOpen={() => this.props.navigation.openDrawer()} />
        <Content
          contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
          <Button
            onPress={() => this.props.navigation.navigate('Settings')} full>
            <Text style={{ color: 'white' }}>Go To Settings Screen</Text>
          </Button>
        </Content>
      </Container> 
    )
  }
}

export default HomeScreen;