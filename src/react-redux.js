import React, { Component } from 'react'

import PropTypes from 'prop-types'

export const connect = (mapPropsToState=(state)=>state,mapDispatchToProps={}) => (WrapContent) =>{
    return class ChildCoponent extends Component {
        constructor(props,context){
            super(props,context);
            this.state = {
                props:{}
            }
        }
        static contextTypes = {
            store: PropTypes.object,
        }
        componentDidMount() {
            const {store} = this.context;
            this.update();
            store.subscribe(() => this.update());
        }
    
        bindAction(action,dispatch){
            return (...args) => {dispatch(action(...args))}
        }
        update(){
            console.log(this);
            const {store} = this.context;
            const props = mapPropsToState(store.getState());
           // store.dispatch();
           const dispatchToProps= {};
            Object.keys(mapDispatchToProps).forEach(v=>{
               const func =  mapDispatchToProps[v];
               dispatchToProps[v] = this.bindAction(func,store.dispatch)
            });
            this.setState({
                props: {...this.state.props,
                    ...props,
                    ...dispatchToProps
                }
            })
        }

        render() { 

            return ( <WrapContent {...this.state.props}/> );
        }
    }
}

export class Provider extends Component {
    static childContextTypes = {
        store: PropTypes.object,
    }

    getChildContext(){
        return {store:this.props.store};
    }

    render() { 
        return this.props.children;
    }
}