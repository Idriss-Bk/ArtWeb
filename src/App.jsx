

const products = [
  {id:1, title:"Product 1"},
  {id:2, title:"Product 2"},
  {id:3, title:"Product 3"},
];
// let list = [];
// for (const product of products) {
// list.push(<li >{product.title}</li>)
// }
function App() {
  const handleClick = () => {
    console.log("Clicked!")
  }

  return (
    <>
    <div>
      {/* <ul>
        <li key={products.id}>{list}</li>
      </ul>
      <br/>
      {products.map(product => <li key={product.id}>{product.title}</li>)} */}
    </div>
    <button onClick={handleClick}>Click</button>
    </>
  )
}

export default App
