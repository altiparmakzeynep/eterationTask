import { 
  Text, 
  View,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
  ScrollView
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../header/Header'
import styles from './styles';
import CheckBox from '@react-native-community/checkbox';
import { RadioButton } from 'react-native-paper';
import { setModalVisible, setFilteredData } from '../../actions/homeAction';

export default function FilterModal() {

  const dispatch = useDispatch();
  const {products, modalVisible} = useSelector(state => state.homeReducer)
  const [radioChecked, setRadioChecked] = useState('first');
  const [selectedBrands, setSelectedBrands] = useState([])
  const [selectedModels, setSelectedModels] = useState([])
  const [tempFilteredData, setTempFilteredData] = useState([])
  const [filteredSearchBrandsData, setFilteredSearchBrandsData] = useState([])
  const [filteredSearchModelsData, setFilteredSearchModelsData] = useState([])

  // search functions(exact)
  const searchBrands = (txt) => {
    setFilteredSearchBrandsData(products.filter(item => item.brand?.toLowerCase().includes(txt?.toLowerCase())))
  };

  const searchModels = (txt) => {
    setFilteredSearchModelsData(products.filter(item => item.model?.toLowerCase().includes(txt?.toLowerCase())))
  };

  // list brands in filter modal(exact)
  const brandRenderItem = ({item}) => {
    return(
      <View 
        key={item.brand}
        style={{ marginLeft: 15, alignItems: 'center', flexDirection: "row" }}>
        <CheckBox
          value={selectedBrands.includes(item.brand)}
          onValueChange={() =>handleBrandCheckBoxChange(item.brand)}
        />
        <Text style= {styles.listText}>{item.brand}</Text>
      </View>
    )
  }
  const handleBrandCheckBoxChange = (itemBrand) => {
    if(selectedBrands.includes(itemBrand)){
      setSelectedBrands(selectedBrands.filter(brand => brand !== itemBrand));
    }
    else{
      setSelectedBrands([...selectedBrands, itemBrand]);
    }
  }

  // list models in filter modal
  const modelRenderItem = ({item}) => { 
    return(
     <View 
        key={item.model}
        style={{ marginLeft: 15, alignItems: 'center', flexDirection: "row" }}>
        <CheckBox
          value={selectedModels.includes(item.model)}
          onValueChange={() =>handleModelCheckBoxChange(item.model)}
        />
        <Text style= {styles.listText}>{item.model}</Text>
      </View>
    )
  }
  
  const handleModelCheckBoxChange = (itemModel) => {
    if(selectedModels.includes(itemModel)){
      setSelectedModels(selectedModels.filter(model => model !== itemModel));
    }
    else{
      setSelectedModels([...selectedModels, itemModel]);
    }
  }

  // filter after click primary button
  const primaryFilter = (brands, models, products) => {
      dispatch(setModalVisible(false))
      const tempBrands = products.filter(item => brands.includes(item.brand));
      const tempModels = products.filter(item => models.includes(item.model));
      const tempData = tempBrands.concat(tempModels)
      setTempFilteredData(tempData)
  }

  // filter final data with radio buttons
  useEffect(() => {
    switch(radioChecked){
        case "first":
          let oldToNew = tempFilteredData.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
          dispatch(setFilteredData(oldToNew))
          break;
        case "second":
          let newToOld = tempFilteredData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
          dispatch(setFilteredData(newToOld))
          break;
        case "third":
          let highToLow = tempFilteredData.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
          dispatch(setFilteredData(highToLow))
          break;
        case "fourth":
          let lowToHigh = tempFilteredData.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
          dispatch(setFilteredData(lowToHigh))
          break;
        default:
      }
  }, [tempFilteredData])

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}>
      <ScrollView style={styles.modalView}>
        <Header headerText={"Filter"}/>
        <View style = {styles.sortView}>
          <Text style = {styles.headerText}>Sort by</Text>
          <View style = {styles.radioView}>
            <RadioButton
              color='#2A59FE'
              value="first"
              status={ radioChecked === 'first' ? 'checked' : 'unchecked' }
              onPress={() => setRadioChecked('first')}
            />
            <Text style = {{alignSelf: "center"}}>Old to new</Text>
          </View>
          <View style = {styles.radioView}>
            <RadioButton
              color='#2A59FE'
              value="second"
              status={ radioChecked === 'second' ? 'checked' : 'unchecked' }
              onPress={() => setRadioChecked('second')}
            />
            <Text style = {{alignSelf: "center"}}>New to old</Text>
          </View>
          <View style = {styles.radioView}>
            <RadioButton
              color='#2A59FE'
              value="third"
              status={ radioChecked === 'third' ? 'checked' : 'unchecked' }
              onPress={() => setRadioChecked('third')}
            />
            <Text style = {{alignSelf: "center"}}>Price high to low</Text>
          </View>
          <View style = {styles.radioView}>
            <RadioButton
              color='#2A59FE'
              value="fourth"
              status={ radioChecked === 'fourth' ? 'checked' : 'unchecked' }
              onPress={() => setRadioChecked('fourth')}
            />
            <Text style = {{alignSelf: "center"}}>Price low to high</Text>
          </View>
        </View>
        <View style = {styles.brandView}>
          <Text style = {styles.headerText}>Brand</Text>
          <TextInput 
            onChangeText={text => searchBrands(text)}
            placeholder='Search'
            style = {styles.searchInput}/>
            <FlatList
              data={filteredSearchBrandsData.length > 0 ? filteredSearchBrandsData : products}
              renderItem={brandRenderItem}
            />
        </View>
        <View style = {styles.modelView}>
          <Text style = {styles.headerText}>Model</Text>
          <TextInput 
            onChangeText={text => searchModels(text)}
            placeholder='Search'
            style = {styles.searchInput}/>
          <FlatList
            data={filteredSearchModelsData.length > 0 ? filteredSearchModelsData : products}
            renderItem={modelRenderItem}
          />
        </View>
        <TouchableOpacity 
          onPress={() => primaryFilter(selectedBrands, selectedModels, products)}
          style = {styles.primaryButton}>
          <Text style = {styles.primaryText}>Primary</Text>
        </TouchableOpacity>
      </ScrollView>
    </Modal>
  )
}

