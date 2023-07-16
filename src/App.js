import React from 'react'
import Homepage from './page/hompage/presentation/Homepage'
import Layout from './layout/Layout'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Homepage />
          </Layout>
        }
      />
    </Routes>
  )
}

export default App
