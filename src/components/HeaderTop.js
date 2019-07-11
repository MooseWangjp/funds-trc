import React,{Component} from 'react';
import '../assets/css/HeaderTop.css';

class HeaderTop extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className="topBar">
        <div className="center">
          <div className="topBar-nav right">
            <ul>
              <li>
                <a href="">登录 </a>
                |
                <a href=""> 注册</a>
              </li>
              <li><a href="">帮助中心</a></li>
              <li><a href="">在线客服</a></li>
              <li><a href="">0571-96058 (09:00-21:00)</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderTop;
