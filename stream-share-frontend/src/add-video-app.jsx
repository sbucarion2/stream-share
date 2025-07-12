import React, {useState,useEffect} from 'react'
import axios from 'axios'

function AddVideo () {

    const [movieData, setFormData] = useState({
        name: '',
        description: '',
        language: '',
        thumbnail_location: '',
        video_location: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData, // Spread operator to copy original form data to new object
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const movieDataPayLoad = {
            ...movieData,
            test_record: false
        }

        try {
            const response = await axios.post(import.meta.env.VITE_ADD_VIDEO_API_URL, movieDataPayLoad);
            // const response = await axios.post('http://192.168.1.224:8000/api/add_video/', movieDataPayLoad);
            alert('movie added');
            } catch (error) {
                console.error('Error:', error.response?.data || error.message);
                alert('movie failed to upload - check console');
            }
    };

    return (
        <>
        <div>
            <h1>Video Submission Form</h1>
        </div>
        <div>
            <form className="contact-form" onSubmit={handleSubmit}>
            {/* <form className="contact-form"> */}
                <h2>Contact Us</h2>
                <label>
                    Name:
                    <input type="text" name="name" value={movieData.name} onChange={handleChange} required />
                </label>
                <label>
                    Description:
                    <input name="description" value={movieData.description} onChange={handleChange} required />
                </label>
                <label>
                    Language:
                    <textarea name="language" value={movieData.language} onChange={handleChange} required />
                </label>
                <label>
                    Thumbnail Path:
                    <textarea name="thumbnail_location" value={movieData.thumbnail_location} onChange={handleChange} required />
                </label>
                <label>
                    Video Path:
                    <textarea name="video_location" value={movieData.video_location} onChange={handleChange} required />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
        {/* <form >
        <div className="form-group">
        <label htmlFor="exampleFormControlFile1" className="float-left">Browse A File To Upload</label>
        <input type="file" onChange={e => setFilename(e.target.files[0])} className="form-control" />
        </div>

        <button type="button" onClick={saveFile} className="btn btn-primary float-left mt-2">Submit</button>
        <br/>
        <br/>
        <br/>

        {status ? <h2>{status}</h2>:null}

        </form> */}
        </>
    );
};

export default AddVideo;
