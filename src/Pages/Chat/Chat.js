import React, { useEffect, useState } from 'react';
import OneChat from './OneChat';
import { Scrollbars } from 'react-custom-scrollbars';
const Chat = () => {
    const [data, setData]= useState([]);
    useEffect(()=>{
fetch('fakeData.json').then(res=>res.json()).then(
    data=>setData(data)
)
    },[])
    return (
        <div  >

          <div style={{border:'1px solid black'}}>
          <h5 style={{color:'white'}} > @ toyalazmi </h5>
       
          </div>
       
        <div  className='p-2'> 
        <Scrollbars style={{ width:800, height: 600 }}>
        {
            data.map(chat=><OneChat chat={chat}></OneChat>)
          }
              </Scrollbars>
        </div>
    <div style={{backgroundColor:'rgb(41, 41, 40)'}}>
        <input className='p-2 border rounded-2' style={{width:'100%',backgroundColor:'rgb(41, 41, 40)',color:'white'}} placeholder='Message @toyalazmi' type="text" />

    </div>

        </div>
    );
};

export default Chat;