import React, { createContext, useState } from "react";
const ListingContext = createContext();


const ListingProvider = ({ children }:any) => {
    const [name, setName] = useState("John Doe");
    const [age, setAge] = useState(1);
    const happyBirthday = () => setAge(age + 1);
    return (
      <ListingContext.Provider value={{ name, age, happyBirthday }}>
        {children}
      </ListingContext.Provider>
    );
  };