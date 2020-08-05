import React from 'react';
import Button from '@presentational/button';

const MENUS = [
    { name: 'home' },
    { name: 'about' }
];


export default function MenuContainer() {
    return (
        <div>
            {MENUS.map((item, index) => (<Button key={index} name={item.name} />))}
        </div>
    )
}
