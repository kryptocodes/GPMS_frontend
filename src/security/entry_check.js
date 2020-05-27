import React,{useState} from 'react'
import QrReader from 'react-qr-scanner'
import Base from '../Home/base'
import { getPass } from '../auth/pass'

const Entry_check = () => {

    const [values,setValues] = useState({
        result:1,
        delay:500,
        store:""
    })

    const {result,delay} = values

    const handleScan = value => {
        if(value != null){
        getPass(value)
        .then(data => {
            console.log(data)
            if(data.error){
                console.log(data.error)
            } else{
                console.log(data)
            }
        })

    }
    }

    const handleError = err => {
        console.log(err)
    }
    const previewStyle =  {
        height: 240,
        width: 240
      }

    return (
        <Base title="Entry" className="container p-2">
        <div className="row m-0">
        <div className="col-md-2">
        {(result === 1) && 
        <QrReader
          delay={20}
          style={{width: '90vw',maxWidth: "400px"}}
          onError={handleError}
          onScan={handleScan}
          />}
        <p>{result}</p>
      </div>
        </div>
        </Base>
    )
}










export default Entry_check