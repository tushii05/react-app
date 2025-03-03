import { EventHandling } from './components/EventHandling';
import { EventProps } from './components/EventProps';
import { States } from './components/hooks/State';
import NetflixApp from './components/Netflix';
import "./components/netflix.css"
import { Todo } from './projects/Todo/Todo';
import { ToggleSwitch } from './projects/toggleSwitch/ToggleEwitch';
import{Counter } from '../src/components/hooks/useState/index'
import {CounterChallenges} from './components/hooks/useState/challanges'
export const App = () => {
  return (
    <section >
      {/* <h1 className='card-heading'>
        List Of Best Netflix Series
      </h1>
      <NetflixApp /> */}
      {/* <EventHandling /> */}
      {/* <EventProps /> */}
      {/* <States /> */}
      {/* <ToggleSwitch/> */}
      {/* <Todo /> */}
      {/* <Counter/> */}
      <CounterChallenges/>

    </section>
  )
}

