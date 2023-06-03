import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.scss'
import { AxiosConfigurationService } from './axios/axios-configuration.service'
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import { BrowserRouter as Router } from 'react-router-dom'
import SearchOrValidateOrAuthenticate from './components/SearchOrValidateOrAuthenticate'
import ValidateOTP from './components/ValidateOTP'
import ResetPassword from './components/ResetPassword'

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
          <Route path="/getOTP" element={<SearchOrValidateOrAuthenticate />} />
          <Route path="/validateOTP" element={<ValidateOTP />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
