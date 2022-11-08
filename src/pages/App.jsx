import { useLocalStorage } from '../hooks/useLocalStorage'

import '../assets/App.scss'

const App = () => {
  const [localdata, setLocalData] = useLocalStorage('isLogin', null);
  return <>
    <button onClick={() => setLocalData(!localdata)}>click event  {String(localdata)}</button>
    <div style={{ marginTop: "50px" }}>
      <input type="checkbox" id="animation2" />
      <label htmlFor="animation2" className='arrow_label'>
        <div className="arrow"></div>
      </label>
    </div>
  </>
}

export default App
