import React from 'react';
import NavBar from './NavBar';
import UserInfo from './Posts';

export default function Profile(props) {
  const {userInfo}= props
  console.log(userInfo)
  return (<>
    <div className='d-flex'>
      <NavBar/>
      <div className='user-profile'>
        <div className='profile-header d-flex'>
          <h4>Profile</h4>
          <div className='d-flex align-center user-box'>
            <img src={userInfo.profilepicture}/>{userInfo.name}
          </div>
        </div>
        <div className='d-flex user-info-container'>
          <div className='Profile-user-info'>
            <img src={userInfo.profilepicture}/>
            <h4>{userInfo.name}</h4>
            <table className='table-border-btm'>
              <tbody>
              <tr>
                <td className='username'>Username </td>
                <td className='username plr'> : </td> 
                <td><span>{userInfo.username}</span></td>
              </tr>
              <tr>
                <td className='username'>e-mail </td>
                <td className='username plr'>:</td> 
                <td><span>{userInfo.email}</span></td>
              </tr>
              <tr>
                <td className='username'>Phone </td>
                <td className='username plr'>:</td> 
                <td><span>{userInfo.phone}</span></td>
              </tr>
              <tr>
                <td className='username'>Website </td>
                <td className='username plr'>:</td> 
                <td><span>{userInfo.website}</span></td>
              </tr>
              </tbody>
            </table>
            
            <p className='username text-align-center'>Company</p>
            <table>
              <tbody>
              <tr>
                <td className='username'>Company </td>
                <td className='username plr'> : </td> 
                <td><span>{userInfo.company.name}</span></td>
              </tr>
              <tr>
                <td className='username'>catchphrase </td>
                <td className='username plr'>:</td> 
                <td><span>{userInfo.company.catchPhrase}</span></td>
              </tr>
              <tr>
                <td className='username'>bs </td>
                <td className='username plr'>:</td> 
                <td><span>{userInfo.company.bs}</span></td>
              </tr>
              </tbody>
            </table>
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
    </>
  );
}
