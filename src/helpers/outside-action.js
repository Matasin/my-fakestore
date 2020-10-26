import React, { useRef, useEffect } from "react";

const OutsideFunction = (ref, action) => {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                return action();
            }
        }
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [ref, action]);
}

const OutsideAction = ({children, action}) => {
    const wrapperRef = useRef(null);
    OutsideFunction(wrapperRef, action);

    return <div ref={wrapperRef}>{children}</div>;
}
export default OutsideAction