import axios from "axios";
import { useEffect, useState } from "react";
import {useParams } from "react-router-dom";

const ImageShow=()=>{
    const [images,imagesSet]=useState([]);
    const {id}=useParams();
    async function getImages(){
        const resp=await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
        imagesSet(resp.data);
    }
    useEffect(()=>{
        getImages();
    });
    return(<div className="container p-4">
        <h1>Images</h1>
        <div className="row">
  {images.map((item) => (
    
      <img src={item.url} alt={item.title} className="col-sm-6 col-md-4 col-lg-3 mt-2"/>
       
  ))}

</div>
</div>
);
}
export default ImageShow;





