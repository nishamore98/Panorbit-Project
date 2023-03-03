import * as React from 'react';
import '../style.css';
import {Link} from "react-router-dom"

export default function LandingPage(props) {
  const {getUserInfo} = props
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch('https://panorbit.in/api/users.json')
      .then((res) => res.json())
      .then((json) => {
        setData(json.users);
      });
  }, []);
  const userInfo = (info) => {
    getUserInfo(info)
  };
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="header">
            <h4>Select an account</h4>
          </div>
          <div className="Emp-list">
            {data.length &&
              data.map((item, index) => {
                return (
                  
            <Link to={`/User/Profile`} onClick={()=>userInfo(item)}
            key={index}><div
            className="user-container"
          >
            <img width="30" src={item.profilepicture} />
            {item.name}
          </div></Link>
                  
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
