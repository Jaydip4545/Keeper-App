import React from "react";

export default function Footer(){

    let year=new Date().getFullYear();
    return (<footer><p>Copyrighted {year}</p></footer>);
}