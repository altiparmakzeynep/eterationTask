import { 
    SafeAreaView, 
    Text, 
    View, 
    Image, 
    ScrollView,
    TouchableOpacity
} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import Header from '../../components/header/Header';
import BottomBar from '../../components/bottomBar/BottomBar';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProductDetail({route}) {

  const item = route.params.item;
  const [myCart, setMyCart] = useState([]); //cart data

    useEffect(() => {
        getCartData();
    }, []);

    const getCartData = async () => {
        try {
          const cartData = await AsyncStorage.getItem('cart');
          if (cartData) {
            setMyCart(JSON.parse(cartData));
          }
        } catch (error) {
          console.error('err:', error);
        }
    };

    const addCart = async(item) => {
        try {
          const updatedCart = [...myCart]; // copy cart for adding
          updatedCart.push(item); // add product to cart
          setMyCart(updatedCart); // last cart
          await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
        } catch (error) {
          console.error('Hata:', error);
        }
    };

  return (
    <SafeAreaView style = {styles.container}>
        <Header headerText={item.name} isBack={true}/>
        <View style = {styles.detailView}>
            <Image 
                source={{uri: item.image}}
                style = {styles.productImage}/>
            <Text style = {styles.productNameText}>{item.name}</Text>
            <ScrollView>
                <Text style = {styles.productDescText}>{item.description}</Text>
            </ScrollView>
        </View>
        <View style = {styles.addCartView}>
            <View style = {{width: "45%"}}>
                <Text style = {styles.priceText}>Price: 
                    <Text style = {styles.totalText}> {item.price} ₺</Text>

                </Text>
            </View>
            <TouchableOpacity 
                onPress={() => addCart(item)}
                style = {styles.addCartButton}>
                <Text style = {{color: "white"}}>Add to Cart</Text>
            </TouchableOpacity>
        </View>
        <BottomBar cartLength={myCart.length}/>
    </SafeAreaView>
  )
}

