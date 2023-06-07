import React, { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(()=>{
        document.title = `${title} - Summer Camp`;
    },[title])
};

export default useTitle;