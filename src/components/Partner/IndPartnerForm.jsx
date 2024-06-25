import React from 'react'
import { useState } from 'react';

const IndPartnerForm = () => {
    const [individualPartner, setIndividualPartner] = useState(
        {
            FullName: '',
            Email: '',
            Phone: '',
            DOB: '',
            AadharNumber: '',
            PanNumber: '',
            Gender: '',
            WorkExperience: '',
            MaritalStatus: '',
            Address: '',
            City: '',
            State: '',
            Pincode: '',
            BankName: '',
            AccountHolderName: '',
            AccountNumber: '',
            IFSCCode: ''
        }
    )

    let name, value;

    const data = (e) => {
        name = e.target.name;
        value = e.target.value;
        setIndividualPartner({...individualPartner, [name]: value})
    }
    console.log(individualPartner);

    const getIndividualPartnerData = async (e) => {
        const {FullName, Email, Phone, DOB, AadharNumber, PanNumber, Gender, MaritalStatus,
            Address, City, State, Pincode,
            BankName, AccountHolderName, AccountNumber, IFSCCode
            } = user;
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                FullName, Email, Phone, DOB, AadharNumber, PanNumber, Gender, MaritalStatus,
                Address, City, State, Pincode,
                BankName, AccountHolderName, AccountNumber, IFSCCode
            })
        }
        const res = await fetch(
            'https://upload-file-to-db-default-rtdb.firebaseio.com/IndividualPartnerData.json',
            options
        )
        if(res) {
            alert('Individual Partner Details submitted!')
        } else {
            alert('Error occured')
        }
    }

  return (
    <div>
      <div className='flex flex-col laptop:items-center gap-10 mobile:mx-5'>
        <h1 className='text-xl text-center font-bold'>Please fill the form below to proceed</h1>
        <form method='POST'>
        <div className='grid laptop:grid-cols-4 mobile:grid-cols-1 mobile:m-0 gap-5'>
            <div className='flex flex-col'>
                <p>Name as per Aadhaar :</p>
                <input className='my-2 p-2 border border-black'
                type='text' name='FullName' placeholder='Name as per Aadhar' 
                value={individualPartner.FullName}
                onChange={data}>
                </input>
            </div>

            <div className='flex flex-col'>
                <p>Email ID :</p>
                <input className='my-2 p-2 border border-black'
                type='text' name='Email' placeholder='Email' 
                value={individualPartner.Email}
                onChange={data}>
                </input>
            </div>

            <div className='flex flex-col'>
                <p>Phone Number :</p>
                <input className='my-2 p-2 border border-black'
                type='text' name='Phone' placeholder='Phone' 
                value={individualPartner.Phone}
                onChange={data}>
            </input>
            </div>

            <div className='flex flex-col'>
                <p>Date of Birth :</p>
                <input className='my-2 p-2 border border-black'
                type='date' name='DOB' placeholder='Phone' 
                value={individualPartner.DOB}
                onChange={data}>
            </input>
            </div>

            <div className='flex flex-col'>
                <p>Aadhar Number :</p>
                <input className='my-2 p-2 border border-black'
                type='text' name='AadharNumber' placeholder='Aadhar Number' 
                value={individualPartner.AadharNumber}
                onChange={data}>
                </input>
            </div>

            <div className='flex flex-col'>
                <p>PAN Number :</p>
                <input className='my-2 p-2 border border-black'
                type='text' name='PanNumber' placeholder='PAN Number' 
                value={individualPartner.PanNumber}
                onChange={data}>
                </input>
            </div>

            <div className='flex flex-col'>
                <p>Gender :</p>
                <select
                    className='my-2 p-2 border border-black'
                    name='Gender'
                    value={individualPartner.Gender}
                    onChange={data}
                >
                    <option value='Select'>Select</option>
                    <option value='Male'> Male </option>
                    <option value='Female'> Female </option>
                    <option value='Others'> Others </option>
                </select>
            </div>

            <div className='flex laptop:flex-row mobile:flex-col mobile:items-start laptop:items-center gap-3'>
                <p>Marital Status :</p>
                <label>
                    <input className='m-1 p-2 border border-black'
                    type='radio' name='MaritalStatus' placeholder='PAN Number' 
                    value='Single'
                    onChange={data}>
                    </input>
                    Single
                </label>

                <label>
                    <input className='m-1 p-2 border border-black'
                    type='radio' name='MaritalStatus' placeholder='PAN Number' 
                    value='Married'
                    onChange={data}>
                    </input>
                    Married
                </label>
            </div>

            <div className='flex flex-col'>
                <p>Permanent Address :</p>
                <input className='my-2 p-2 border border-black'
                type='text' name='PermanentAddress' 
                value={individualPartner.Address}
                onChange={data}>
                </input>
            </div>

            <div className='flex flex-col'>
                <p>City :</p>
                <input className='my-2 p-2 border border-black'
                type='text' name='PermanentCity' 
                value={individualPartner.City}
                onChange={data}>
                </input>
            </div>

            <div className='flex flex-col'>
                <p>State :</p>
                <input className='my-2 p-2 border border-black'
                type='text' name='PermanentState' 
                value={individualPartner.State}
                onChange={data}>
                </input>
            </div>

            <div className='flex flex-col'>
                <p>Pincode :</p>
                <input className='my-2 p-2 border border-black'
                type='text' name='PermanentPincode' 
                value={individualPartner.Pincode}
                onChange={data}>
            </input>
            </div>
        </div>

        <h2 className='text-2xl font-bold my-5'>Bank Details</h2>

        <div  className='mt-5 grid laptop:grid-cols-4 laptop:gap-6 tablet:grid-cols-2 tablet:gap-5 mobile:grid-cols-1 mobile:gap-2 w-full'>
            <div className='flex flex-col'>
                <p>Name of the Bank :</p>
                <input className='my-2 p-2 border border-black'
                type='text' name='BankName' 
                placeholder='Bank Name'
                value={individualPartner.BankName}
                onChange={data}>
                </input>
            </div>

            <div className='flex flex-col'>
                <p>Account Holder Name :</p>
                <input className='my-2 p-2 border border-black'
                type='text' name='AccountHolderName' 
                placeholder='Account Holder Name'
                value={individualPartner.AccountHolderName}
                onChange={data}>
                </input>
            </div>

            <div className='flex flex-col'>
                <p>Account Number :</p>
                <input className='my-2 p-2 border border-black'
                type='text' name='AccountNumber' 
                placeholder='Account Number'
                value={individualPartner.AccountNumber}
                onChange={data}>
                </input>
            </div>
            
            <div className='flex flex-col'>
                <p>IFSC Code :</p>
                <input className='my-2 p-2 border border-black'
                type='text' name='IFSCCode'
                placeholder='IFSC Code' 
                value={individualPartner.IFSCCode}
                onChange={data}>
                </input>
            </div>
        </div>

        <div>
            <button 
            className='bg-blue-500 py-2 px-6 my-5 text-white rounded laptop:w-1/4 mobile:w-3/4'
            onClick={getIndividualPartnerData}
            >Save & Continue
            </button>
        </div>
        </form>
    </div>
    </div>
  )
}

export default IndPartnerForm
