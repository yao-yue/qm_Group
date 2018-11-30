import React from 'react';

const TableBody = props => {
    
    console.log('--------tableBody页面：');
    //不是一个组件类  是一个纯函数 所以没有this 函数式组件
    console.log(props);
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                {/* () => props.removeCharacter(index) 用箭头函数包好 */}
                <td><a className="btn btn-primary" href="javascript:;" onClick={() => props.removeCharacter(index)}>删除</a></td>
            </tr>
        )
    });
    return (
        <tbody>
            {rows}
        </tbody>
    );
    // return <tbody>{rows}</tbody>;
    
}
export default TableBody;