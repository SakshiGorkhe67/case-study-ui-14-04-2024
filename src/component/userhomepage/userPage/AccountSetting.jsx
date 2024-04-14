import React, { useState } from 'react';
import '../css/AccountSetting.css';

function AccountSettings() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        // Perform form submission here (send formData to backend)
        console.log('Form submitted:', formData);
        // Reset form fields after submission if needed
        setFormData({
            name: '',
            phone: '',
            email: ''
        });
    };

    return (
        <div className='accountsettings'>
            <h1 className='mainhead1'>Personal Information</h1>
            <div className='form'>
                <div className='form-group'>
                   <label htmlFor='name'>Your Name<span>*</span></label>
                   <input type='text' name='name' id='name' value={formData.name} onChange={handleChange} />
                </div>

                <div className='form-group'>
                   <label htmlFor='phone'>Phone/Mobile<span>*</span></label>
                   <input type='text' name='phone' id='phone' value={formData.phone} onChange={handleChange} />
                </div>

                <div className='form-group'>
                   <label htmlFor='email'>Email<span>*</span></label>
                   <input type='email' name='email' id='email' value={formData.email} onChange={handleChange} />
                </div>
            </div>
            <button className='mainbutton1' onClick={handleSubmit}>Save Changes</button>
        </div>
    );
}

export default AccountSettings;
