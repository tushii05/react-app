import { EventHandling } from './components/EventHandling';
import { EventProps } from './components/EventProps';
import { States } from './components/hooks/State';
import NetflixApp from './components/Netflix';
import "./components/netflix.css"
import { Todo } from './projects/Todo/Todo';
import { ToggleSwitch } from './projects/toggleSwitch/ToggleEwitch';
import { Counter } from '../src/components/hooks/useState/index'
import { CounterChallenges } from './components/hooks/useState/challanges'
import { Registration } from './components/hooks/useState/Registration';
import { LoginForm } from './components/hooks/useState/LoginForm';
import { ContactUs } from './components/hooks/useState/Contact';
import { HowNotToFetchApi } from './components/hooks/useEffect/HowNotFetchApi';
import { Pokemon } from './projects/pokemon/Pokemon'
import { UseRef } from './components/hooks/useRefs/index'
import { ParentComponent } from './components/PropDrilling';
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
      {/* <CounterChallenges/> */}
      {/* <RegistrationForm/> */}

      {/* <LoginForm/> */}

      {/* <ContactUs /> */}
      {/* <HowNotToFetchApi /> */}
      {/* <Pokemon/> */}
      {/* <UseRef/> */}
      <ParentComponent />
    </section>
  )
}

