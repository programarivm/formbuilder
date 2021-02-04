import { Provider } from 'react-redux';
import store from 'store';
import Dashboard from 'components/Dashboard'
import MainNav from 'components/MainNav'

const Build = () => {
  return <Provider store={store}>
    <MainNav />
    <Dashboard />
  </Provider>
}

export default Build
