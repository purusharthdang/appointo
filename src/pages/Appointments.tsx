import React, { useEffect } from 'react'
import Layout from '../components/appointments/layout/Layout'
import Header from '../components/appointments/header/Header'
import CalendarBooking from '../components/appointments/appointment-content/CalendarBooking'
import { Toaster } from 'react-hot-toast'

const Appointments = () => {
  useEffect(() => {
    localStorage.setItem('clientTimeZone', Intl.DateTimeFormat().resolvedOptions().timeZone)
  }, []);
  return (
    <Layout>
      <Header />
      <div style={{
        background: 'rgba(249, 250, 251, 0.70)',
        backdropFilter: 'blur(50px)',
        position: 'relative',
      }}>
        <Toaster position='top-center' />

        <CalendarBooking />
      </div>
    </Layout>
  )
}

export default Appointments