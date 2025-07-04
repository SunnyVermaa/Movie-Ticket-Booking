import React, { useState } from 'react'
import Loding from '../../components/Loding'
import AdminTitle from '../../components/admin/AdminTitle'

const ListBookings = () => {
  const [loading, setLoading] = useState(true)
  return !loading ? (
    <div>
      <AdminTitle text1="Admin" text2="ListBooking"/>
    </div>
  ) : <Loding/>
}

export default ListBookings
