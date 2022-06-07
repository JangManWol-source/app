import { Button } from '@mui/material'
import React from 'react'
import './Form.css'
const Form = () => {
    return (
        <div>
            <form>
                <div className='form'>
                    <div className='left'>
                    <textarea className='name' rows={5} cols={20} placeholder='Username'></textarea>
                       
                        <textarea className='email' rows={5} cols={20} placeholder='Email address'></textarea>
                    </div>
                    <div className='right'>
                    <textarea className='message' rows={20} cols={20} placeholder='Enter Message'></textarea>
                    </div>
                </div>
                <Button type='onSubmit' variant='contained'>SUBMIT</Button>

            </form>
        </div>
    )
}

export default Form