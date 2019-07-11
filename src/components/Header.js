import React,{Component} from 'react';
import {Icon} from 'antd';
import '../assets/css/Header.css';
import Logo from '../assets/images/trc-logo.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className="navbar skin-white" id="J_navElemt">
        <div className="center clearFloat">
          <h1 className="nav-logo">
            <a className="web-logo left" href="http://localhost:3000/">
              <img src={Logo} alt="#"/>
            </a>
          </h1>
          <div className="navigation right">
            <ul>
              <li className="nav-item-priamry"><a href="http://localhost:3000/">首页</a></li>
              <li className="nav-item-priamry"><a href="http://localhost:3000/invest">去出借</a></li>
              <li className="nav-item-priamry"><a href="http://localhost:3000/newer">新手必读</a></li>
              <li className="nav-item-priamry"><a href="http://localhost:3000/notice">信息披露</a></li>
              <li className="nav-item-priamry"><a href="http://localhost:3000/socialty">小泰社区</a></li>
              <li className="nav-item-priamry"><a href="http://localhost:3000/vip">会员中心</a></li>
              <li className="nav-item-priamry">
                <div className="unlogin">
                  <Icon type="user" />
                  <a className="login" href="javascript:void(0)"> 登录 </a>
                  /
                  <a className="register" href="javascript:void(0)"> 注册</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;