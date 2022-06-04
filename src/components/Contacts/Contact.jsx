import React from 'react'
import './Contact.css'
import Form from './Form'
const Contact = () => {
    return (
        <div className='contacts'>
            <div className='details'>
                <div className='infos'>
                    <div className="img">IMG</div>
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
                    <div className="img">IMG</div>
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
                    <div className="img">IMG</div>
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