

const products = [
  {id:1, title:"Product 1"},
  {id:2, title:"Product 2"},
  {id:3, title:"Product 3"},
];
let list = [];
for (const product of products) {
list.push(<li >{product.title}</li>)
}
function App() {

  return (
    <>
    <div>
      <ul>
        <li>{list}</li>

      </ul>
    </div>
    </>
  )
}

export default App
