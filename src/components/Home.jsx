import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home=()=>{
    const [album,albumSet]=useState([]);
    async function getAlbums(){
        const resp=await axios.get("https://jsonplaceholder.typicode.com/albums");
        albumSet(resp.data);
    }
    useEffect(()=>{
        getAlbums();

    });
    return(<div className="home">
        <h1 >Image Gallery</h1>
        <div className="container">
        
            {album.map((data)=>{
            return( <div className="col-2"><Link to={`/imageshow/${data.id}`}>{data.title}</Link></div>);
            })}  
                  
        </div>
    </div>);
}
export default Home;