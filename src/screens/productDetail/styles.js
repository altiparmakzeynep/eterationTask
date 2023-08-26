import { StyleSheet } from 'react-native';
import { PhoneHeight, PhoneWidth } from '../../constants/config';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    detailView: {
        flex: 1,
        alignItems: "center",
    },
    productImage: {
        width: PhoneWidth * 0.95,
        height: PhoneHeight * 0.3,
        borderWidth: 1,
        marginTop: 10
    },
    productNameText: {
        color: "black",
        width: PhoneWidth * 0.95,
        fontWeight: "bold",
        fontSize: 22,
        marginVertical: 20
    },
    productDescText: {
        color: "black",
        width: PhoneWidth * 0.95,
        fontSize: 18
    },
    addCartView: {
        borderWidth: 0,
        width: PhoneWidth,
        height: PhoneHeight * 0.1,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center"
    },
    priceText: {
        color: "blue",
        fontSize: 20,
        marginLeft: 10,
    },
    totalText: {
        color: "black",
        fontSize: 20,
        marginLeft: 20
    },
    addCartButton: {
        marginRight: 10,
        backgroundColor: "#2A59FE",
        width: "50%",
        height: "60%",
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
    }
})
export default styles;