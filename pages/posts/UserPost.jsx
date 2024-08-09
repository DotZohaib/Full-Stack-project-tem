import React, { useState } from "react";
import Script from "next/script";

const UserPost = () => {
  const [password, setpassword] = useState("");
  const [length, setLength] = useState(0);
  const [character, setCharacter] = useState(false);
  const [number, setNumber] = useState(false);
  const [includeChar, setIncludeChar] = useState(false);

  const PasswordGenerator = () => {
    let charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let charLower = "abcdefghijklmnopqrstuvwxyz";
    let num = "0123456789";
    let symbal = "!@#$%^&*()_+=-{}[]:;><?~";

    let setChar = (charUpper += charLower);
    if (includeChar) setChar += number;
    if (includeChar) setChar += character;
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
  };


  return <>

  <Script>
    `
    var element = document.createElement("p");
  element.textContent = "Hello, World";
  document.body.appendChild(element); //add the newly created element to the DOM
 
    `
  </Script>
  <h1 className="text-2xl text-center flex justify-center text-pink-400  items-center mt-10 font-serif cursor-pointer hover:text-pink-700">zenzone </h1>
  </>;
};

export default UserPost;
