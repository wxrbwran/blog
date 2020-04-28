import React, { useState } from "react";
import Head from "next/head";
import { Row, Col, List, Icon } from "antd";
import Header from "../components/Header";
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import '../static/style/pages/index.css'



const Home = () => {
  const [mylist, setMylist] = useState([
    {
      title: "免费视频教程",
      context:
        "aaaaaa",
    },
    {
      title: "React实战视频教程",
      context:
        "React实战视频教程",
    },
    {
      title: "React服务端渲染框架Next.js入门(共12集)",
      context:
        "wsadsadasdsadas",
    },
    {
      title: "React Hooks 免费视频教程(共11集)",
      context:
        "asdasdsaddasdasd",
    },
  ]);
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
            <List
              header={<div>最新日志</div>}
              itemLayout="vertical"
              dataSource={mylist}
              renderItem={(item) => (
                <List.Item>
                  <div className="list-title">{item.title}</div>
                  <div className="list-icon">
                    <span>
                      <Icon type="calendar" /> 2019-06-28
                    </span>
                    <span>
                      <Icon type="folder" /> 视频教程
                    </span>
                    <span>
                      <Icon type="fire" /> 5498人
                    </span>
                  </div>
                  <div className="list-context">{item.context}</div>
                </List.Item>
              )}
            />
          </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author></Author>
          <Advert />  
        </Col>
      </Row>
      <Footer></Footer>
    </>
  );
};
export default Home;
