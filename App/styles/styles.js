import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    AllOptionsConteiner: {
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    optionConteiner: {
        backgroundColor: '#006266',
        width: '100%',
        height: '10%',
        alignItems: 'flex-end',
        flexDirection: 'row',
        paddingBottom: 10,
        paddingLeft: 10
    },
    optionText: {
        fontSize: 24,
        color: 'white',
        width: '80%',
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
        fontSize: 20,
        textAlign: "center"
    },
    outcomeSection: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: "center",
        paddingTop: 10,
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
        marginLeft: '5%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        height: '45%',
        width: '90%',
        paddingTop: 50,
        alignItems: 'center',
        justifyContent: 'center',

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
    },
    containerImageNotFound: {
        borderWidth: 1
    },
    notFoundImage: {
        width: "70%",
        borderRadius: 5,
        marginBottom: 5,
        marginLeft: '15%',
        marginTop: "20%"
    },
})

export default styles; 