import React, { forwardRef, RefObject } from 'react';
import { BEM } from '../login';
import './input.scss';

let uniqueID = 0;

const FormInput = forwardRef((props: { label: string, placeholder?: string, type?: string, onInput?: () => void, onBlur?: () => void, onFocus?: () => void }, ref: any) => {

    const currentId = uniqueID++;

    const bem = BEM('form-input');
    return (<div className={bem()}>
        <label className={bem('label')} htmlFor={`formInput-${currentId}`}>{props.label}</label>
        <input onBlur={props.onBlur} onFocus={props.onFocus} onInput={props.onInput} ref={ref} type={props.type} className={bem('input')} id={`formInput-${currentId}`} />
    </div>);
});

export default FormInput;