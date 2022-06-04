import React from 'react'
import './Form.css'
const Form = () => {
    return (
        <div>
            <form>
                <div className='form'>
                    <div className='left'>
                    <textarea className='name' rows={5} cols={20}></textarea>
                       
                        <textarea className='email' rows={5} cols={20}></textarea>
                    </div>
                    <div className='right'>
                    <textarea className='message' rows={20} cols={20}></textarea>
                    </div>
                </div>
                <button type='onSubmit'>SUBMIT</button>

            </form>
        </div>
    )
}

export default Form