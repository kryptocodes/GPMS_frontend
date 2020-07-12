import React from 'react'
import ReactLoading from 'react-loading';

const LoadingScreen = () => {
    return (
        <div className="loading" style={{paddingTop:"15vh"}}>
                <ReactLoading 
                    type={'bars'} 
                    color={'#001529'} 
                    height={'10%'} 
                    width={'30%'}
                    className="mx-auto" />
                    <h1 className="loading-text text-center">Loading</h1>
         </div>
    )
}









export default LoadingScreen