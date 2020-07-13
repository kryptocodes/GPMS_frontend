import React from 'react'
import Signin from '../Home/signin'

import { Offline, Online } from "react-detect-offline";

import OfflineContent from '../components/common/offline';

export default function Home() {
    
    return (
        <React.Fragment>
        <Offline>{OfflineContent()}</Offline>
        <Online>
        <div className="m-0 mt-auto" style={{paddingTop:"10vh"}}>
            <Signin/>
        </div>
        </Online>
        </React.Fragment>
    )
}
