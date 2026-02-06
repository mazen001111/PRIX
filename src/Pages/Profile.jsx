import React, { useEffect } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
  const nav = useNavigate()
  useEffect(() => {
    let auth = localStorage.getItem("useLogin") || sessionStorage.getItem("useLogin")
    if (!auth) {
      nav("/Login")
      toast.error("Please Login First")
    }
  })
  return (
    <div>Profile</div>
  )
}
