import React, { useContext, useState, useEffect } from 'react'
// import { storage, db } from './config/Config'


function AddDocuments() {
    const [docName, setDocName] = useState('')
    const [docImg, setDocImg] = useState(null)
    const [error, setError] = useState('')

    // const types = ['image/png', 'image/jpeg']

    // const docImgHandler = (e) => {
    //     let selectedFile = e.target.files[0]
    //     if (selectedFile && types.includes(selectedFile.type)){
    //         setDocImg(selectedFile)
    //         setError('')
    //     }
    //     else {
    //         setDocImg(null)
    //         setError('Please select a valid image type png or jpeg')
    //     }
    // }

    // const addDocument = (e) => {
    //     e.preventDefault()
    //     // console.log(docName, docImg)
    //     const uploadTask = storage.ref(`document-images/${docImg.name}`).put(docImg)
    //     uploadTask.on('state_changed', snapshot=>{
    //         const progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 100
    //         console.log(progress)
    //     }, err=>{
    //         setError(err.message)
    //     }, () => {
    //         storage.ref('document-images').child(docImg.name).getDownloadURL().then(url => {
    //             db.collection('Documents').add({
    //                 docName: docName,
    //                 docImg: url
    //             }).then(()=>{
    //                 setDocName('')
    //                 setDocImg('')
    //                 setError('')
    //                 document.getElementById('file').value=''
    //             }).catch(err=>setError(err.message))
    //         })
    //     })
    // }
    // onChange={docImgHandler}
    // onSubmit={addDocument}
    return (
        <div>
            <form className="container" >
                <div className="row justify-content-md-center" style={{marginTop: '20%', marginBottom: '20%'}}>
                    <div className="col-sm-6 ">
                    <h1 style={{textAlign: 'center'}}>Add Documents</h1>
                        <input onChange={(e)=>setDocName(e.target.value)} value={docName} className="shadow p-3 mb-2 bg-white form-control form-control-lg" type="text" placeholder="type document name" style={{color: '#1BB55C', fontWeight: 'bold', borderRadius: 20, height: 58}} required/>
                        <input id='file'  type="file" className="shadow p-3 mb-5 form-control-file" id="exampleFormControlFile1" style={{color: '#1BB55C', fontWeight: 'bold', borderRadius: 20, height: 58}}></input>
                        <button className="shadow p-3 mb-3 btn btn-block" style={{backgroundColor: '#1BB55C', color: 'white', fontWeight: 'bold', borderRadius: 20}}>Submit</button>
                        {/* <a class="shadow p-3 mb-5 btn btn-block" style={{backgroundColor: 'blue', color: 'white', fontWeight: 'bold', borderRadius: 20}}>
                            <span class="fa fa-facebook pr-2"></span> Sign in with Facebook
                        </a> */}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddDocuments
