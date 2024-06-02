import React from 'react'
import BarLoader from 'react-spinners/BarLoader';

const override = {
    display: 'block',
    margin: '100px auto'
}

const Loader = ({loading}) => {
  return (
    <BarLoader 
        color='black'
        loading = {loading}
        cssOverride = {override}
        size={150}
    />
  )
}

export default Loader
