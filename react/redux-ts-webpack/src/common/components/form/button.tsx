import * as React from 'react';

interface Props {
    label: string,
    className: string;
    onClick: () => void;   //没有返回值的函数
}

export const Button:React.StatelessComponent<Props> = (props) => {
    return (
        <button type="button" className={props.className} onClick={props.onClick} >
            {props.label}
        </button>
    );
}