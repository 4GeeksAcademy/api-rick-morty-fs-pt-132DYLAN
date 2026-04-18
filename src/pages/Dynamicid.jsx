import { useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"



const Dynamicid = ()=>{
 const {id} = useParams()
 const {store} = useGlobalReducer()
 const personaje= store.personajes?.find(el=>el.id===Number(id))
 if (!personaje) return <h2>Cargando...</h2>;
return <div className="container mt-5">
    <div className="row">
        <div className="col-md-4">
            <img src={personaje.image} className="img-fluid rounded" />
        </div>
        <div className="col-md-8">
             <h1>{ personaje.name}</h1>
                    <p>Gender: { personaje.gender}</p>
                    <p>Species: { personaje.species}</p>
                    <p>Status: { personaje.status}</p>
                    <p>Origin: { personaje.origin.name}</p>
                    <p>Location: { personaje.location.name}</p>
        </div>
    </div>
   
</div>





}


export default Dynamicid