import { useEffect } from 'react';

const useTitle = (title, prevailOnUnmount = false) => {
    useEffect(() => {
        document.title = title;
    }, [title]);

    useEffect(
        () => () => {
            if (!prevailOnUnmount) {
                document.title = 'fontawesome';
            }
        },
        [prevailOnUnmount]
    );
};

export default useTitle;