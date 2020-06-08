import React from 'react'
import ReactLoading from 'react-loading';

const LoadingScreen = () => {
    return (
        <div className="loading">
                <ReactLoading 
                    type={'cylon'} 
                    color={'#001529'} 
                    height={'50%'} 
                    width={'50%'}
                    className="offset-4" />
                    <h1 className="loading-text text-center">Loading</h1>
         </div>
    )
}









export default LoadingScreen