import { Provider } from 'react-redux'
import store from 'store'
import Head from 'next/head'
import Dashboard from 'components/Dashboard'
import MainNav from 'components/MainNav'

const Build = () => {
  return <Provider store={store}>
    <Head>
      <title>HTML Form Builder | Build</title>
    </Head>
    <MainNav />
    <Dashboard />
  </Provider>
}

export default Build
