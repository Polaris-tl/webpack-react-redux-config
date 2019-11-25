import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './index.less'

export default class Index extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <React.Fragment>
        <div className="banner">
          <img src={require("./images/banner.jpg")} alt=""/>
        </div>
        <div className="cool">
          <ul className="clearfix">
            <li className="fl">
              <p><span id="count1">38</span><span>年</span></p>
              <p><span>成立自1981年</span></p>
            </li>
            <li className="fl">
              <p><span id="count2">33</span><span>国家</span></p>
              <p><span>遍及33个国家</span></p>
            </li>
            <li className="fl">
              <p><span id="count3">3800</span><span>中心</span></p>
              <p><span>3800所直属分校</span></p>
            </li>
            <li className="fl">
              <p><span id="count4">500</span>万<span>+学员</span></p>
              <p><span>毕业学员500万+人才</span></p>
            </li>
          </ul>
        </div>
        <div className="section section1">
          <div className="title">
            <p>学院简介</p>
            <span>为莘莘学子改变命运而讲课，为千万学生少走弯路而著书！</span>
          </div>
          <div className="content clearfix">
            <div className="fl box1">
              <div className="video-box">
                <video className="my-video" controls="controls" id="video" src={require("./images/intro.mp4")} width="100%"></video>
                <div className="fake-layer">
                  <img className="snapshot" src={require("./images/snapshot.png")} />
                  <img className="play-button" src={require("./images/playButton.png")} />
                  <div className="text"><span className="video-title">■ NIIT重庆互联网学院简介 </span></div>
                </div>
              </div>
            </div>
            <div className="fr box2">
              <div className="intro-title">
                <p>NIIT重庆互联网学院</p>
                <p>CHONGQING INTERNET INSTITUTE</p>
                <a href="./jianjie.html">更多>></a>
              </div>
              <div className="intro-content">
                <p>NIIT重庆互联网学院隶属于重庆安道教育咨询有限公司，总建筑面积约16万平方米，按照智慧校园、未来生活的理念建设，能同时提供10000名学员的综合学习和2000名学员的住宿及生活配套服务。</p>
                <p>
                  1997年，NIIT进入中国，凭借全球统一的教学模式，高质量的管理体系和与时俱进的课程内容，NIIT迅速成为中国IT职业教育领域的领先者。今天，NIIT已在中国25个省建立了超过183个授权中心，并与各大软件园、IT公司和大学建立了广泛的合作关系，每年都为中国培养大量的专业人才。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section section2">
          <div className="title">
            <p>100%对口就业培养名额</p>
            <span>把高薪就业当做使命，把学生成才作为目标</span>
          </div>
          <div className="content clearfix">
            <div className="left fl">
              <ul className="emply-head clearfix">
                <li>姓名</li>
                <li>学制</li>
                <li>学历</li>
                <li style={{width: "20%"}}>报读专业</li>
                <li style={{width: "25%"}}>定向企业</li>
                <li style={{width: "13%"}}>已报/名额</li>
                <li style={{width: "18%"}}>学历服务</li>
              </ul>
              <div className="emplyoee">
                <ul className="emply-body clearfix" style={{marginTop:  0 + "px"}}>
                  <li>
                    <span>孙*</span>
                    <span>3年制</span>
                    <span>初二</span>
                    <span style={{width: "20%"}}>嵌入式开发工程师</span>
                    <span style={{width: "25%"}}>新*讯信息科技有限公司</span>
                    <span style={{width: "13%"}}>95/103</span>
                    <span style={{width: "18%"}}>中专/大专/本科</span>
                  </li>
                  <li style={{backgroundColor: "#ececec"}}>
                    <span>张*磊</span>
                    <span>3年制</span>
                    <span>初三</span>
                    <span style={{width: "20%"}}>Java软件开发</span>
                    <span style={{width: "25%"}}>重庆感*科技有限公司</span>
                    <span style={{width: "13%"}}>26/30</span>
                    <span style={{width: "18%"}}>中专/大专/本科</span>
                  </li>
                  <li>
                    <span>许*硕</span>
                    <span>3年制</span>
                    <span>初三</span>
                    <span style={{width: "20%"}}>动漫游戏原画师</span>
                    <span style={{width: "25%"}}>小*科技有限公司</span>
                    <span style={{width: "13%"}}>44/60</span>
                    <span style={{width: "18%"}}>中专/大专/本科</span>
                  </li>
                  <li style={{backgroundColor: "#ececec"}}>
                    <span>曾*</span>
                    <span>3年制</span>
                    <span>初三</span>
                    <span style={{width: "20%"}}>Java软件开发工程师</span>
                    <span style={{width: "25%"}}>华*科技</span>
                    <span style={{width: "13%"}}>26/30</span>
                    <span style={{width: "18%"}}>中专/大专/本科</span>
                  </li>
                  <li>
                    <span>汤*宇</span>
                    <span>3年制</span>
                    <span>高二</span>
                    <span style={{width: "20%"}}>Linux系统运维工程师</span>
                    <span style={{width: "25%"}}>物**云信息科技有限公司</span>
                    <span style={{width: "13%"}}>52/60</span>
                    <span style={{width: "18%"}}>中专/大专/本科</span>
                  </li>
                  <li style={{backgroundColor: "#ececec"}}>
                    <span>关*超</span>
                    <span>3年制</span>
                    <span>初三</span>
                    <span style={{width: "20%"}}>Python人工智能研发</span>
                    <span style={{width: "25%"}}>重庆影*科技有限公司</span>
                    <span style={{width: "13%"}}>20/30</span>
                    <span style={{width: "18%"}}>中专/大专/本科</span>
                  </li>
                  <li>
                    <span>黎*善</span>
                    <span>3年制</span>
                    <span>高一</span>
                    <span style={{width: "20%"}}>嵌入式开发工程师</span>
                    <span style={{width: "25%"}}>成都生*科技有限公司</span>
                    <span style={{width: "13%"}}>33/40</span>
                    <span style={{width: "18%"}}>中专/大专/本科</span>
                  </li>
                  <li style={{backgroundColor: "#ececec"}}>
                    <span>吕*伟</span>
                    <span>3年制</span>
                    <span>高一</span>
                    <span style={{width: "20%"}}>软件开发</span>
                    <span style={{width: "25%"}}>美*康*生物科技有限公司</span>
                    <span style={{width: "13%"}}>39/403</span>
                    <span style={{width: "18%"}}>中专/大专/本科</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mid fl">
              <div className="head">
                <p>学员就业薪资表</p>
                <p className="more"><Link to="./xueyuan">查看更多</Link></p>
              </div>
              <div className="data" id="data">
                <ul>
                  <li className="clearfix">
                    <p>陈*力</p>
                    <p>嵌入式开发工程师</p>
                    <p>9000元</p>
                  </li>
                  <li className="clearfix">
                    <p>余天*</p>
                    <p>VR建模设计师</p>
                    <p>8000元</p>
                  </li>
                  <li className="clearfix">
                    <p>杨*平</p>
                    <p>Linux系统运维工程师</p>
                    <p>7500元</p>
                  </li>
                  <li className="clearfix">
                    <p>易*</p>
                    <p>Web前端工程师</p>
                    <p>8000元</p>
                  </li>
                  <li className="clearfix">
                    <p>刘*生</p>
                    <p>java软件开发工程师</p>
                    <p>12000元</p>
                  </li>
                  <li className="clearfix">
                    <p>行**</p>
                    <p>UI设计师</p>
                    <p>7000元</p>
                  </li>
                  <li className="clearfix">
                    <p>宫*旭</p>
                    <p>Web前端工程师</p>
                    <p>9000元</p>
                  </li>
                  <li className="clearfix">
                    <p>童飞*</p>
                    <p>java软件开发工程师</p>
                    <p>9000元</p>
                  </li>
                  <li className="clearfix">
                    <p>棋*美</p>
                    <p>UI设计师</p>
                    <p>8500元</p>
                  </li>
                  <li className="clearfix">
                    <p>鹏*天</p>
                    <p>Web前端工程师</p>
                    <p>8000元</p>
                  </li>
                  <li className="clearfix">
                    <p>白*</p>
                    <p>嵌入式开发工程师</p>
                    <p>11000元</p>
                  </li>
                  <li className="clearfix">
                    <p>阔*里</p>
                    <p>UI设计师</p>
                    <p>9000元</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right fl">
              <div className="head">
                <p>热门专业</p>
              </div>
              <div className="body">
                <div>
                  <a href="http://awt.zoosnet.net/LR/Chatpre.aspx?id=AWT24214282&lng=cn">
                  <img src={require("./images/mypi1.png")} alt="" />
                  <div className="clearfix">
                    <p className="p1">ARM开发技术</p>
                    <p className="p2">125/人</p>
                  </div>
                  </a>
                </div>
                <div>
                  <a href="http://awt.zoosnet.net/LR/Chatpre.aspx?id=AWT24214282&lng=cn">
                  <img src={require("./images/mypi2.png")} alt="" />
                  <div className="clearfix">
                    <p className="p1">C语言基础入门</p>
                    <p className="p2">164/人</p>
                  </div>
                </a>
                </div>
                <div>
                  <a href="http://awt.zoosnet.net/LR/Chatpre.aspx?id=AWT24214282&lng=cn">
                  <img src={require("./images/mypi3.png")} alt="" />
                  <div className="clearfix">
                    <p className="p1">数据结构与算法</p>
                    <p className="p2">201/人</p>
                  </div>
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section section3">
          <div className="title">
            <p>学校环境</p>
            <span>舒适优雅的学习环境，助你学习更轻松！</span>
          </div>
          <div className="opt clearfix" id="opt">
            <span className="active">校园环境</span><span>上课环境</span><span>寝室环境</span>
          </div>
          <div className="pic clearfix" id="pic">
            <div className="xuexiao clearfix">
              <div className="big fl"><img src={require("./images/xybig.jpg")} alt="" /></div>
              <div className="small fl clearfix">
                <div><img src={require("./images/xy1.jpg")} alt="" /></div>
                <div><img src={require("./images/xy2.jpg")} alt="" /></div>
                <div><img src={require("./images/xy3.jpg")} alt="" /></div>
                <div><img src={require("./images/xy4.jpg")} alt="" /></div>
                <div><img src={require("./images/xy5.jpg")} alt="" /></div>
                <div><img src={require("./images/xy6.jpg")} alt="" /></div>
              </div>
            </div>
            <div className="xuexiao">
              <div className="big fl"><img src={require("./images/skbig.jpg")} alt="" /></div>
              <div className="small fl clearfix">
                <div><img src={require("./images/sk1.jpg")} alt="" /></div>
                <div><img src={require("./images/sk2.jpg")} alt="" /></div>
                <div><img src={require("./images/sk3.jpg")} alt="" /></div>
                <div><img src={require("./images/sk4.jpg")} alt="" /></div>
                <div><img src={require("./images/sk5.jpg")} alt="" /></div>
                <div><img src={require("./images/sk6.jpg")} alt="" /></div>
              </div>
            </div>
            <div className="xuexiao">
              <div className="big fl"><img src={require("./images/qsbig.jpg")} alt="" /></div>
              <div className="small fl clearfix">
                <div><img src={require("./images/qs1.jpg")} alt="" /></div>
                <div><img src={require("./images/qs2.jpg")} alt="" /></div>
                <div><img src={require("./images/qs3.jpg")} alt="" /></div>
                <div><img src={require("./images/qs4.jpg")} alt="" /></div>
                <div><img src={require("./images/qs5.jpg")} alt="" /></div>
                <div><img src={require("./images/qs6.jpg")} alt="" /></div>
              </div>
            </div>
          </div>
        </div>


        <div className="section section4">
          <div className="title">
            <p>学院动态</p>
            <span>我们努力做到最好，是因为这里有千万个怀揣梦想的你们！</span>
          </div>
          <div className="news clearfix">
            <div className="left fl clearfix">
              <ul>
                <li>
                  <p className="p1"><a href="./xinwen/1056.html">印度国家信息技术学院·宁夏师范学院召开合作交流座谈会</a></p>
                  <p className="p2">9月5日下午，印度国家信息技术学院（NIIT）·宁夏师范学院合作交流座谈会在宁夏师范学院古雁校区办...</p>
                  <p className="p3">所属分类：<span>学院动态</span><span className="jj">来源：NIIT重庆互联网学院</span></p>
                </li>
                <li>
                  <p className="p1"><a href="./xinwen/1057.html">NIIT与贵州大学签订校企合作协议</a></p>
                  <p className="p2">5月27日，2019中国国际大数据产业博览会“中印IT＆DT产业合作发展”论坛在贵阳举行...</p>
                  <p className="p3">所属分类：<span>学院动态</span><span className="jj">来源：NIIT重庆互联网学院</span></p>
                </li>
                <li>
                  <p className="p1"><a href="./xinwen/1058.html">NIIT与宁夏师范学院签署合作办学协议</a></p>
                  <p className="p2">5月7日，印度国家信息技术学院（简称NIIT）与宁夏师范学院在宁夏教育厅签署两校联合培养优秀的信息技术人才的...</p>
                  <p className="p3">所属分类：<span>学院动态</span><span className="jj">来源：NIIT重庆互联网学院</span></p>
                </li>
              </ul>
              <div className="btn fr"><a href="./xinwen.html">点击查看更多</a></div>
            </div>
            <div className="right fl">
              <ul>
                <li>
                  <a href="./xinwen/1060.html">
                    <img src={require("./images/shouye-1.jpg")} alt="" />
                    <div>
                      <p>刘慧会见印度国家信息技术学院代表团一行</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="./xinwen/1061.html">
                    <img src={require("./images/shouye-2.jpg")} alt="" />
                    <div>
                      <p>NIIT全球首席执行官访问宁夏大学并与学生座谈</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="./xinwen/1063.html">
                    <img src={require("./images/shouye-3.jpg")} alt="" />
                    <div>
                      <p>NIIT项目鼎力合作，人才培养举足轻重</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
