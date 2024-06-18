// import { useState } from 'react';
import React, { useState } from 'react'
// import Api from '../components/api'
import api from '../components/api';
const CreatePost = () => {
    const { http } = api()
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    const submitform = () => {
        //   http.post('./createpost')
        http.post('/createpost', { title: title, description: description }).then(res => {
            console.log(res);
        })
    }
    return (
        <div>
            <div className="container mt-5">
                <h1 className='text-center'>Create Post</h1>
                <div className="mb-3">
                    <label className="form-label">Title:</label>
                    <input type="text" onChange={e => setTitle(e.target.value)} className="form-control" placeholder="Hello World Namastey" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description: </label>
                    <textarea className="form-control" onChange={e => setDescription(e.target.value)} rows="3"></textarea>
                </div>
                <button type='button' onClick={submitform} className='btn btn-primary w-100'>Publish Now</button>
            </div>
        </div >
    )
}

export default CreatePost
