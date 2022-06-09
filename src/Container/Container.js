import React from 'react'
import ChatsBar from '../Components/ChatsBar'
import Dashboard from '../Components/Dashboard'
import MenuBar from '../Components/MenuBar'

const Container = () => {
    return (
        <div className='all_container'>
            <MenuBar />
            <Dashboard />
            {/* <ChatsBar /> */}
        </div>
    )
}

export default Container