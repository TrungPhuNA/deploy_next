import React from 'react';
let Index_let = () => {
    return (
        <div>
            <h1>Khai báo Let</h1>
        </div>
    )
}

const Index_const = () => {
    return (
        <div>
            <h1>Đây là Const</h1>
        </div>
    )
}

function MyFunction(){
    return <div>Đây là function</div>
}

class MyClass extends React.Component{
    render() {
        return (
            <div>
                <h1>Đây là Class</h1>
            </div>
        )
    }
} 

export default () => {
    return (
        <div>
            <h1>Đây là component</h1>
            <Index_let/>
            <Index_const/>
            <MyFunction/>
            <MyClass />
        </div>
    )
}