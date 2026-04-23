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

api_rick_morty.getlocations =async()=>{
    try {
    const resp = await fetch(url + "/location/" + ids);
    if (!resp.ok) throw new Error("Api not responding");
    const data = await resp.json();
    return data;
  } catch (error) {
    console.error(error);
  }

}
api_rick_morty.getepisodes = async () => {
  try {
    const resp = await fetch(url + "/episode/" + ids);
    if (!resp.ok) throw new Error("Api not responding");
    const data = await resp.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
export default api_rick_morty