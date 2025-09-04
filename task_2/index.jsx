import { Fragment, memo, useCallback } from 'react';

const MainComponent = () => {
    const makeLog = useCallback(() => console.log('hi from MainComponent'),[]); // function to make logs from MainComponent

    return (
        <Fragment>
            <ChildComponent makeLog={makeLog} />
        </Fragment>
    );
};

// memoized component
const ChildComponent = memo(({ makeLog }) => (
    <button onClick={makeLog}>say Hi from ChildComponent</button>
));
