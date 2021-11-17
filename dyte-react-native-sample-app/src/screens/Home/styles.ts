import {Dimensions, StyleSheet} from 'react-native'
import colors from '@src/styles/colors'

export default StyleSheet.create({
    parentView: {
        alignItems: 'center', 
        height: Dimensions.get('window').height, 
        justifyContent: 'center'
    }, 
    button: {
        marginVertical: 10,

    }
})