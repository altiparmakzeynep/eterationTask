import { 
  SafeAreaView, 
  Text, 
  View, 
  Image, 
  TextInput,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import Header from '../../components/header/Header';
import BottomBar from '../../components/bottomBar/BottomBar';
import { fetchProducts, setModalVisible } from '../../actions/homeAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FilterModal from '../../components/modal/FilterModal';

export default function Home() {

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {products, filteredData, myPage, eachPage} = useSelector(state => state.homeReducer)
  const [visibleProducts, setVisibleProducts] = useState(12);
  const [loadingMore, setLoadingMore] = useState(false);
  const [myCart, setMyCart] = useState([]); 
  const [searchText, setSearchText] = useState(""); 
  const [filteredSearchData, setFilteredSearchData] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts(myPage, eachPage));
    getCartData(); // get cart without clear cart
  }, []);

  //update when go back home page
  useEffect(() => {
    getCartData(); 
  }, [myCart]);

  // pagination 
  const handleLoadMore = () => {
    if (!loadingMore) {
      setLoadingMore(true);
      dispatch(fetchProducts(myPage + 1, eachPage));
      setVisibleProducts(myPage + 1, eachPage);
      setLoadingMore(false);
    }
  };

  // get cart
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

  //exact search
  const searchProduct = (txt) => {
    if(filteredSearchData.length != 0) {
      setFilteredSearchData(filteredData.filter(item => item.name?.toLowerCase() == txt?.toLowerCase()))
    } else {
      setFilteredSearchData(products.filter(item => item.name?.toLowerCase() == txt?.toLowerCase()))
    }
  };

  const renderProducts = ({item}) => {
    return(
      <TouchableOpacity 
        onPress={() => navigation.navigate("productDetail", {item})}
        style={styles.productsView}>
        <Image source={{uri: item.image}} style={styles.productImage}/>
        <Text style={styles.priceText}>{item.price} ₺</Text>
        <Text style={styles.brandText}>{item.name}</Text>
        <TouchableOpacity 
          onPress={() => addCart(item)} // Sepete ekleme işlemi
          style={styles.addCartButton}>
          <Text style={{color: "white"}}>Add to Cart</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <FilterModal/>
      <Header headerText={"E-market"}/>
      <View style={styles.searchView}>
        <TextInput 
          onChangeText={text => setSearchText(text) & searchProduct(text)}
          placeholder='Search'
          style={styles.searchInput}>
        </TextInput>
      </View>
      <View style={styles.filterView}>
        <Text style={styles.filterText}>Filters:</Text>
        <TouchableOpacity 
          onPress={() => dispatch(setModalVisible(true))}
          style={styles.filterButton}>
          <Text style={styles.filterText}>
            Select Filter
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.productsContainer}>
        {
          searchText.length > 0 ?
          <FlatList
            numColumns={2}
            data={filteredSearchData}
            renderItem={renderProducts}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.1}
          />
        :
        <FlatList
            numColumns={2}
            data={filteredData.length > 0 ?  filteredData : products}
            renderItem={renderProducts}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.1}
          /> 
        }
      </View>
      <BottomBar cartLength={myCart.length}/>
    </SafeAreaView>
  )
}
