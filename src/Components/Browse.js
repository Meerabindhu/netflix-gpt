import React from "react";
import Header from "./Header";
import { useSelector } from 'react-redux';


const Browse = () => {
    const userData = useSelector(store=>store.user);
    console.log({userData})

  return (
    <>
      <Header userData={userData}></Header>
    </>
  );
};

export default Browse;
