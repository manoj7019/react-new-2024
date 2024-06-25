import React from 'react'
import { useState } from 'react'
import { storage } from '../../firebase'
import { ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid'

const IndPartnerDocs = () => {
    const[aadharFrontUpload, setAadharFrontUpload] = useState(null)
    const[aadharBackUpload, setAadharBackUpload] = useState(null)
    const[panUpload, setPanUpload] = useState(null)
    const[passbookUpload, setPassbookUpload] = useState(null)
    const[chequeLeafUpload, setChequeLeafUpload] = useState(null)

    const uploadAadharFront = () => {
        if(aadharFrontUpload == null)
        return;
        const imageRef = ref(storage, `Individual Partner Documents/AadharFront ${individualPartner + v4()}`)
        uploadBytes(imageRef, aadharFrontUpload).then(() => {
            alert('Aadhar Card Front Uploaded!')
        })
    }
    
    const uploadAadharBack = () => {
        if(aadharBackUpload == null)
        return;
        const imageRef = ref(storage, `Individual Partner Documents/AadharBack ${individualPartner + v4()}`)
        uploadBytes(imageRef, aadharBackUpload).then(() => {
            alert('Aadhar Card Back Uploaded!')
        })
    }
    const uploadPan = () => {
        if(panUpload == null)
        return;
        const imageRef = ref(storage, `Individual Partner Documents/panCard ${individualPartner + v4()}`)
        uploadBytes(imageRef, panUpload).then(() => {
            alert('PAN Card Uploaded!')
        })
    }
    const uploadPassbook = () => {
        if(passbookUpload == null)
        return;
        const imageRef = ref(storage, `Individual Partner Documents/passBook ${individualPartner + v4()}`)
        uploadBytes(imageRef, passbookUpload).then(() => {
            alert('Passbook Uploaded!')
        })
    }
    const uploadChequeLeaf = () => {
        if(chequeLeafUpload == null)
        return;
        const imageRef = ref(storage, `Individual Partner Documents/chequeLeaf ${individualPartner + v4()}`)
        uploadBytes(imageRef, chequeLeafUpload).then(() => {
            alert('Cheque Leaf Uploaded!')
        })
    }

  return (
    <div className='laptop:mx-36 laptop:my-5 mobile:m-5'>
        <div className='grid laptop:grid-cols-3 gap-5 mobile:grid-cols-1'>
            <div className='flex flex-col border border-gray-300 p-3 rounded'>
                <p className='text-lg m-0 font-bold'>Aadhar Card Front</p>
                <div className='flex items-center'>
                    <input type='file'
                    className='p-2 border'
                    onChange={(event) => {setAadharFrontUpload(event.target.files[0]);}}>
                    </input>
                    <button 
                    className='bg-blue-500 py-2 px-6 m-5 text-white rounded'
                    onClick={uploadAadharFront}>Upload</button>
                </div>
            </div>
            <div className='flex flex-col border border-gray-300 p-3 rounded'>
                <p className='text-lg m-0 font-bold'>Aadhar Card Back</p>
                <div className='flex items-center'>
                    <input type='file'
                    className='p-2 border'
                    onChange={(event) => {setAadharBackUpload(event.target.files[0]);}}>
                    </input>
                    <button 
                    className='bg-blue-500 py-2 px-6 m-5 text-white rounded'
                    onClick={uploadAadharBack}>Upload</button>
                </div>
            </div>
            <div className='flex flex-col border border-gray-300 p-3 rounded'>
                <p className='text-lg m-0 font-bold'>PAN Card</p>
                <div className='flex items-center'>
                    <input type='file'
                    className='p-2 border'
                    onChange={(event) => {setPanUpload(event.target.files[0]);}}>
                    </input>
                    <button 
                    className='bg-blue-500 py-2 px-6 m-5 text-white rounded'
                    onClick={uploadPan}>Upload</button>
                </div>
            </div>
            <div className='flex flex-col border border-gray-300 p-3 rounded'>
                <p className='text-lg m-0 font-bold'>Passbook Front page</p>
                <div className='flex items-center'>
                    <input type='file'
                    className='p-2 border'
                    onChange={(event) => {setPassbookUpload(event.target.files[0]);}}>
                    </input>
                    <button 
                    className='bg-blue-500 py-2 px-6 m-5 text-white rounded'
                    onClick={uploadPassbook}>Upload</button>
                </div>
            </div>
            <div className='flex flex-col border border-gray-300 p-3 rounded'>
                <p className='text-lg m-0 font-bold'>Cheque Leaf</p>
                <div className='flex items-center'>
                    <input type='file'
                    className='p-2 border'
                    onChange={(event) => {setChequeLeafUpload(event.target.files[0]);}}>
                    </input>
                    <button 
                    className='bg-blue-500 py-2 px-6 m-5 text-white rounded'
                    onClick={uploadChequeLeaf}>Upload</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default IndPartnerDocs
