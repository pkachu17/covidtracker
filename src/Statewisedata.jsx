import React, { useEffect, useState } from 'react';
import "./Statewisedata.css";

const Statewisedata = ()=>{

    const [data, setData] = useState([]);

    const getCoviddata =  async () =>{
        const res = await fetch("https://api.covid19india.org/data.json");
        const actualData = await res.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);
    };

    useEffect(()=>{
        getCoviddata();
    },[]);
    
    return (
        <>
        <div className="window">
        <div className="container-fluid">
            <div className="main-heading">
                <h1 className="mb-5-text-center" ><span>INDIA</span> Covid 19 Dashboard</h1>
            </div>

            <div className="table-responsive">
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th>State</th>
                            <th>Confirmed</th>
                            <th>Recovered</th>
                            <th>Deaths</th>
                            <th>Active</th>
                            <th>Updated</th>
                        </tr>
                    </thead>
                    {
                        data.map((currElem, index)=>{
                            return(<tbody>
                                <tr>
                                    <td>{currElem.state}</td>
                                    <td>{currElem.confirmed}</td>
                                    <td>{currElem.recovered}</td>
                                    <td>{currElem.deaths}</td>
                                    <td>{currElem.active}</td>
                                    <td>{currElem.lastupdatedtime}</td>
                                </tr>
                            </tbody>);
                        })
                    }
                    
                </table>
            </div>
        </div>
        </div>
        </>
    )
};
export default Statewisedata;
