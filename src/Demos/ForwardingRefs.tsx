import React from 'react';

const CustomButton = React.forwardRef((props: any, buttonRef: React.ForwardedRef<HTMLButtonElement>) => (
    <button ref={buttonRef} className="custom-button">
        {props.children}
    </button>
));

export default CustomButton;

