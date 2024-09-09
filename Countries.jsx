import React, { useState } from 'react';
import './Countries.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CountriesCards from './CountriesCards/CountriesCards'

function Countries() {
    const [cData, setcData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const GetData = () => {
        setLoading(true);
        setError(null);
        axios.get(`https://restcountries.com/v3.1/all`)
            .then((res) => {
                console.log(res);
                setcData(res.data);
            })
            .catch((err) => {
               navigate('/')
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className='CountriesBox'>
            <button onClick={GetData} className="btn btn-primary mb-3">Get Data</button>
            {loading && <p>Loading...</p>}
            {error && <p className="text-danger">{error}</p>}
            {cData.length > 0 ? (
                cData.map((country, index) => (
                    <CountriesCards country={country} key={index} />
                ))
            ) : (
                !loading && <p>No data available. Click the button to fetch data.</p>
            )}
        </div>
    );
}

export default Countries;
