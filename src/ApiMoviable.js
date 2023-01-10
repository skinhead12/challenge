import React, { useRef, useState, useEffect } from "react";
import Moveable from "react-moveable";



export const Api = () => {

    const [moveableComponentsPic, setMoveableComponentsPic] = useState([]);

     
        const url = 'https://jsonplaceholder.typicode.com/photos'
        const fetchApi = async () => {
          const response = await fetch(url)
          console.log(response.status)
          const responseJSON = await response.json()
        } 
        useEffect(() => {
          fetchApi()
        }, [])
        setMoveableComponentsPic([
          ...moveableComponentsPic,
          {
            id: Math.floor(Math.random() * Date.now()),
            top: 0,
            left: 0,
            width: 100,
            height: 100,
            //background: response[Math.floor(Math.random() * response.length)],
            updateEnd: true
          },
        ]);
      

}