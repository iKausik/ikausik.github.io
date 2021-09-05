import React from 'react'

import DesktopHome from "./desktop/DesktopHome"
import MobileHome from "./mobile/MobileHome"

const Home = () => {
    return (
        <>
          <div className="mobile-hide">
            <DesktopHome />
          </div>
          
          <div className="desktop-hide">
            <MobileHome />
          </div>
        </>
    )
}

export default Home
