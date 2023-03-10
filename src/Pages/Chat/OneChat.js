import React, { useState } from 'react';

const OneChat = (props) => {
    const [isHovering, setIsHovering]= useState(false)
const handleHover=()=>{
setIsHovering(true);

}
    return (

        <div onMouseOver={handleHover} onMouseOut={()=>setIsHovering(false)} className='d-flex '>
            <div>
                {props.chat.name=="psychotic"?
            <div>
                <img className='border m-2 rounded-pill' style={{width:'40px',height:'40px'}} src="img/unnamed.jpg" alt="" srcset="" />
            </div>:<div>
            <img className='m-2  border rounded-pill' style={{width:'40px',height:'40px'}} src="img/hector-j-rivas-QNc9tTNHRyI-unsplash.jpg" alt="" srcset="" /> 
            </div>   
            }
            </div>
        <div style={{color:'grey'}}>
            <h5 style={{display:'inline', marginRight:'10px', color:'white'}}>  {props.chat.name}</h5>
         <small>{props.chat.date} {props.chat.time}</small>
            <p>{props.chat.text}  {
                isHovering && <span className='p-1' style={{width:'100px', backgroundColor:'rgb(30, 50, 40)'}}>delete edit</span> 
            }</p>
           
        </div>
        <div >
          delete
        </div>
        </div>
    );
};

export default OneChat;