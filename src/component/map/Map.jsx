import React from 'react'
import "./Map.css"
const Map = () => {
    return (
        <div className='contact-map-area'>
            <iframe
                src="https://www.google.com/maps?q=24.89225,67.06403&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title='Google Map'
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    )
}

export default Map