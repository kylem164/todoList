import React, {useState} from 'react'
import Login from './Login'
import Logout from './Logout'
import Register from './Register'
export default function UserBar(){
    const user = 'Kyle'
    if (user) {
        return <Logout user={user} />
    }else{
        return (
        <>
        <Login />
        <Register />
        </>
        )
    }
}