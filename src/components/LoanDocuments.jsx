import React from 'react'
import { useState } from 'react'
import { storage } from '../firebase'
import { ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid'
import { Link } from 'react-router-dom'

const LoanDocuments = () => {
    const[aadharFrontUpload, setAadharFrontUpload] = useState(null)
    const[aadharBackUpload, setAadharBackUpload] = useState(null)
    const[panUpload, setPanUpload] = useState(null)
    const[rentalUpload, setRentalUpload] = useState(null)
    const[electricBillUpload, setElectricBillUpload] = useState(null)
    const[salarySlipOneUpload, setSalarySlipOneUpload] = useState(null)
    const[salarySlipTwoUpload, setSalarySlipTwoUpload] = useState(null)
    const[salarySlipThreeUpload, setSalarySlipThreeUpload] = useState(null)
    const[companyIDCardUpload, setCompanyIDCardUpload] = useState(null)
    const[companyJoiningLetterUpload, setCompanyJoiningLetterUpload] = useState(null)
    const[passbookUpload, setPassbookUpload] = useState(null)
    const[chequeLeafUpload, setChequeLeafUpload] = useState(null)
    const[accountStatementUpload, setAccountStatementUpload] = useState(null)
    const[cibilReportUpload, setCibilReportUpload] = useState(null)
    const[nameOnAadhar, setNameOnAadhar] = useState('')
    const[accountStatementPassword, setAccountStatementPassword] = useState('')

    const uploadAadharFront = () => {
        if(aadharFrontUpload == null)
        return;
        const imageRef = ref(storage, `loanDocuments/${nameOnAadhar}/AadharFront ${nameOnAadhar + v4()}`)
        uploadBytes(imageRef, aadharFrontUpload).then(() => {
            alert('Aadhar Card Front Uploaded!')
        })
    }
    const uploadAadharBack = () => {
        if(aadharBackUpload == null)
        return;
        const imageRef = ref(storage, `loanDocuments/AadharBack ${nameOnAadhar + v4()}`)
        uploadBytes(imageRef, aadharBackUpload).then(() => {
            alert('Aadhar Card Back Uploaded!')
        })
    }

    const uploadPan = () => {
        if(panUpload == null)
        return;
        const imageRef = ref(storage, `loanDocuments/PanCard ${nameOnAadhar + v4()}`)
        uploadBytes(imageRef, panUpload).then(() => {
            alert('PAN Card Uploaded!')
        })
    }

    const uploadRental = () => {
        if(rentalUpload == null)
        return;
        const imageRef = ref(storage, `loanDocuments/Rental ${nameOnAadhar + v4()}`)
        uploadBytes(imageRef, rentalUpload).then(() => {
            alert('Rental agreement Uploaded!')
        })
    }

    const uploadElectricBill = () => {
        if(electricBillUpload == null)
        return;
        const imageRef = ref(storage, `loanDocuments/ElectricBill ${nameOnAadhar + v4()}`)
        uploadBytes(imageRef, electricBillUpload).then(() => {
            alert('Electric Bill Uploaded!')
        })
    }

    const uploadSalarySlipOne = () => {
        if(salarySlipOneUpload == null)
        return;
        const imageRef = ref(storage, `loanDocuments/SalarySlipOne ${nameOnAadhar + v4()}`)
        uploadBytes(imageRef, salarySlipOneUpload).then(() => {
            alert('SalarySlip One Uploaded!')
        })
    }

    const uploadSalarySlipTwo = () => {
        if(salarySlipTwoUpload == null)
        return;
        const imageRef = ref(storage, `loanDocuments/SalarySlipTwo ${nameOnAadhar + v4()}`)
        uploadBytes(imageRef, salarySlipTwoUpload).then(() => {
            alert('SalarySlip Two Uploaded!')
        })
    }

    const uploadSalarySlipThree = () => {
        if(salarySlipThreeUpload == null)
        return;
        const imageRef = ref(storage, `loanDocuments/SalarySlipThree ${nameOnAadhar + v4()}`)
        uploadBytes(imageRef, salarySlipThreeUpload).then(() => {
            alert('SalarySlip Three Uploaded!')
        })
    }

    const uploadCompanyIDCard = () => {
        if(companyIDCardUpload == null)
        return;
        const imageRef = ref(storage, `loanDocuments/CompanyIDCard ${nameOnAadhar + v4()}`)
        uploadBytes(imageRef, companyIDCardUpload).then(() => {
            alert('Company ID Card Uploaded!')
        })
    }

    const uploadCompanyJoiningLetter = () => {
        if(companyJoiningLetterUpload == null)
        return;
        const imageRef = ref(storage, `loanDocuments/CompanyJoiningLetter ${nameOnAadhar + v4()}`)
        uploadBytes(imageRef, companyJoiningLetterUpload).then(() => {
            alert('Company Joining letter Uploaded!')
        })
    }

    const uploadPassbook = () => {
        if(passbookUpload == null)
        return;
        const imageRef = ref(storage, `loanDocuments/Passbook ${nameOnAadhar + v4()}`)
        uploadBytes(imageRef, passbookUpload).then(() => {
            alert('Passbook Uploaded!')
        })
    }

    const uploadChequeLeaf = () => {
        if(chequeLeafUpload == null)
        return;
        const imageRef = ref(storage, `loanDocuments/ChequeLeaf ${nameOnAadhar + v4()}`)
        uploadBytes(imageRef, chequeLeafUpload).then(() => {
            alert('Cheque Leaf Uploaded!')
        })
    }

    const uploadAccountStatement = () => {
        if(accountStatementUpload == null)
        return;
        const imageRef = ref(storage, `loanDocuments/AccountStatement ${nameOnAadhar + v4()}`)
        uploadBytes(imageRef, accountStatementUpload).then(() => {
            alert('AccountStatement Uploaded!')
        })
    }

    const uploadCibilReport = () => {
        if(cibilReportUpload == null)
        return;
        const imageRef = ref(storage, `loanDocuments/CibilReport ${nameOnAadhar + v4()}`)
        uploadBytes(imageRef, cibilReportUpload).then(() => {
            alert('CIBIL report Uploaded!')
        })
    }

  return (
    <div className='laptop:m-10 mobile:m-0'>
            <div className='flex-flex-col m-5'>
                <p>Name on PAN Card :</p>
                <input type='text' 
                className='my-2 p-2 border border-black'
                value={nameOnAadhar}
                onChange={(event) => {setNameOnAadhar(event.target.value)}}>
                </input>
            </div>

            <div className='grid laptop:grid-cols-3 m-5 mobile:grid-cols-1 mobile:m-1'>
            <div className='flex flex-col border border-gray-300 p-3 m-3 rounded'>
                <p className='text-lg m-0 font-bold'>Aadhar Card Front</p>
                <div className='flex items-center'>
                    <input type='file'
                    className='p-2 border'
                    onChange={(event) => {setAadharFrontUpload(event.target.files[0]);}} required>
                    </input>
                    <button 
                    className='bg-blue-500 py-2 px-6 m-5 text-white rounded'
                    onClick={uploadAadharFront}>Upload</button>
                </div>
            </div>

            <div className='flex flex-col border border-gray-300 p-3 m-3 rounded'>
                <p className='text-lg m-0 font-bold'>Aadhar Card Back</p>
                <div className='flex items-center'>
                    <input type='file'
                    className='p-2 border'
                    onChange={(event) => {setAadharBackUpload(event.target.files[0]);}} required>
                    </input>
                    <button 
                    className='bg-blue-500 py-2 px-6 m-5 text-white rounded'
                    onClick={uploadAadharBack}>Upload</button>
                </div>
            </div>

            <div className='flex flex-col border border-gray-300 p-3 m-3 rounded'>
                <p className='text-lg m-0 font-bold'>PAN Card</p>
                <div className='flex items-center'>
                    <input type='file'
                    className='p-2 border'
                    onChange={(event) => {setPanUpload(event.target.files[0]);}} required>
                    </input>
                    <button 
                    className='bg-blue-500 py-2 px-6 m-5 text-white rounded'
                    onClick={uploadPan}>Upload</button>
                </div>
            </div>

            <div className='flex flex-col border border-gray-300 p-3 m-3 rounded'>
                <p className='text-lg m-0 font-bold'>Rental / Lease Agreement</p>
                <div className='flex items-center'>
                    <input type='file'
                    className='p-2 border'
                    onChange={(event) => {setRentalUpload(event.target.files[0]);}} required>
                    </input>
                    <button 
                    className='bg-blue-500 py-2 px-6 m-5 text-white rounded'
                    onClick={uploadRental}>Upload</button>
                </div>
            </div>

            <div className='flex flex-col border border-gray-300 p-3 m-3 rounded'>
                <p className='text-lg m-0 font-bold'>Electricity Bill</p>
                <div className='flex items-center'>
                    <input type='file'
                    className='p-2 border'
                    onChange={(event) => {setElectricBillUpload(event.target.files[0]);}} required>
                    </input>
                    <button 
                    className='bg-blue-500 py-2 px-6 m-5 text-white rounded'
                    onClick={uploadElectricBill}>Upload</button>
                </div>
            </div>

            <div className='flex flex-col border border-gray-300 p-3 m-3 rounded'>
                <p className='text-lg m-0 font-bold'>Salary Slip(1)</p>
                <div className='flex items-center'>
                    <input type='file'
                    className='p-2 border'
                    onChange={(event) => {setSalarySlipOneUpload(event.target.files[0]);}} required>
                    </input>
                    <button 
                    className='bg-blue-500 py-2 px-6 m-5 text-white rounded'
                    onClick={uploadSalarySlipOne}>Upload</button>
                </div>
            </div>

            <div className='flex flex-col border border-gray-300 p-3 m-3 rounded'>
                <p className='text-lg m-0 font-bold'>Salary Slip(2)</p>
                <div className='flex items-center'>
                    <input type='file'
                    className='p-2 border'
                    onChange={(event) => {setSalarySlipTwoUpload(event.target.files[0]);}} required>
                    </input>
                    <button 
                    className='bg-blue-500 py-2 px-6 m-5 text-white rounded'
                    onClick={uploadSalarySlipTwo}>Upload</button>
                </div>
            </div>

            <div className='flex flex-col border border-gray-300 p-3 m-3 rounded'>
                <p className='text-lg m-0 font-bold'>Salary Slip(3)</p>
                <div className='flex items-center'>
                    <input type='file'
                    className='p-2 border'
                    onChange={(event) => {setSalarySlipThreeUpload(event.target.files[0]);}} required>
                    </input>
                    <button 
                    className='bg-blue-500 py-2 px-6 m-5 text-white rounded'
                    onClick={uploadSalarySlipThree}>Upload</button>
                </div>
            </div>

            <div className='flex flex-col border border-gray-300 p-3 m-3 rounded'>
                <p className='text-lg m-0 font-bold'>Company ID Card</p>
                <div className='flex items-center'>
                    <input type='file'
                    className='p-2 border'
                    onChange={(event) => {setCompanyIDCardUpload(event.target.files[0]);}} required>
                    </input>
                    <button 
                    className='bg-blue-500 py-2 px-6 m-5 text-white rounded'
                    onClick={uploadCompanyIDCard}>Upload</button>
                </div>
            </div>

            <div className='flex flex-col border border-gray-300 p-3 m-3 rounded'>
                <p className='text-lg m-0 font-bold'>Company Joining Letter</p>
                <div className='flex items-center'>
                    <input type='file'
                    className='p-2 border'
                    onChange={(event) => {setCompanyJoiningLetterUpload(event.target.files[0]);}} required>
                    </input>
                    <button 
                    className='bg-blue-500 py-2 px-6 m-5 text-white rounded'
                    onClick={uploadCompanyJoiningLetter}>Upload</button>
                </div>
            </div>

            <div className='flex flex-col border border-gray-300 p-3 m-3 rounded'>
                <p className='text-lg m-0 font-bold'>Passbook Front Page</p>
                <div className='flex items-center'>
                    <input type='file'
                    onChange={(event) => {setPassbookUpload(event.target.files[0]);}} required>
                    </input>
                    <button 
                    className='bg-blue-500 py-2 px-6 m-5 text-white rounded'
                    onClick={uploadPassbook}>Upload</button>
                </div>
            </div>

            <div className='flex flex-col border border-gray-300 p-3 m-3 rounded'>
                <p className='text-lg m-0 font-bold'>Cheque Leaf</p>
                <div className='flex items-center'>
                    <input type='file'
                    onChange={(event) => {setChequeLeafUpload(event.target.files[0]);}} required>
                    </input>
                    <button 
                    className='bg-blue-500 py-2 px-6 m-5 text-white rounded'
                    onClick={uploadChequeLeaf}>Upload</button>
                </div>
            </div>

            <div className='flex flex-col border border-gray-300 p-3 m-3 rounded'>
                <p className='text-lg m-0 font-bold'>CIBIL Report (cibil.com, experian)</p>
                <div className='flex items-center'>
                    <input type='file'
                    onChange={(event) => {setCibilReportUpload(event.target.files[0]);}}>
                    </input>
                    <button 
                    className='bg-blue-500 py-2 px-6 m-5 text-white rounded'
                    onClick={uploadCibilReport}>Upload</button>
                </div>
            </div>

            <div className='flex flex-col border border-gray-300 p-3 m-3 rounded'>
                <p className='text-lg m-0 font-bold'>Account Statement</p>
                <div className='flex items-center'>
                    <input type='file'
                    onChange={(event) => {setAccountStatementUpload(event.target.files[0]);}} required>
                    </input>
                    <button 
                    className='bg-blue-500 py-2 px-6 m-5 text-white rounded'
                    onClick={uploadAccountStatement}>Upload</button>
                </div>
            </div>

            <div className='flex-flex-col m-5'>
                <p>If password?</p>
                <input type='password' 
                placeholder='Statement password'
                className='my-2 p-2 border border-black'
                value={accountStatementPassword}
                onChange={(event) => {setAccountStatementPassword(event.target.value)}}>
                </input>
            </div>
        </div>

        <div>
            <Link to='/success'>
            <button 
            className='bg-blue-500 py-2 px-6 m-5 text-white rounded laptop:w-1/4 mobile:w-3/4'
            >Proceed &rArr;
            </button>
            </Link>
        </div>
    </div>
  )
}

export default LoanDocuments
