import React, { Component } from 'react';
import HeaderTop from '../components/HeaderTop';
import Header from '../components/Header';
import '../assets/css/Home.css';
import Adv01 from '../assets/images/header-adv01.png';
import Adv02 from '../assets/images/header-adv02.png';
import Adv03 from '../assets/images/header-adv03.png';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className="home">
        <div className="header">
          <HeaderTop></HeaderTop>
          <Header></Header>
        </div>
        {/* 轮播图 */}
        <div className="slider-bar clearFloat">
          <div className="slider-wrap">
            <ul>
              <li><img src={Adv01} alt="轮播图"/></li>
              <li><img src={Adv02} alt="轮播图"/></li>
              <li><img src={Adv03} alt="轮播图"/></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;