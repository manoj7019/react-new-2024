import React from 'react'
import { useState } from 'react'
import { storage } from '../../firebase'
import { ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid'

const CompPartnerDocs = () => {
    const[nameOnPan, setNameOnPan] = useState('');

    const[aadharFrontUpload, setAadharFrontUpload] = useState(null)
    const[aadharBackUpload, setAadharBackUpload] = useState(null)
    const[panUpload, setPanUpload] = useState(null)
    const[passbookUpload, setPassbookUpload] = useState(null)
    const[chequeLeafUpload, setChequeLeafUpload] = useState(null)

    const uploadAadharFront = () => {
        if(aadharFrontUpload == null)
        return;
        const imageRef = ref(storage, `Company Partner Documents/AadharFront ${companyPartner + v4()}`)
        uploadBytes(imageRef, aadharFrontUpload).then(() => {
            alert('Aadhar Card Front Uploaded!')
        })
    }
    
    const uploadAadharBack = () => {
        if(aadharBackUpload == null)
        return;
        const imageRef = ref(storage, `Company Partner Documents/AadharBack ${companyPartner+ v4()}`)
        uploadBytes(imageRef, aadharBackUpload).then(() => {
            alert('Aadhar Card Back Uploaded!')
        })
    }
    const uploadPan = () => {
        if(panUpload == null)
        return;
        const imageRef = ref(storage, `Company Partner Documents/panCard ${companyPartner + v4()}`)
        uploadBytes(imageRef, panUpload).then(() => {
            alert('PAN Card Uploaded!')
        })
    }
    const uploadPassbook = () => {
        if(passbookUpload == null)
        return;
        const imageRef = ref(storage, `Company Partner Documents/passBook ${companyPartner + v4()}`)
        uploadBytes(imageRef, passbookUpload).then(() => {
            alert('Passbook Uploaded!')
        })
    }
    const uploadChequeLeaf = () => {
        if(chequeLeafUpload == null)
        return;
        const imageRef = ref(storage, `Company Partner Documents/chequeLeaf ${companyPartner + v4()}`)
        uploadBytes(imageRef, chequeLeafUpload).then(() => {
            alert('Cheque Leaf Uploaded!')
        })
    }

  return (
    <div className='laptop:mx-36 laptop:my-5 mobile:m-5'>
        <div className='grid laptop:grid-cols-4 gap-5 mobile:grid-cols-1 mobile:m-0'>
            <div className='flex flex-col'>
                <p>Name on PAN:</p>
                <input className='my-2 p-2 border border-black'
                type='text' name='CompanyName' placeholder='Name as per Aadhar' 
                value={nameOnPan}
                onChange={(e)=> {e.target.value()}}>
                </input>
            </div>
            <div className='flex flex-col border border-gray-300 p-3 rounded'>
                <p className='text-lg m-0 font-bold'>Company Aadhar Front</p>
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
                <p className='text-lg m-0 font-bold'>Company Aadhar Back</p>
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
                <p className='text-lg m-0 font-bold'>Company PAN</p>
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
                <p className='text-lg m-0 font-bold'>Passbook Front</p>
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

export default CompPartnerDocs
