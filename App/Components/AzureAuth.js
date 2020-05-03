//import the component into your project
//B@O9=nWS75Aqbu3vXsvgBsPLD=QQQIu.
import {AzureInstance, AzureLoginView} from 'react-native-azure-ad-2'
import React from 'react'; 

const CLIENT_ID = '8a0f23ff-6ee0-4976-abaf-d8be128aa6cc'
//create a component for Azure Authentication

var credentials = {
	client_id: CLIENT_ID,
	client_secret: 'B@O9=nWS75Aqbu3vXsvgBsPLD=QQQIu.',
	scope: 'User.ReadBasic.All Mail.Read offline_access' //access scope for login - see http://bit.ly/2gtQe9W for more info
 };

export default class AzureAuth extends React.Component {
	constructor(props){
		super(props);
    
    //instantiate azure objects with your azure credentials
		this.azureInstance = new AzureInstance(credentials);

    //bind the login success function
		this._onLoginSuccess = this._onLoginSuccess.bind(this);
	}

  // function to be called after login is successful
	_onLoginSuccess(){
		this.azureInstance.getUserInfo().then(result => {
			console.log(result); 
			this.props.navigation.navigate('Options', {user:result});
		}).catch(err => {
			console.log(err);
		})
	}
    
  // pass the azureInstance and Login Success function to the AzureLoginView that will display
  // the authentication screen
    render() {
        return (
            <AzureLoginView
            	azureInstance={this.azureInstance}
            	loadingMessage="Requesting access token"
            	onSuccess={() => this._onLoginSuccess()}/>
        );
    }
}
