export const initialStore=()=>{
  return{
    message: null,
    personajes:null,
    favoritos:[],
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'addfav':
      return{
        ...store,
        favoritos: [...store.favoritos,action]
      }
    case 'savecharacters':
      return{
        ...store,
        personajes:action.payload
      }        
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    default:
      throw Error('Unknown action.');
  }    
}
