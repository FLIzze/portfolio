import { Fields } from "@/app/interface";
import React from 'react';

const Cv: React.FC<Fields>  = ({fields, usedFields}) => {
    return (
        <div className='h-full px-24'>
            {fields[usedFields] == "Cv" && (
                <div className='w-full h-full'>
                    <embed src="/cv.pdf#toolbar=0" className='h-full w-full' type='application/pdf'></embed>
                </div>
            )}
        </div>
    )
}

export default Cv;