import './App.css'
import Card from './components/Card'

function App() {
  
  const me = {
    name: "Benjamin",
    age: 30,
    favoriteMovie: "Forest Gump",
    favoriteMusic: "Funk"
  }

  const hobbies = {
    title: "Hobbies",
    list: ["Música", "Ir a la playa", "Películas"]
  }
  
  const favoriteFood = {
    title: "Mi comida favorita",
    list: ["Porotos con riendas", "Pizza", "Sushi"]
  }

  return (
    <div className="App">
      <ul className='list list1'>
        <li className='list__item'><b>Nombre: </b>{me.name}</li>
        <li className='list__item'><b>Edad: </b>{me.age} años.</li>
        <li className='list__item'><b>Película Favorita: </b>{me.favoriteMovie}</li>
        <li className='list__item'><b>Música Favorita: </b>{me.favoriteMusic}</li>
      </ul>
      <Card objInfo={hobbies} />
      <Card objInfo={favoriteFood} />
      <ul className='list list4'>
        <h2 className='title-card'>My stack tech</h2>
        <li className='list__item'>HTML</li>
        <li className='list__item'>CSS</li>
        <li className='list__item'>Javascript</li>
      </ul>
    </div>
  )
}

export default App
