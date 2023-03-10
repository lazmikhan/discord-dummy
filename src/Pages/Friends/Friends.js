import React from 'react';

const Friends = () => {
    return (
        <div style={{   color:"grey"}} className='border'>
           
           <div className='d-flex justify-content-center'>
           <input className="border border-2  p-1   rounded-2" style={{width:'220px', color:'white', backgroundColor:'rgb(41, 40, 40)'}} type="text" placeholder='Find or start a conversation'  />
           </div>
           <div>
          <b>Friends</b>
           </div>
           <div>
          <b>Nitro</b>
           </div>
           <div>
            <p>DIRECT MESSAGES</p>
            <div>
            <img className='border m-2 rounded-circle' style={{width:'40px', height:"40px"}} src="https://wallpaperaccess.com/full/39046.jpg" alt="" />
            <><b>CarolineHobbit</b></>
            </div>
            <div>
            <img className='border m-2 rounded-circle' style={{width:'40px', height:"40px"}} src="img/alvin-lenin-2ta8OjluZuI-unsplash.jpg" alt="" />
            <><b>MistyWantsBroke</b></>
            </div>
            <div>
            <img className='border m-2 rounded-circle' style={{width:'40px', height:"40px"}} src="https://cdn.pixabay.com/photo/2023/01/31/00/44/ai-generated-7756870__340.jpg" alt="" />
            <><b>IcecreamItiWant</b></>
            </div>
            <div>
            <img className='border m-2 rounded-circle' style={{width:'40px', height:"40px"}} src="https://www.shutterstock.com/image-illustration/aesthetic-illustration-girl-sitting-on-260nw-1919058461.jpg" alt="" />
            <><b>Caroline</b></>
            </div>
           </div>
        </div>
    );
};

export default Friends;