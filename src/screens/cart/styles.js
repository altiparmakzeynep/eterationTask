import { StyleSheet } from 'react-native';
import { PhoneHeight, PhoneWidth } from '../../constants/config';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    listView: {
        flex: 1,
        alignItems: "center"
    },
    productView: {
        marginTop: 10,
        width: PhoneWidth * 0.95,
        height: PhoneHeight * 0.1,
        flexDirection: "row"
    },
    productInfoView: {
        borderWidth: 0,
        height: "100%",
        width: "50%",
        flexDirection: "column",
        justifyContent: "center",
    },
    itemNameText: {
        marginLeft: 15,
        color: "black",
        fontSize: 18
    },
    itemPriceText: {
        marginLeft: 15,
        color: "#2A59FE",
        fontSize: 18
    },
    amountView: {
        height: "100%",
        width: "50%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    removeButton: {
        backgroundColor: "#D8D8E3",
        width: "20%",
        height: "50%",
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4
    },
    amountNo: {
        backgroundColor: "#2A59FE",
        width: "20%",
        height: "55%",
        justifyContent: "center",
        alignItems: "center"
    },
    amountNoText: {
        color: "white",
        fontSize: 18
    },
    addButton: {
        backgroundColor: "#D8D8E3",
        width: "20%",
        height: "50%",
        justifyContent: "center",
        alignItems: "center",
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4
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