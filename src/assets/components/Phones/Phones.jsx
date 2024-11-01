import axios from "axios";
import { useEffect, useState } from "react";
import React, { PureComponent } from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';

import { Audio } from 'react-loader-spinner'



const Phones = () => {

    const [Phones, setPhones] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhones(data.data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => setPhones(data.data.data))

        setLoading(false);
    }, [])
    return (
        <div>
            {loading && 
            <div>
                 <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="three-dots-loading"
  wrapperStyle
  wrapperClass
/>
                </div>}
            <h2 className="text-5xl">Phones: {Phones.length}</h2>
            {/* <BarChart width={600} height={400} data={Phones}>
          <Bar fill='green' />
          <XAxis></XAxis>
          <YAxis></YAxis>
        </BarChart> */}
        </div>
    );
};

export default Phones;

