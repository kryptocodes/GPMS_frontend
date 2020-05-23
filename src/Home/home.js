import React from 'react'
import { API } from '../backend'
import Signin from '../Home/signin'

export default function home() {
    console.log("API IS",API)
    return (
        <div>
            <Signin/>
        </div>
    )
}
