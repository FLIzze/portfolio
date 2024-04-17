import React from 'react';

const Cv: React.FC<Fields>  = ({fields, usedField}) => {
    return (
        <div className='h-full px-24'>
            {fields[usedField] == "Cv" && (
                <div className='w-full h-full'>
                    <embed src="/cv.pdf#toolbar=0" className='h-full w-full' type='application/pdf'></embed>
                </div>
            )}
        </div>
    )
}

export default Cv;