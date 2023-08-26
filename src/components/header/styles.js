import { StyleSheet } from 'react-native';
import { PhoneHeight, PhoneWidth } from '../../constants/config';

const styles = StyleSheet.create({
    headerView: {
        height: PhoneHeight * 0.1,
        backgroundColor: "#2A59FE",
        alignItems: "center",
        flexDirection: "row"
    },
    backButton: {
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: PhoneWidth * 0.2
    },
    headerText: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        marginLeft: 20
    }
})
export default styles;