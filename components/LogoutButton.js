import { removeToken } from './AuthUtils';

const handleLogout = async () => {
  // Clear token from AsyncStorage and navigate to login screen
  try {
    await removeToken();
    navigation.navigate('Login');
  } catch (error) {
    console.error('Error removing token:', error);
  }
};

export default function(){
    
}