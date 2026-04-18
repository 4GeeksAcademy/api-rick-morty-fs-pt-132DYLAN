const api_rick_morty ={};
const url="https://rickandmortyapi.com/api"
const ids = Array.from({ length: 10 }, (_, i) => i + 1).join(",");



api_rick_morty.getcharacters=async()=>{

    try { const resp =await fetch (url + '/character/'+ids)
        if(!resp.ok) throw new Error ('Api not responding')
        const data=await resp.json()
        return data
        
    } catch (error) {
        
    }
}
export default api_rick_morty