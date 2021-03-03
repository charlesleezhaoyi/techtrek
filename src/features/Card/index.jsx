import React, { useState } from 'react';
import {getjoke} from '../../api/getjoke.api';

const Card = () => {

    const [joke, setJoke] = useState("");

    const getjokefromapi = () => {
        getjoke().then((res) => {
            setJoke(res);
        })
    }

    return (

        <div className="Card" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">Jokes API Test</h5>
                <p className="card-text">Hello World</p>
                <button className="btn btn-primary" onClick={getjokefromapi}></button>
                <div>{joke}</div>
            </div>
        </div>
    )
}


export default Card