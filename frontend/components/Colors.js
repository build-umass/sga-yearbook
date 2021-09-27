import React from 'react'

const Colors = ({colors}) => {
    return (
        <div className="colors">
            {
                colors.map((color, index) =>(
                    <button style={{background: color}} key={index} />
                ))
            }
        </div>
    )
}

export default Colors;
