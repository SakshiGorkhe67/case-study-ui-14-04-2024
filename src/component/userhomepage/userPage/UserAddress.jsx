import React from 'react'
import '../css/UserAddress.css'
const UserAddress = () => {
    const [show, setShow] = React.useState(false)
    /*here data comes from backend*/
    const savedaddress = [{
        AddressLine1: 'Address1',
        AddressLine2: 'Address2',
        AddressLine3: 'Address3',
    }, 
    {
        AddressLine1: 'Address5',
        AddressLine2: 'Address6',
        AddressLine3: 'Address7',
    },
    {
        AddressLine1: 'Address8',
        AddressLine2: 'Address9',
        AddressLine3: 'Address10',
    }
]
  return (
    <div className='useraddress'>
       {
        !show && <h1 className='mainhead1'>Your Address</h1>
}
        {
            !show &&

            <div className='addressin'>
            {
                savedaddress.map((item, index) => {
                   return(
                       <div className='address' key={index}>
                          <span>{item.AddressLine1}</span>,
                          <span>{item.AddressLine2}</span>,
                          <span>{item.AddressLine3}</span>

                          <div className='delbtn'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                             </svg>


                          </div>
                       </div>
                   )
            })}



        </div>
        }
        {
            !show && <div className='addnewbtn'
               onClick={() => setShow(true)}
            
            >
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                 </svg>


 
            </div>
        }
        {
            show &&

            <div className='addnew'>
                <h1 className='mainhead1'>Add New Address</h1>
        
                <div className='form'>
                <div className='form-group'>
                    <label htmlFor='postalcode'>Postal Code</label>
                    <input type="text"/>
                </div>
                
                </div>
                <div className='form'>
               
                <div className='form-group'>
                    <label htmlFor='addressline1'>Address Line 1</label>
                    <input type="text"/>
                </div>
                <div className='form-group'>
                    <label htmlFor='addressline2'>Address Line 2</label>
                    <input type="text"/>
                </div>
                <div className='form-group'>
                    <label htmlFor='addressline3'>Address Line 3</label>
                    <input type="text"/>
                </div>
                </div>
                <button className='mainbutton'
                   onClick={() => setShow(false)}
                >Save</button>
            </div>
        }
    </div>
  )
}

export default UserAddress