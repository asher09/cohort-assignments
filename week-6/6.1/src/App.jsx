

//*****Wrapper-Components*******/
// function App() {
//   return <div>
//       <CardWrapper>
//         hi there
//       </CardWrapper>
//     </div>
// }


// function CardWrapper({children}) {
//  return <div style={{
//     border: "3px solid blue"}}> 
//     {children}
//   </div>
// }


/******* TODO ********/
// let counter = 4;
// function App () {
//   const [todos, setTodos] = useState([
//     {id: 1, title: "Todo 1", description: "Description 1"},
//     {id: 2,title: "Todo 2", description: "Description 2"},
//     {id: 3 , title: "Todo 3", description: "Description 3"}
//   ])
//   function addTodo() {
//     setTodos([...todos, {
//       id: counter++,
//       title: Math.random(),
//       description: Math.random()
//     }])
//   }
//   return (
//     <div>
//       <button onClick={addTodo} > Add Todo</button>
//       {todos.map((todo => <Todo key={todo.id} title={todo.title} description={todo.description} />))}
//     </div>
//   )
// }
// function Todo({title, description}) {
  
//   return(
//     <div>
//       <h2>{title}</h2>
//       <p>{description}</p>
//     </div>
//   )
// }





/*******rerendering components *******/
// function App() {
//   return (
//     <> 
//       <HeaderWithButton/>
//       <Header title="ash2"></Header>
//       <Header title="ash2"></Header>
//       <Header title="ash2"></Header>
//     </>
//   )
// }
// function HeaderWithButton() {
// const [title, setTitle] = useState("adsfas");
//   function updateTitle(){
//     setTitle("my name is " + Math.random());  
//   }
//   return <div>
//     <button onClick={updateTitle} >Update</button>
//     <Header title={title}></Header>
//   </div>
// }
// function Header({title}) {
//   return <div>
//     {title}
//   </div>
// }

export default App
