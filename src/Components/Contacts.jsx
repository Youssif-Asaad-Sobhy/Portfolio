import { CONTACT } from '../constants'
import { motion } from 'framer-motion'
const Contacts = () => {
const handleWhatsAppClick = () => {
    const phoneNumber = CONTACT.phoneNo.replace(/\D/g, ''); // Remove non-numeric characters
    const message = encodeURIComponent("Hey nice portfolio");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
};

return (
    <div className='border-b border-neutral-900 pb-20'>
            <motion.h2 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1 }}
            className='my-10 text-center text-4xl'>Get in Touch</motion.h2>
            <div className="text-center tracking-tighter justify-center">
                    <motion.p 
                    whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: -100 }}
					transition={{ duration: 1 }}
                    className='my-4'>{CONTACT.address}</motion.p>
                    <motion.p 
                    whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: 100 }}
					transition={{ duration: 1 }}
                    className='my-4 cursor-pointer text-blue-500' onClick={handleWhatsAppClick}>{CONTACT.phoneNo}</motion.p>
                    <a href={`mailto:${CONTACT.email}`} className='border-b'>{CONTACT.email}</a>
            </div>
    </div>
)
}

export default Contacts