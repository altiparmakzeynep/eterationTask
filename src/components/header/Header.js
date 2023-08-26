import { 
  Text,
  View, 
  Image, 
  TouchableOpacity 
} from 'react-native';
import React from 'react';
import styles from './styles';
import icons from '../../constants/icons';
import { useNavigation } from '@react-navigation/native';

export default function Header({headerText, isBack}) {
  const navigation = useNavigation();
  return (
    <View style = {styles.headerView}>
      {
        isBack &&
        (
        <TouchableOpacity 
          testID='back-button'
          onPress={() => navigation?.goBack()}
          style = {styles.backButton}>
          <Image source={icons.back} style = {{width: 30, height: 30}}/>
        </TouchableOpacity> 
        )
      }
      <Text style = {styles.headerText}>{headerText}</Text>
    </View>
  )
}

