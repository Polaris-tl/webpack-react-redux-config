import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './header.less'

export default class Header extends Component{
  render(){
    return(
      <React.Fragment>
        <div className="top">
          <img src={require("./images/top.png")} alt="" />
        </div>
        <div className="nav">
          <div className="left fl">
            <img src={require("./images/logo.png")} alt="" />
            <p className="p1">
              <span>重庆互联网学院</span>
              <span>CHONGQING INTERNET INSTITUTE</span>
            </p>
            <p className="p2">
              <span>38年</span>
              <span>成立自1981年</span>
            </p>
          </div>
          <div className="right fr">
            <ul className="clearfix">
              <li><NavLink to="/" exact activeClassName="active">首页</NavLink></li>
              <li><NavLink to="./jianjie" activeClassName="active">学校简介</NavLink></li>
              <li><NavLink to="./shizi" activeClassName="active">师资力量</NavLink></li>
              <li><NavLink to="./zhuanye" activeClassName="active">开设专业</NavLink></li>
              <li><NavLink to="./xinwen" activeClassName="active">学校新闻</NavLink></li>
              <li><NavLink to="./xueyuan" activeClassName="active">就业学员</NavLink></li>
              <li><NavLink to="./luxian" activeClassName="active">来校路线</NavLink></li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    )
  }
}