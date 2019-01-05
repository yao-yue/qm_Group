import * as React from 'react'

interface Props {
    name: string;
    label: string;
    placeholder?: string;
    value: string;
    onChange: (fileName: string, value: string) => void;
    error?: string;
}

export const Input: React.StatelessComponent<Props> = (props) => {
    return (
        <div>
            <label htmlFor={props.name}>{props.label}</label>
            <div className="field">
                <input type="text"
                    name={props.name} className="form-control"
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={onChangeInput(props)}
                /></div>
                <div className="help-block">{props.error}</div>
        </div>
    )
}

//                                      HTml元素才能触发
const onChangeInput =(props: Props) => (e:React.ChangeEvent<HTMLInputElement>) => {   //bind this 的过程 一个闭包
    props.onChange(e.target.name, e.target.value);
}