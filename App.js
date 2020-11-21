/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Sound from 'react-native-sound';


class App extends React.Component{

  
  render(){
      return(
        <View>
          <View style={{marginTop:100}}>
            <TouchableOpacity style={{backgroundColor:'grey',justifyContent:'center'}} onPress={()=>this.PlayLocalSoundFile()} >
              <Text style={{textAlign:'center',fontSize:20,color:'white',padding:10}}>Play sound from local file</Text>
            </TouchableOpacity>
          </View>
        <View style={{marginTop:100}}>
          <TouchableOpacity style={{backgroundColor:'grey',justifyContent:'center'}} onPress={()=>this.PlayRemoteURLSoundFile()}>
            <Text style={{textAlign:'center',fontSize:20,color:'white',padding:10}}>Play sound from remote url</Text>
          </TouchableOpacity>
        </View>
        </View>
      )
    }

    PlayLocalSoundFile = () =>{
      Sound.setCategory('Playback');
      console.log('Play local sound');

      var mySound = new Sound('caterpillar.wav',Sound.MAIN_BUNDLE,(error)=>{
        if(error){
            console.log('Error loading sound: ' + error);
            return;
        } else {
          mySound.play((success)=>{
            if (success){
              console.log('Sound playing')
            } else{
              console.log('Issue playing file');
            }
          })
        }
        });
        
        mySound.setVolume(0.9);
        mySound.release();
    }

    PlayRemoteURLSoundFile = () =>{
      Sound.setCategory('Playback');
      console.log("Play remote sound");

      var myRemoteSound = new Sound('https://www.soundjay.com/ambient/sounds/boarding-accouncement-1.mp3',null,(error)=>{
        
      if(error){
        console.log(error);
        return;
      } else {
        myRemoteSound.play((success)=>{
          if(success){
            console.log('Sound playing')
          } else{
            console.log('Issue playing file');
          }
        })
      }
      });
      
      myRemoteSound.setVolume(0.9);
      myRemoteSound.release();
    }
}


  
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
