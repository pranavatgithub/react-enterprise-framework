import React from 'react';

export default (props) => {
    return (
        <ul>
            {Boolean(props.list && props.list.length) && props.list.map((item ,index) => {
                return <li key={index}>{item}</li>
            })}
        </ul>)
}