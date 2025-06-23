import React, {useState,useEffect} from 'react'
import axios from 'axios'

function AddVideo () {

    const [filename, setFilename] = useState('')
    const [files, setFiles] = useState([{}])
    const [status, setstatus] = useState('')

    // let api = 'http://127.0.0.1:8000/api'

    const saveFile = () =>{
        console.log('Button clicked')

        let formData = new FormData();
        formData.append("pdf", filename)

        let axiosConfig = {
            headers: {
                'Content-Type': 'multpart/form-data'
            }
        }

        console.log(formData)
        axios.post(api + '/files/', formData, axiosConfig).then(
            response =>{
                console.log(response)
                setstatus('File Uploaded Successfully')
            }
        ).catch(error =>{
            console.log(error)
        })
    }

    return (
        <>
        <div>
            <h1>Video Submission Form</h1>
        </div>
        <form >
        <div className="form-group">
        <label htmlFor="exampleFormControlFile1" className="float-left">Browse A File To Upload</label>
        <input type="file" onChange={e => setFilename(e.target.files[0])} className="form-control" />
        </div>

        <button type="button" onClick={saveFile} className="btn btn-primary float-left mt-2">Submit</button>
        <br/>
        <br/>
        <br/>

        {status ? <h2>{status}</h2>:null}

        </form>
        </>
    );
};

export default AddVideo;
