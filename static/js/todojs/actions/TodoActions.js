import dispatcher from "../dispatcher";

export function createTodo(text){
  dispatcher.dispatch({
    type:"CREATE_TODO",
    text
  });
}

export function deleteTodo(id){
  dispatcher.dispatch({
    type:"DELETE_TODO",
    id
  });
}

export function reloadTodos(){
  //dispatcher.dispatch({type:"FETCH_TODOS"});
  setTimeout(() =>{
    dispatcher.dispatch({type:"RECEIVE_TODOS", todos: [
      {
        id: 46546,
        text: "Go Shopping again",
        complete: false
      },
      {
        id: 498484,
        text: "Be happy",
        complete: true
      }
    ]});
  },1000);
}
