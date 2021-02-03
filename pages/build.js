import { Provider } from 'react-redux';
import store from 'store';
import Dashboard from 'components/Dashboard'

const Build = () => {
  return <Provider store={store}>
    <Dashboard />
  </Provider>
}

export default Build
