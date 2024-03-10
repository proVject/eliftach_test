import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // console.log(import.meta.env.VITE_API_SERVER_URL)
  //
  // fetch(import.meta.env.VITE_API_SERVER_URL + '/orders', {
  //   method: 'POST',
  //   headers: {'content-type': "application/json"},
  //   body: JSON.stringify({ email: 'vovazb1232@gmail.com', phone: '+380977012990', address: 'no address', drugs: [{count: 2, medicine_id: 1}, {count: 1, medicine_id: 2}] })
  // })
  //   .then(data => data.json())
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err))

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo"/>
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo"/>
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
