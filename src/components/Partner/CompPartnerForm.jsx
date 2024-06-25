import React from 'react'
import { useState } from 'react';

const CompPartnerForm = () => {
    const [companyPartner, setCompanyPartner] = useState(
        {
            CompanyName: '',
            Email: '',
            Phone: '',
            CompanyAadharNumber: '',
            CompanyPanNumber: '',
            CompanyType: '',
            CompanyAddress: '',
            City: '',
            State: '',
            Pincode: '',
            CompanyBankName: '',
            AccountHolderName: '',
            AccountType:'',
            AccountNumber: '',
            IFSCCode: ''
        }
    )

    let name, value;

    const data = (e) => {
        name = e.target.name;
        value = e.target.value;
        setCompanyPartner({...companyPartner, [name]: value})
    }
    console.log(companyPartner);

    const getCompanyPartnerData = async (e) => {
        const {CompanyName, Email, Phone, 
            CompanyAadharNumber, CompanyPanNumber, CompanyType, 
            CompanyAddress, City, State, Pincode,
            CompanyBankName, AccountHolderName, AccountType, AccountNumber, IFSCCode
            } = user;
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
            CompanyName, Email, Phone,
            CompanyAadharNumber, CompanyPanNumber, CompanyType, 
            CompanyAddress, City, State, Pincode,
            CompanyBankName, AccountHolderName, AccountType, AccountNumber, IFSCCode
            })
        }
        const res = await fetch(
            'https://upload-file-to-db-default-rtdb.firebaseio.com/CompanyPartnerData.json',
            options
        )
        if(res) {
            alert('Details submitted!')
        } else {
            alert('Error occured')
        }
    }

  return (
    <div>
      <div className='flex flex-col laptop:items-center gap-10 mobile:m-5'>
            <h1 className='text-center text-xl font-bold'>Please fill the form below to proceed</h1>
            <form method='POST'>
            <div className='grid laptop:grid-cols-4 mobile:grid-cols-1 mobile:m-0 gap-5'>
                <div className='flex flex-col'>
                    <p>Name of the Company:</p>
                    <input className='my-2 p-2 border border-black'
                    type='text' name='CompanyName' placeholder='Name as per Aadhar' 
                    value={companyPartner.CompanyName}
                    onChange={data}>
                    </input>
                </div>

                <div className='flex flex-col'>
                    <p>Email ID :</p>
                    <input className='my-2 p-2 border border-black'
                    type='text' name='Email' placeholder='Email' 
                    value={companyPartner.Email}
                    onChange={data}>
                    </input>
                </div>

                <div className='flex flex-col'>
                    <p>Phone Number :</p>
                    <input className='my-2 p-2 border border-black'
                    type='text' name='Phone' placeholder='Phone' 
                    value={companyPartner.Phone}
                    onChange={data}>
                </input>
                </div>

                <div className='flex flex-col'>
                    <p>Aadhar Number of Company director:</p>
                    <input className='my-2 p-2 border border-black'
                    type='text' name='CompanyAadharNumber' placeholder='Aadhar Number' 
                    value={companyPartner.CompanyAadharNumber}
                    onChange={data}>
                    </input>
                </div>

                <div className='flex flex-col'>
                    <p>Company PAN Number (if Pvt. Ltd):</p>
                    <input className='my-2 p-2 border border-black'
                    type='text' name='CompanyPanNumber' placeholder='PAN Number' 
                    value={companyPartner.CompanyPanNumber}
                    onChange={data}>
                    </input>
                </div>

                <div className='flex flex-col'>
                    <p>Company Type :</p>
                    <select
                        className='my-2 p-2 border border-black'
                        name='CompanyType'
                        value={companyPartner.CompanyType}
                        onChange={data}
                    >
                        <option value='Select'>Select</option>
                        <option value='Proprietorship'> Proprietorship </option>
                        <option value='Private Limited'> Private Limited </option>
                        <option value='One person company'> One person company </option>
                        <option value='Partnership'> Partnership </option>
                    </select>
                </div>

                <div className='flex flex-col'>
                    <p>Company Address :</p>
                    <input className='my-2 p-2 border border-black'
                    type='text' name='CompanyAddress' 
                    value={companyPartner.Address}
                    onChange={data}>
                    </input>
                </div>

                <div className='flex flex-col'>
                    <p>City :</p>
                    <input className='my-2 p-2 border border-black'
                    type='text' name='City' 
                    value={companyPartner.City}
                    onChange={data}>
                    </input>
                </div>

                <div className='flex flex-col'>
                    <p>State :</p>
                    <input className='my-2 p-2 border border-black'
                    type='text' name='State' 
                    value={companyPartner.State}
                    onChange={data}>
                    </input>
                </div>

                <div className='flex flex-col'>
                    <p>Pincode :</p>
                    <input className='my-2 p-2 border border-black'
                    type='text' name='Pincode' 
                    value={companyPartner.Pincode}
                    onChange={data}>
                </input>
                </div>
            </div>

            <h2 className='text-2xl font-bold my-5'>Bank Details</h2>

            <div  className='mt-5 grid laptop:grid-cols-4 laptop:gap-6 tablet:grid-cols-2 tablet:gap-5 mobile:grid-cols-1 mobile:gap-2 w-full'>
                <div className='flex flex-col'>
                    <p>Company Bank name :</p>
                    <input className='my-2 p-2 border border-black'
                    type='text' name='CompanyBankName' 
                    placeholder='Bank Name'
                    value={companyPartner.CompanyBankName}
                    onChange={data}>
                    </input>
                </div>

                <div className='flex flex-col'>
                    <p>Account Holder Name :</p>
                    <input className='my-2 p-2 border border-black'
                    type='text' name='AccountHolderName' 
                    placeholder='Account Holder Name'
                    value={companyPartner.AccountHolderName}
                    onChange={data}>
                    </input>
                </div>

                <div className='flex flex-col'>
                    <p>Account Type :</p>
                    <select
                        className='my-2 p-2 border border-black'
                        name='Gender'
                        value={companyPartner.AccountType}
                        onChange={data}
                    >
                        <option value='Select'>Select</option>
                        <option value='Proprietorship'> Current </option>
                        <option value='Private Limited'> Savings </option>
                        <option value='One person company'> Salaried </option>
                    </select>
                </div>

                <div className='flex flex-col'>
                    <p>Account Number :</p>
                    <input className='my-2 p-2 border border-black'
                    type='text' name='AccountNumber' 
                    placeholder='Account Number'
                    value={companyPartner.AccountNumber}
                    onChange={data}>
                    </input>
                </div>
                
                <div className='flex flex-col'>
                    <p>IFSC Code :</p>
                    <input className='my-2 p-2 border border-black'
                    type='text' name='IFSCCode'
                    placeholder='IFSC Code' 
                    value={companyPartner.IFSCCode}
                    onChange={data}>
                    </input>
                </div>
            </div>

            <div>
                <button 
                className='bg-blue-500 py-2 px-6 my-5 text-white rounded laptop:w-1/4 mobile:w-3/4'
                onClick={getCompanyPartnerData}
                >Save & Continue
                </button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default CompPartnerForm
