import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView} from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import HouseList from "../components/houseList";
import { TextInput } from 'react-native-gesture-handler';

let customFonts  = {
  'FuturaH': require('../assets/fonts/futurah.ttf'),
  'FuturaL': require('../assets/fonts/futural.ttf'),
};

export default class Why extends React.Component  {
  state = {
    fontsLoaded: false,
    playing: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();



  }

 

  


  render(){
    if (this.state.fontsLoaded) {
    return (
    <View style={styles.container}>

     
   
          <View>
            <Text style={{position:'relative',fontSize:30,marginTop:'10%',color:'#364f6b', fontFamily:'FuturaH', width:'95%', marginLeft:'5%'}}>Why is it cheaper?</Text>
            <Image source={require('../assets/math.png')} style={styles.house}></Image>
            <Text style={{position:'relative',fontSize:20,marginTop:'1%',color:'#364f6b', fontFamily:'FuturaL', width:'95%', marginLeft:'5%'}}>Our algorithm takes into Lorem ipsum dolor sit amet, consectetur adipiscing 
elit, sed do eiusmod tempor incididunt ut labore et 
dolore magna aliqua. Ut enim ad minim veniam </Text>
            
            <Text style={{position:'relative',fontSize:20,marginTop:'5%',color:'#364f6b', fontFamily:'FuturaH', width:'95%', marginLeft:'5%'}}>Median Contract Rent</Text>
            <Text style={{position:'relative',fontSize:35,marginTop:'5%',textAlign:'center', color:'#364f6b', fontFamily:'FuturaH'}} >$1200</Text>
            <Text style={{position:'relative',fontSize:20,marginTop:'2.5%',color:'#364f6b', fontFamily:'FuturaH', width:'95%', marginLeft:'5%'}}>Mortgage Cost</Text>
            <Text style={{position:'relative',fontSize:35,marginTop:'5%',textAlign:'center', color:'#364f6b', fontFamily:'FuturaH'}} >$1400</Text>
          </View>

          <Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#FFF', fontFamily:'FuturaH', marginTop:'2.5%', backgroundColor:'#00487C', padding:'5%', width:'70%', borderRadius:10, alignSelf:'center', elevation:1}} onPress={()=>this.props.navigation.navigate('Home')}>BACK</Text>
    
 
      
      
    </View>
    );
    }
    else {
    return <AppLoading />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    position:'relative',
    backgroundColor:'#f5f5f5'
  },
  left:{
    height:'7%',
    width:'7%',
    top:'2.5%',
    resizeMode:'contain',
    left:'5%',
    position:'absolute',
  },
  right:{
    height:'7%',
    width:'7%',
    top:'2.5%',
    resizeMode:'contain',
    right:'5%',
    position:'absolute'
  },
  middle:{
    height:'60%',
    width:'60%',
    marginTop:'5%',
    resizeMode:'contain',
    zIndex:3,
    alignSelf:'center',
  },
  house:{
    height:'40%',
    width:'70%',
    marginTop:'7.5%',
    resizeMode:'contain',
    zIndex:3,
    alignSelf:'center',
    borderRadius:10,
  },
 
  playing:{
      width:'70%',
      height:'35%',
      elevation:1,
      backgroundColor:'#FFF',
      alignSelf:'center',
      marginTop:'15%',
      borderRadius:20
  }
  
});