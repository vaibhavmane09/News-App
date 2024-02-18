import React, { useState, useEffect } from 'react';
import Nav from './nav';
import axios from 'axios';
import { Button,Link } from '@mui/material';

export default function NewsContent() {
    const [data, setNews] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (data.length === 0) {
					const response = await axios.get("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=cb0ead5c7bb142d3bc5c9470fc8ad3b2");
                    
					// const response = await axios.get("https://newsapi.org/v2/everything?q=business&from=2024-01-16&sortBy=publishedAt&apiKey=a9fca0a363f04b0ebde2adef74548d94");


                    setNews(response.data.articles);
                }
            } catch (error) {
                console.error("Error fetching news data:", error);
            }
        };

        fetchData();
    }, [data]); // Only run effect when 'data' state changes

    return (
        <div className='d-flex flex-column justify-content-start'>
            <Nav />
            <div className="container d-flex gap-3 justify-content-evenly flex-wrap" style={{ marginTop: "3%", width: "100%" }}>
                <h3 className="w-100 m-0 p-0 text-white opacity-75"><u>Top Headlines:</u></h3>
                {data.map((value, index) => (
                    <div key={index} className='card-container' style={{ width: "360px", height: "max-content" }}>
                        <div style={{ width: "100%", height: "330px", display: "flex", alignItems: 'end', backgroundColor: "black" }}>
                            <img src={value.urlToImage} alt="" className="object-fit-cover w-100 h-100" style={{ filter: "brightness(70%)" }} />
                        </div>
                        <div style={{ backgroundColor: "#252525",top:"50px" }} className='p-2'>
                            <div className='card_head w-100' style={{ color: "white", paddingLeft: "15px" }}><h5>{value.title}</h5></div>
                            <div className='card_descrip' style={{ color: "rgba(255, 255, 255, 0.61)", paddingLeft: "15px" }}>{value.description}...</div>
							<div className="w-100 d-flex justify-content-end"><Link href={value.url}><Button variant='outlined'>Read more</Button></Link></div>
                        </div>
						
                    </div>
                ))}
            </div>
        </div>
    );
}

