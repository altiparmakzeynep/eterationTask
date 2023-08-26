import { StyleSheet } from 'react-native';
import { PhoneHeight, PhoneWidth } from '../../constants/config';

const styles = StyleSheet.create({
    bottomView: {
        width: PhoneWidth,
        height: PhoneHeight * 0.1,
    },
    bottomButtonsView: {
        width: (PhoneWidth / 4),
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    badgeView: {
        //style for
        width: 20, 
        height: 20, 
        borderRadius: 40, 
        //circle view
        backgroundColor: "#bf3232", 
        position: "absolute", 
        alignItems: "center",
        justifyContent: "center"
    },
    cartLengthText: {
        color: "white",
        position: "absolute", 
        fontSize: 14,
        fontWeight: "bold",
    }
})
export default styles;