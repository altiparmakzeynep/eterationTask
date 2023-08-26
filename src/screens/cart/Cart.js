import { 
    SafeAreaView, 
    Text, 
    View,
    TouchableOpacity,
    FlatList,
    Image
} from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import BottomBar from '../../components/bottomBar/BottomBar';
import icons from '../../constants/icons';

export default function Cart() {

    const [myCart, setMyCart] = useState([]); //cart data
    const [totalAmount, setTotalAmount] = useState([]); 

    useEffect(() => {
        getCartData();
        calculateTotalAmount(uniqueCart)
    }, []);

    useEffect(() => {
       calculateTotalAmount(uniqueCart)
    }, [myCart]);


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

    const removeCart = async (item) => {
        try {
            const updatedCart = [...myCart]; // copy
            const itemIndex = updatedCart.findIndex(cartItem => cartItem.id === item.id); // index of the item to remove
            if (itemIndex !== -1) {
                updatedCart.splice(itemIndex, 1); // remove the item from the cart array
                setMyCart(updatedCart);
                await AsyncStorage.setItem('cart', JSON.stringify(updatedCart)); // update
            }
        } catch (error) {
            console.error('Hata:', error);
        }
    };
    

    const createUniqueArrayWithCount = (arr, prop) => {
        const uniqueArray = [];
        const itemCounts = {};
    
        for (const item of arr) {
            const key = item[prop];
            
            if (!itemCounts[key]) {
                itemCounts[key] = 1;
                uniqueArray.push(item);
            } else {
                itemCounts[key]++;
            }
        }
    
        for (const item of uniqueArray) {
            item.repeat = itemCounts[item[prop]];
        }
        return uniqueArray;
    };  

    const uniqueCart =  createUniqueArrayWithCount(myCart, 'name');

   // calculate total amount
   const calculateTotalAmount = (item) => {
    let total = 0;
    item.map((item) => {
        total += item.repeat * parseInt(item.price)
        setTotalAmount(total)
    })
   };
   
    const cartRenderItem = ({item}) => {
        return(
        <View style = {styles.productView}>
            <View style = {styles.productInfoView}>
                <Text style = {styles.itemNameText}>{item.name}</Text>
                <Text style = {styles.itemPriceText}>{item.price} ₺</Text>
            </View>
            <View style = {styles.amountView}>
                <TouchableOpacity 
                    onPress={() => removeCart(item)}
                    style = {styles.removeButton}>
                    <Image 
                        style = {{width: 15, height: 15}}
                        source={icons.minus}/>
                </TouchableOpacity>
                <View style = {styles.amountNo}>
                    <Text style = {styles.amountNoText}>{item.repeat}</Text>
                </View>
                <TouchableOpacity 
                    onPress={() => addCart(item)}
                    style = {styles.addButton}>
                    <Image 
                        style = {{width: 15, height: 15}}
                        source={icons.plus}/>
                </TouchableOpacity>
            </View>
        </View>
        )
    }
  return (
    <SafeAreaView style = {styles.container}>
        <Header headerText={"My Cart"}/>
        <View style = {styles.listView}>
            <FlatList
                data={uniqueCart}
                renderItem={cartRenderItem}
                keyExtractor={(item) => item}
            />
        </View>
        <View style = {styles.addCartView}>
            <View style = {{width: "45%"}}>
                <Text style = {styles.priceText}>Price: 
                    <Text style = {styles.totalText}> {totalAmount} ₺</Text>
                </Text>
            </View>
            <TouchableOpacity style = {styles.addCartButton}>
                <Text style = {{color: "white"}}>Complete</Text>
            </TouchableOpacity>
        </View>
        <BottomBar cartLength={myCart.length}/>
    </SafeAreaView>
  )
}

