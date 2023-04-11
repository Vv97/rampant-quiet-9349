import React, { useRef, useEffect, useState } from 'react'

export const useThrottle = (value, delay) => {
    const throttleId = useRef(false);
    const [throttletext, setthrottletext] = useState(value)

    // console.log(value)

    useEffect(() => {
        if (!throttleId.current) {
            throttleId.current = true;
            setTimeout(() => {
                throttleId.current = false;
                setthrottletext(value)
            }, delay)
        }
    }, [delay, value]);

    return throttletext
}
