import { useState } from 'react';
import classes from './App.module.scss';



export const App = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount(prev => prev + 1)
    }

    return (
        <div className={classes.container}>
            <h1>Webpack TS config</h1>
            <button
                className={classes.button}
                onClick={increment}
            >
                Count {count}
            </button>
        </div>

    );
};

