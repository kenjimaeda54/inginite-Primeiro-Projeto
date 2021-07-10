import React,{ Fragment}  from "react";
import { Home } from "./src/screen/home";
import { StatusBar } from "react-native"; 

 const App = () => (
   <Fragment>
     <StatusBar  barStyle="light-content" />
     <Home/>
  </Fragment>
)
export default App;