export const initialStore = () => {
  return {
    message: null,
    personajes: null,
    locations: null,
    episodes: null,
    favoritos: [],
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
  switch (action.type) {
    case 'addFav':
      const exist = store.favoritos.includes(action.payload)
      if (exist) {
        return {
          ...store,
          favoritos: store.favoritos.filter((fav) => {
            return fav != action.payload
          })
        }
      }
      return {
        ...store,
        favoritos: [...store.favoritos, action.payload]
      }
    case 'savecharacters':
      return {
        ...store,
        personajes: action.payload
      }
    case 'savelocations':
      return { ...store, locations: action.payload }
    case 'saveepisodes':
      return{...store,episodes: action.payload}  
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    default:
      throw Error('Unknown action.');
  }
}
