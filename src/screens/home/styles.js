import { StyleSheet } from 'react-native';
import { PhoneHeight, PhoneWidth } from '../../constants/config';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    searchView: {
        width: PhoneWidth,
        height: PhoneHeight * 0.075,
        justifyContent: "center",
        alignItems: "center",
    },
    searchInput: {
        flexDirection: "row",
        borderWidth: 0,
        height: "90%",
        width: PhoneWidth * 0.95,
        fontSize: 18,
        borderRadius: 8,
        backgroundColor: "#FAFAFB"
    },
    filterView: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        width: PhoneWidth,
        height: PhoneHeight * 0.075,
        backgroundColor: "white"
    },
    filterButton: {
        width: PhoneWidth * 0.5,
        height: "80%",
        marginRight: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#D9D9D9"
    },
    filterText: {
        color: "black",
        fontSize: 20,
        marginHorizontal: 20
    },
    productsContainer: {
        borderWidth: 0,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    productsView: {
        borderWidth: 0.5,
        marginTop: 10,
        height: PhoneHeight * 0.35,
        width: PhoneWidth * 0.45,
        marginHorizontal: 10,
        // alignItems: "center"
    },
    productImage: {
        width: "90%",
        height: "55%",
        marginTop: 10,
        alignSelf: "center"
    },
    priceText: {
        color: "#2A59FE",
        marginLeft: 10,
        marginVertical: 5,
        fontSize: 16
    },
    brandText: {
        color: "black",
        marginLeft: 10,
        fontSize: 16
    },
    addCartButton: {
        borderWidth: 0,
        backgroundColor: "#2A59FE",
        width: "75%",
        height: "15%",
        alignSelf: "center",
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 7
    }
})
export default styles;