import React,{Component} from 'react'
import './jianjie.less'

export default class Index extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <React.Fragment>
        <div className="banner">
          <img src={require("./images/banner.jpg")} alt="" />
        </div>
        <div className="section section1">
          <div className="title">
            <p className="p1"><span>关于NIIT</span></p>
            <p>引领世界的IT精英培养互联网学校</p>
          </div>
          <div className="content">
            <div className="part part1">
              <div className="sub-title clearfix">
                <p className="fl">01</p>
                <div className="fl">
                  <p className="p1">学院介绍</p>
                  <p className="p2">专注高端IT教育</p>
                </div>
              </div>
              <div className="clearfix box">
                <div className="intro fl">
                  <p>NIIT重庆互联网学院隶属于重庆安道教育咨询有限公司，总建筑面积约16万平方米，按照智慧校园、未来生活的理念建设，能同时提供10000名学员的综合学习和2000名学员的住宿及生活配套服务。</p>
                  <p>
                    997年，NIIT进入中国，凭借全球统一的教学模式，高质量的管理体系和与时俱进的课程内容，NIIT迅速成为中国IT职业教育领域的领先者。今天，NIIT已在中国25个省建立了超过183个授权中心，并与各大软件园、IT公司和大学建立了广泛的合作关系，每年都为中国培养大量的专业人才。
                  </p>
                </div>
                <div className="video-box fl">
                  <video className="my-video" controls="controls" id="video" src={require("./images/intro.mp4")} width="100%"></video>
                  <div className="fake-layer">
                    <img className="snapshot" src={require("./images/snapshot.png")} />
                    <img className="play-button" src={require("./images/playButton.png")} />
                    <div className="text"><span className="video-title">■ NIIT重庆互联网学院简介 </span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="part part2">
              <div className="sub-title clearfix">
                <p className="fl">02</p>
                <div className="fl">
                  <p className="p1">合作单位</p>
                  <p className="p2">专注高端IT教育</p>
                </div>
              </div>
              <div className="box clearfix">
                <div className="left fl">
                  <ul>
                    <li><img src={require("./images/qddx.jpg")} alt="" />
                      <div className="hide">
                        <p>青岛大学</p>
                      </div>
                    </li>
                    <li><img src={require("./images/xndx.jpg")} alt="" />
                      <div className="hide">
                        <p>西南大学</p>
                      </div>
                    </li>
                    <li><img src={require("./images/njyddx.jpg")} alt="" />
                      <div className="hide">
                        <p>南京邮电大学</p>
                      </div>
                    </li>
                    <li><img src={require("./images/jskjdx.jpg")} alt="" />
                      <div className="hide">
                        <p>江苏科技大学</p>
                      </div>
                    </li>
                    <li><img src={require("./images/cqsfdx.jpg")} alt="" />
                      <div className="hide">
                        <p>重庆师范大学</p>
                      </div>
                    </li>
                    <li><img src={require("./images/gzsfdx.jpg")} alt="" />
                      <div className="hide">
                        <p>贵州师范大学</p>
                      </div>
                    </li>
                    <li><img src={require("./images/jslgxy.jpg")} alt="" />
                      <div className="hide">
                        <p>江苏理工学院</p>
                      </div>
                    </li>
                    <li><img src={require("./images/lxdx.jpg")} alt="" />
                      <div className="hide">
                        <p>宁夏大学</p>
                      </div>
                    </li>
                    <li><img src={require("./images/gzcjdx.jpg")} alt="" />
                      <div className="hide">
                        <p>贵州财经大学</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="right fl">
                  <p className="tt"><span>我们已经在中国这些地方建立政府合作关系</span></p>
                  <img src={require("./images/map.png")} alt="" />
                  <p className="city">重庆、贵州、苏州、常州、无锡、张家港、银川、海口、青岛...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
