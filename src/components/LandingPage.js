import * as React from 'react';
import '../style.css';

export default function LandingPage() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch('https://panorbit.in/api/users.json')
      .then((res) => res.json())
      .then((json) => {
        setData(json.users);
      });
  }, []);
  const userInfo = (info) => {
    window.location.href += `Profile`;
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
                  <div
                    onClick={() => userInfo(index)}
                    className="user-container"
                    key={index}
                  >
                    <img width="30" src={item.profilepicture} />
                    {item.name}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
