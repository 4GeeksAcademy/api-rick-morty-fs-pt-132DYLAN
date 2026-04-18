import { object } from "prop-types"
import { Link } from "react-router-dom";

const Card = ({id,img,name,gender,species,status}) =>{


   return <div className="card h-100">

  
  <img src={img} className="card-img-top" alt="..." style={{heigth :"200px",objectFit:"cover"}}/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text mb-1"> Gender: {gender}</p>
    <p className="card-text mb-1">Species:{species}</p>
    <p className="card-text mb-1">Status: {status}</p>
   
  </div>
  
  <div className="card-footer d-flex justify-content-between align-items-center">
   <Link to={`/dynamic/${id}`} className="btn btn-outline-primary btn-sm">
   Ver mas
   </Link>
  <button className="btn btn-outline-warning btn-sm">
      ♡
  </button>


  </div>
  
  
  </div>



   
    

   

}




export default Card