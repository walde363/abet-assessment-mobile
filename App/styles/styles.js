import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    AllOptionsConteiner: {
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    optionConteiner: {
        backgroundColor: 'green',
        width: '111%',
        height: '15%',
        justifyContent: 'center',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 20
    },
    optionText: {
        fontSize: 30,
        color: 'white'
    },
    logoContiainer:
    {
        height: '45%',
        width: '95%',
        alignItems: 'center',
        paddingTop: 50,
        backgroundColor: 'green',
        borderRadius: 50
    },
    assesmentConteiner:
    {
        margin: 15,
        borderBottomWidth: 1,
        width: 390,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 10
    },
    assesmentText:
    {
        fontWeight: 'bold',
        fontSize: 20
    },
    loginConteiner:
    {
        backgroundColor: 'green',
        width: '90%',
        height: '50%',
        margin: 110,
        alignItems: 'center',
        justifyContent: 'center',
    },
    LoginTextInput:
    {
        height: '15%',
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 10,
        margin: 10
    },
    welcomeBackgroundStyle:
    {
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    },
    welcomeConteiner:
    {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        height: '45%',
        width: '100%',
        paddingTop: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginButtonContainer:
    {
        backgroundColor: 'green',
        width: 300,
        height: '50%',
        alignSelf: 'center',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }

})

export default styles; 