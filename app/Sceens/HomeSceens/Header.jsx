import { View, Text , Image, StyleSheet, TextInput} from 'react-native'
import React from 'react'
import {useUser} from '@clerk/clerk-expo'
import Colors from '../../Utils/Colors';
import { FontAwesome } from '@expo/vector-icons';

export default function Header() {
    const {user,isLoading} = useUser();
  return user&&(
    <View style={styles.container}>
        {/* profile section */}
        <View style={styles.profileMainContainer}>
        <View style={styles.profileContainer}>
                <Image source={{uri:user?.imageUrl}}
                style={styles.userImage} />
            <View>
                <Text style={{color:Colors.WHITE}}>Xin Chào</Text>
                <Text style={{color:Colors.WHITE,fontSize:20,}}>{user?.fullName}</Text>
            </View>
        </View>
        <FontAwesome name="bookmark-o" size={24} color="white" />
        </View>
        {/* seachBar section */}
        <View>
            <TextInput placeholder='Tìm kiếm...'
            style={styles.TextInput}/>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        padding:20,
        paddingTop:40,
        backgroundColor:Colors.PRIMARY,
        borderBottomRightRadius:25,
        borderBottomLeftRadius:25,
    },
    profileMainContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"space-between",
    },
    profileContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:10,
    },
    userImage:{
        width:50,
        height:50,
        borderRadius:99,
    },
    TextInput:{

    }
})