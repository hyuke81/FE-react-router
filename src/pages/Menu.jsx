import React from "react";
import Header from "../containers/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Menu = () => {
  const navigate = useNavigate();
  const [brand, setBrand] = useState("");


  return (
    <>
      <Header />
      <h1>Menu Page</h1>
      <input type="text" placeholder="브랜드명을 입력하세요" onChange={e => setBrand(e.target.value)} />
      <button onClick={() => navigate(`/product/${brand}`)}>브랜드 페이지로 이동</button> 
    </>
  );
}

export default Menu;