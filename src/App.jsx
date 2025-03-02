import { EventHandling } from './components/EventHandling';
import { EventProps } from './components/EventProps';
import { States } from './components/hooks/State';
import NetflixApp from './components/Netflix';
import "./components/netflix.css"
import { ToggleSwitch } from './projects/toggleSwitch/ToggleEwitch';

export const App = () => {
  return (
    <section className='container'>
      {/* <h1 className='card-heading'>
        List Of Best Netflix Series
      </h1>
      <NetflixApp /> */}
      {/* <EventHandling /> */}
      {/* <EventProps /> */}
      {/* <States /> */}
      <ToggleSwitch/>
    </section>
  )
}

