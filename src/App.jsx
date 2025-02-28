import NetflixApp from './components/Netflix';
import  "./components/netflix.css"

export const App = () => {
  return (
    <section className='container'>
      <h1 className='card-heading'>
        List Of Best Netflix Series
      </h1>
      <NetflixApp />
    </section>
  )
}

