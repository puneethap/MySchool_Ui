import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.scss'
import { AxiosConfigurationService } from './axios/axios-configuration.service'
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  useEffect(() => {
    const axiosConfigurationService = new AxiosConfigurationService()
    axiosConfigurationService.configureAuthorizationHeader()
    axiosConfigurationService.onResponseError((error) => {
      if (error.response && error.response.status === 401) {
        window.location.reload()
      }
      return Promise.reject(error)
    })
  })

  return (
    <>
      <Router>
        <Routes>
          <Route path="/home/:userName" element={<HomePage />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
