import React from 'react'
import { useState } from 'react'
import IndPartnerDocs from './IndPartnerDocs'
import IndPartnerForm from './IndPartnerForm'

const PartnerButton = () => {
    const[showIndPartnerForm, setShowIndPartnerForm] = useState(false)
    const[showCompPartnerForm, setShowCompPartnerForm] = useState(false)

    function handleIndPartnerForm() {
        setShowIndPartnerForm(showIndPartnerForm);
    }

    function handleCompPartnerForm() {
        setShowCompPartnerForm(showCompPartnerForm);
    }

  return (
    <div>
      <div className='flex flex-col items-center'>
        <button onClick={handleIndPartnerForm}
        className='bg-blue-500 mx-auto px-10 py-2 laptop:text-3xl mobile:text-2xl mobile:rounded-2xl text-white laptop:rounded-3xl'>
            Partner as <b>Company</b>
        </button>
        { showIndPartnerForm && 
        <>
          <IndPartnerDocs />
          <IndPartnerForm />
        </>
        }
    </div>
    </div>
  )
}

export default PartnerButton
