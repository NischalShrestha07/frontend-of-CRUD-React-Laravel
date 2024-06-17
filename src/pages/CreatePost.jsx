import React from 'react'

const CreatePost = () => {
    return (
        <div>
            <div className="container mt-5">
                <h1 className='text-center'>Create Post</h1>
                <div className="mb-3">
                    <label className="form-label">Title:</label>
                    <input type="text" className="form-control" placeholder="Hello World Namastey" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description: </label>
                    <textarea className="form-control" rows="3"></textarea>
                </div>
                <button type='button' className='btn btn-primary w-100'>Publish Now</button>
            </div>
        </div >
    )
}

export default CreatePost
