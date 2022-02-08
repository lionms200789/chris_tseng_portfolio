import * as React from 'react';
import classnames from 'classnames';

const Heading = ({ title, englishTitle, classes }) => {
    return <div className={classnames('flex items-end font-bold mb-8', classes)}>
        <h3 className='text-2xl lg:text-3xl'>{title}</h3>
        <span className='mx-4 text-xl'>{englishTitle}</span>
    </div>
}

export default Heading;