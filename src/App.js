import React,{Component} from 'react'
import {Route,Switch} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Index from './components/Index/Index'
import Jianjie from './components/Jianjie/Jianjie'
import Shizi from './components/Shizi/Shizi'

export default class App extends Component{
  render(){
    return(
      <React.Fragment>
        <Header />
        <Switch>
            <Route path="/" exact component={Index}/>
            <Route path="/jianjie" exact component={Jianjie}/>
            <Route path="/shizi" exact component={Shizi}/>
        </Switch>
        <Footer />
      </React.Fragment>
    )
  }
}