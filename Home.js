import React from 'react';
import { Link } from "react-router-dom";
import mernImg from "../../assests/wp7767598.jpg"

function Home() {
  return (
    <div>
        <Link to={"/ToDo"}><button>Todo</button></Link>
        <Link to={"/Countries"}><button>Countries</button></Link>
        <img src={mernImg} width="50px" height="50px"alt='' ></img>
    </div>
  )
}

export default Home