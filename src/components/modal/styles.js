import { StyleSheet } from 'react-native';
import { PhoneHeight, PhoneWidth } from '../../constants/config';

const styles = StyleSheet.create({
    modalView: {
        borderWidth: 1,
        backgroundColor: "white",
        width: PhoneWidth,
        height: PhoneHeight,
        flexDirection: "column",
    },
    headerText: {
        color: "black",
        fontSize: 20,
        margin: 15
    },
    radioView: {
        flexDirection: "row", 
        marginLeft: 15
    },
    searchInput: {
        width: PhoneWidth * 0.95,
        height: "25%",
        backgroundColor: "#DADAE0",
        alignSelf: "center",
        borderRadius: 4,
        marginBottom: 10
    },
    listText: {
        color: "black",
        fontSize: 20
    },
    sortView: {
        width: PhoneWidth,
        height: (PhoneHeight * 0.75)/3,
    },
    brandView: {
        width: PhoneWidth,
        height: (PhoneHeight * 0.75)/3,
    },
    modelView:{
        width: PhoneWidth,
        height: (PhoneHeight * 0.75)/3,
    },  
    primaryButton: {
        width: PhoneWidth * 0.95,
        height: PhoneHeight * 0.075,
        alignSelf: "center",
        backgroundColor: "#2A59FE",
        alignItems: "center",
        justifyContent: "center"
    },
    primaryText: {
        color: "white",
        fontSize: 22
    }
})
export default styles;