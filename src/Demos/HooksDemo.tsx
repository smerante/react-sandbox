import { FunctionComponent, useEffect, useState } from 'react';

export default function HooksDemo() {

    const [count, setCount] = useState(0);
    const [countMessage, setCountMessage] = useState('You clicked count 0 times!')

    // componentDidUpdate()
    useEffect(() => {
        setCountMessage(`You clicked count ${count} times!`)
    }, [count]);


    const functionalProps = { count: count, countMessage: countMessage };

    return (
        <div>
            {countMessage}
            <div>
                <button onClick={() => setCount(count + 1)}>Increment Count</button>
            </div>

            <FunctionalComponentTest {...functionalProps}></FunctionalComponentTest>
        </div>
    )
}


interface TestInterface {
    count: number,
    countMessage: string
}

const FunctionalComponentTest: FunctionComponent<TestInterface> = ({
    count,
    countMessage
}) => {
    return (
        <div>
            <h1> FunctionalComponent Test </h1>
            <p>count: {count}</p>
            <p>countMessage: {countMessage}</p>
        </div>
    )
};