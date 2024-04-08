import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './app/Sceens/LoginScreens/Login';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './app/Navigations/TabNavigation';

export default function App() {
  return (
    <ClerkProvider publishableKey='pk_test_bW9kZXJuLWZveGhvdW5kLTQzLmNsZXJrLmFjY291bnRzLmRldiQ'>
    <View style={styles.container}>
    
      {/*SignedIn Component */}
      <SignedIn>
        <NavigationContainer>
          <TabNavigation/>
        </NavigationContainer>
      </SignedIn>
      {/*SignedOut */}
      <SignedOut>
        <Login/>
      </SignedOut>
      <StatusBar style="auto" />
    </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
