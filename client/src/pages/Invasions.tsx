import React from 'react'
import Loader from '../components/loader'
import ButtonExample from '../components/button/example'

export default function Invasions() {
    return (
        <>
            <Loader loading={false} />
            <ButtonExample className='primary' type='button' />
        </>
    )
}
