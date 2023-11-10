import React from 'react';
import Book from './Book';

function Library(props) {
    return (
        <div>
            <Book name={"열심히 공부하는 파이썬"} numOfPage={300} />
            <Book name={"실무에서 중요한 AWS"} numOfPage={400} />
            <Book name={"처음 공부하는 리액트"} numOfPage={500} />
        </div>
    );
}

export default Library;
