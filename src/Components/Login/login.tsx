import { createRef, useCallback, useEffect, useState } from 'react';
import FormInput from './input/input';
import './login.scss';
import face from '../../assets/face.png';
import eyes from '../../assets/eyes.png';
import pawLeftImage from '../../assets/paw-left.png';
import pawRightImage from '../../assets/paw-right.png';

export const BEM = (block: string) => {

    const generate = (element?: string, modifier?: string) => {
        return `${block}${!!element ? `__${element}` : ''}${!!modifier ? `--${modifier}` : ''}`;
    }
    return generate;
}

const LoginForm = () => {
    const bem = BEM('login-form');

    const userNameRef = createRef<HTMLInputElement>();
    const pwRef = createRef<HTMLInputElement>();
    const [eyePos, setEyePos] = useState('translate(0px, 0px)');
    const [rightPaw, setPawRight] = useState('translate(0px, 0px)');
    const [leftPaw, setPawLeft] = useState('translate(0px, 0px)');

    const handleUserInput = () => {
        console.warn(userNameRef?.current?.value);
        const length = userNameRef?.current?.value?.length;
        setEyePos(`translate(${-7 + (length ? length / 2 : 0)}px, 2px)`);

    }
    const handlePWInput = () => {
        console.warn(pwRef?.current?.value);
    }

    const getTransform = () => {
        console.warn(document.activeElement, ' : ', userNameRef.current);
        const length = userNameRef?.current?.value?.length;
        if (document.activeElement === userNameRef.current)
            setEyePos(`translate(${-7 + (length ? length / 2 : 0)}px, 2px)`);
        else if (document.activeElement === pwRef.current) {
            setEyePos('translate(7px, -4px)');
            setPawRight('rotate(180deg) translate(-48px, 45px)');
            setPawLeft('rotate(-180deg) translate(48px, 45px)');
        }
        else {
            setEyePos('translate(0px, 0px)');
            setPawRight('rotate(0deg) translate(0, 0)');
            setPawLeft('rotate(0deg) translate(0, 0)');
        }
    }
    return (
        <div className={bem()}>
            <img className={bem('image-face')} src={face} alt="face" />
            <img style={{ transform: eyePos }} className={bem('image-eyes')} src={eyes} alt="face" />
            <img style={{ transform: rightPaw }} className={bem('image-paws')} src={pawRightImage} alt="face" />
            <img style={{ transform: leftPaw }} className={bem('image-paws')} src={pawLeftImage} alt="face" />
            <h1 className={bem('title')}>Login</h1>
            <FormInput onBlur={getTransform} onFocus={getTransform} onInput={handleUserInput} ref={userNameRef} label="Username" type="email"></FormInput>
            <FormInput onBlur={getTransform} onFocus={getTransform} onInput={handlePWInput} ref={pwRef} label="Password" type="password"></FormInput>
        </div>
    )
};

export default LoginForm;