import React from 'react'

import DesktopHome from "./desktop/DesktopHome"
import MobileHome from "./mobile/MobileHome"

const Home = () => {
    return (
        <>
          <div>
            <DesktopHome />
          </div>
          
          <div>
            <MobileHome />
          </div>
        </>
    )
}

export default Home
