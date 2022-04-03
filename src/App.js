import emailSvg from "./assets/email.svg";
import locationSvg from "./assets/location.svg";
import phoneSvg from "./assets/phone.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [large, setLarge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");
  const [date, setDate] = useState("");
  
  
  
  // console.log(user);
  const axiosRandomUser = () => {
    axios("https://randomuser.me/api/").then((res) => {
      setName(res.data.results[0].name);
      setLarge(res.data.results[0].picture.large);
      setEmail(res.data.results[0].email);
      setPhone(res.data.results[0].phone);
      setCity(res.data.results[0].location.city);
      setAge(res.data.results[0].dob.age);
      setDate(res.data.results[0].registered.date);
    });
  };

  useEffect(() => {
    axiosRandomUser();
  }, []);

  return (
      <>
        <div className="card-container">
        <img className="img1" src={large} alt="" />
        <h2 className="header">{name.title} {name.first} {name.last}</h2>
        <img className="img" src={emailSvg} alt="" />
        <p> {email} </p>
        <img className="img" src={phoneSvg} alt="" />
        <p>{phone}</p>
        <img className="img" src={locationSvg} alt="" />
        <p>{city}</p>
        <div className="footer">
          <p>Age: {age} </p>
          <p>Register Date: {date.slice(0, 10)} </p>
        </div>
        </div>
        <button onClick={()=> axiosRandomUser()}>Random User</button>
        </>
  );
}

export default App;
