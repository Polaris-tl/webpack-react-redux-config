import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './footer.less'

export default class Footer extends Component{
  render(){
    return(
      <React.Fragment>
        <div className="bottom clearfix">
          <div>
            <div className="left fl">
              <div className="clearfix">
                <img src={require("./images/logo-w.png")} alt="" className="fl" />
                <div className="fl div1">
                  <p className="p1">NIIT重庆互联网学院</p>
                  <p className="p2">CHONGQING INTERNET INSTITUTE</p>
                </div>
              </div>
              <div className="tel">
                <p>招生热线：023-63561996<span>咨询时间：09：00-23：00</span></p>
                <p>Copyright © 2019 NIIT 版权所有 渝ICP备12002243号</p>
              </div>
            </div>
            <div className="mid fl">
              <ul className="clearfix">
                <li><NavLink to="/" exact activeClassName="active">首页</NavLink></li>
                <li><NavLink to="./jianjie"  activeClassName="active">学校简介</NavLink></li>
                <li><NavLink to="./shizi"  activeClassName="active">师资力量</NavLink></li>
                <li><NavLink to="./zhuanye"  activeClassName="active">开设专业</NavLink></li>
                <li><NavLink to="./xinwen"  activeClassName="active">学校新闻</NavLink></li>
                <li><NavLink to="./xueyuan"  activeClassName="active">就业学员</NavLink></li>
                <li><NavLink to="./luxian"  activeClassName="active">来校路线</NavLink></li>
              </ul>
              <p>
                学校地址：重庆两江新区大竹林华山南路16号<span>商业沟通：niit@niit.com</span>
              </p>
            </div>
            <div className="right fr">
              <ul className="clearfix">
                <li>
                  <div className="code"><img src={require("./images/qrcode.png")} alt="" /></div>
                  <img src={require("./images/wx2.png")} alt="" />
                  <p>微信</p>
                </li>
                <li>
                  <div className="code"><img src={require("./images/qrcode.png")} alt="" /></div>
                  <img src={require("./images/qq2.png")} alt="" />
                  <p>QQ</p>
                </li>
                <li>
                  <div className="code"><img src={require("./images/qrcode.png")} alt="" /></div>
                  <img src={require("./images/pho2.png")} alt="" />
                  <p>客服电话</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}