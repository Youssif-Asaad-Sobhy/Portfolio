import React from 'react'
import { CONTACT } from '../constants'

const Contacts = () => {
const handleWhatsAppClick = () => {
    const phoneNumber = CONTACT.phoneNo.replace(/\D/g, ''); // Remove non-numeric characters
    const message = encodeURIComponent("Hey nice portfolio");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
};

return (
    <div className='border-b border-neutral-900 pb-20'>
            <h2 className='my-10 text-center text-4xl'>Get in Touch</h2>
            <div className="text-center tracking-tighter">
                    <p className='my-4'>{CONTACT.address}</p>
                    <p className='my-4 cursor-pointer text-blue-500' onClick={handleWhatsAppClick}>{CONTACT.phoneNo}</p>
                    <a href={`mailto:${CONTACT.email}`} className='border-b'>{CONTACT.email}</a>
            </div>
    </div>
)
}

export default Contacts