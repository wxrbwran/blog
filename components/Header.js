import React, { useState, useEffect } from "react";
import { Row, Col, Menu, Icon, message } from "antd";
import Link from "next/link";
import Router from 'next/router';
import axios from "axios";
import servicePath from "../config/apiUrl";
import "../static/style/components/header.css";

function Header() {
  const [nav, setNav] = useState([]);

  const getNavList = () => {
    axios.get(servicePath.getTypeInfo).then(result => {
      console.log("result", result);
      setNav(result.data.data);
    }).catch(e => {
      console.log(e);
    }) ;
  };

  useEffect(() => {
    getNavList();
  }, []);


//跳转到列表页
const handleClick = (e)=>{
  console.log(e);
  if(e.key==0){
      Router.push('/')
  }else{
      Router.push('/list?id='+e.key)
  }
}
  return (
    <div className="header">
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <span className="header-logo">blog</span>
          <span className="header-txt">前端开发</span>
        </Col>
        <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal" onClick={handleClick}>
            <Menu.Item key="0">
              <Icon type="home" />
              首页
            </Menu.Item>
            {nav.map((item) => {
              return (
                <Menu.Item key={item.id}>
                  <Icon type={item.icon} />
                  {item.typeName}
                </Menu.Item>
              );
            })}
          </Menu>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
