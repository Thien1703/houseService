import { StyleSheet, Text , View ,Image, TouchableOpacity} from 'react-native';
import * as WebBrowser from "expo-web-browser";
import React from 'react'
import Colors from '../../Utils/Colors';
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from '../../hooks/useWarmUpBrowser';

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View style={{flex: 1,alignItems:'center', justifyContent: 'space-between'}}>
      <Image source={require('./../../../assets/image/login.png')}
        style={styles.loginImage}
    />

      <View style={styles.subContainer}>
        <Text style={{fontSize:25, color:'white',textAlign:'center'}}>
            Let's find <Text style={{fontWeight:'bold'}}>
              Professional Cleaning and repair</Text> service near you
        </Text>

        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={{fontSize:17,textAlign:'center',color:Colors.PRIMARY}}>
            Let's Get Started</Text>
         </TouchableOpacity>
      </View>
      
    </View>
    
  )
}
const styles = StyleSheet.create({
  loginImage:{
    width: '70%',
    height: '60%',
    marginTop: 50,
    borderWidth:4,
    borderRadius:15,
    borderColor:Colors.BLACK,
    
  },
  subContainer:{
    width:'100%',
    marginTop:-20,
    height:'40%',
    backgroundColor:Colors.PRIMARY,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    padding:10,
    justifyContent: 'space-around'
  },
  button:{
    backgroundColor:'white',
    marginTop:10,
    padding:10,
    borderRadius:99,
    marginBottom: 60,
    
  }
})

