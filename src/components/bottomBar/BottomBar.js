import { 
  FlatList, 
  Image, 
  TouchableOpacity, 
  View ,
  Text
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import styles from './styles';
import icons from '../../constants/icons';

export default function BottomBar({cartLength}) {

  const navigation = useNavigation();

  const buttons = [
    {id: 1, photoLink: icons.home, navigate: "home"},
    {id: 2, photoLink: icons.cart, navigate: "cart"},
    {id: 3, photoLink: icons.fav, navigate: "favorites"},
    {id: 4, photoLink: icons.profile, navigate: "profile"},
  ]
  
  const buttonsRenderItem = ({item}) => {
    return(
      <TouchableOpacity 
        testID={`button-${item.id}`}
        onPress={() => navigation.navigate(item.navigate)}
        style = {styles.bottomButtonsView}>
        <Image style = {{width: 40, height: 40}} source={item.photoLink}/>
        {
          item.id == 2 &&
          <View style = {styles.badgeView}>
            <Text style = {styles.cartLengthText}>{cartLength}</Text>
          </View>
        }
      </TouchableOpacity>
    )
  }

  return (
    <View style = {styles.bottomView}>
      <FlatList
        horizontal
        keyExtractor = {item => item.id}
        data={buttons}
        renderItem={buttonsRenderItem}
      />
    </View>
  )
}


