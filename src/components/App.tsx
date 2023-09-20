import { Dates } from '../components/Dates/Dates';
import { PeriodsContext } from '../contexts/PeriodsContext';
import { periods } from '../utils/periods';

const App = () => {
  return (
    <div className='root'>
      <PeriodsContext.Provider value={periods}>
        <Dates name='one' />
      </PeriodsContext.Provider>
    </div>
  );
};

export default App;
