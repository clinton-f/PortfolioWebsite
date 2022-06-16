import React from 'react';
import Prompt from './Prompt';
import UseOnEnter from './UseOnEnter';
import MapConsoleOutput from './MapConsoleOutput';

const Console = () => {
    const inputText = React.useRef('');

    const [consoleOutput, onEnter] = UseOnEnter();

    React.useEffect(() => {
        inputText.current.value = '';

        //This makes the focus on the input field but we can't use this at the loading of the page
        //inputText.current.focus();
    });

    return (
        <section className='console'>
            <MapConsoleOutput consoleOutput={consoleOutput} />
            <div className="input-prompt">
                <Prompt/>
                <input type="text" ref={inputText} onKeyPress={({target: {value}, key}) => onEnter(value, key)} />
            </div>
        </section>
    );
};

export default Console;