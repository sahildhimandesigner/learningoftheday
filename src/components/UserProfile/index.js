import React, { useState } from 'react'
import Header from '../Header'

const UserProfile = (...props) => {
 console.log(props, 'user profile')
    return (
        <>  
            <Header />
            <h1>Upload Image</h1>
        </>
    )
}

export default UserProfile;