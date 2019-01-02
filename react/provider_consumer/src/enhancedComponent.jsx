import React from 'react'
// EC = HF(WrappedComponet)

// hoc 用组件包裹一层


var enhancedComponent = (Component) => {
    class Enhance extends React.Component {
        render () {
            return (
                <section>
                    <h1>
                        I'm high-order componet
                    </h1>
                    <Component {...this.state} {...this.props}/>
                </section>
            )
        }
    }
    return Enhance
}



export default enhancedComponent;