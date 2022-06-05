import React from 'react'
import './Contact.css'
import Form from './Form'
import adrs from '../res/drawable/address_dark.svg'
import phone from '../res/drawable/phone_dark.svg'
import email from '../res/drawable/email_dark.svg'
const Contact = () => {
    return (
        <div className='contacts'>
            <div className='details'>
                <div className='infos'>
                    <div className="img"><img src={adrs} alt="" /></div>
                    <div className="info">
                        <div className="info1">
                            NCR, Quezon City 1119
                        </div>
                        <div className="info2">
                            079 Lanzones Street Barangay Payatas Quezon City
                        </div>
                    </div>
                </div>

                <div className='infos'>
                    <div className="img"><img src={email} alt="" /></div>
                    <div className="info">
                        <div className="info1">
                            NCR, Quezon City 1119
                        </div>
                        <div className="info2">
                            079 Lanzones Street Barangay Payatas Quezon City
                        </div>
                    </div>
                </div>

                <div className='infos'>
                    <div className="img">
                        <img src={phone} alt="" />
                    </div>
                    <div className="info">
                        <div className="info1">
                            NCR, Quezon City 1119
                        </div>
                        <div className="info2">
                            079 Lanzones Street Barangay Payatas Quezon City
                        </div>
                    </div>

                    
                </div>
            </div>
            <div className="form">
                <Form />
            </div>
        </div>
    )
}

export default Contact