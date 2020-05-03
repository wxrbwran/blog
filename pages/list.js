
import React,{useState, useEffect} from 'react'
import Head from 'next/head'
import {Row, Col , List ,Icon ,Breadcrumb  } from 'antd';
import axios from "axios";
import servicePath  from '../config/apiUrl'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import '../static/style/pages/list.css';

const ArticleList = (props) =>{
    console.log(props);
    const [ mylist , setMylist ] = useState(
      props.list
    );

    useEffect(()=>{
      setMylist(props.list)
     });
  
  
    return (
      <>
        <Head>
          <title>Home</title>
        </Head>
        <Header />
        <Row className="comm-main" type="flex" justify="center">
          <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
              <div>
                <div className="bread-div">
                  <Breadcrumb>
                    <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                    <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                  </Breadcrumb>
                </div>
  
                <List
                  itemLayout="vertical"
                  dataSource={mylist}
                  renderItem={item => (
                    <List.Item>
                      <div className="list-title">{item.title}</div>
                      <div className="list-icon">
                        <span><Icon type="calendar" /> 2019-06-28</span>
                        <span><Icon type="folder" /> 视频教程</span>
                        <span><Icon type="fire" /> 5498人</span>
                      </div>
                      <div className="list-context">{item.context}</div>  
                    </List.Item>
                  )}
                />  
  
              </div>
          </Col>
  
          <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
            <Author />
            <Advert />
          </Col>
        </Row>
        <Footer/>
  
     </>
    )
  
  } 

  ArticleList.getInitialProps = async (context)=>{
    const id =context.query.id
    const url = servicePath.getListById + id;
    console.log(url)
    const res = await axios(url);
    return { list: res.data.data };
  }
  
  export default ArticleList
  