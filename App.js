import React , {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/reducers';
import FireBase from 'firebase';
import LoginForm from './src/components/screen/LoginForm';

class App extends Component{
  constructor(props) {
   super(props)
  }
 async componentWillMount(){
  const firebaseConfig = {
    apiKey: "AIzaSyAwm8lhjAKP8yVODYFQUbSk9bKmDwJM9Pk",
    authDomain: "employeemanager-442c0.firebaseapp.com",
    databaseURL: "https://employeemanager-442c0.firebaseio.com",
    projectId: "employeemanager-442c0",
    storageBucket: "employeemanager-442c0.appspot.com",
    messagingSenderId: "937534934284",
    appId: "1:937534934284:web:5b364e85fa75374f80cd29"
  };
  FireBase.initializeApp(firebaseConfig);
}

render(){
 return(
   <Provider store={createStore(reducers)}>
     <LoginForm/>
   </Provider>
 ) ;

}}

export default App;