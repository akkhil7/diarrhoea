export function currentUser(){
  return{
    type:"FETCH_CURRENT_USER",
    payload: {
      id: 6,
      username: "akhil"
    } 
  }
}
