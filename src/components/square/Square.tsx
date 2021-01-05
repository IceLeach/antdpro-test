import { Button } from 'antd';
import React from 'react';
import style from './square.css';

interface Props{
    text:string
}
class Square extends React.Component<Props>{
    readonly state={
        value:'O'
    }
    change(){
        console.log(this.state.value);
        this.setState({value: this.state.value==='O'?'X':'O'});
    }
    render(){
        return(
            <div className={style.box}>
                <Button className={style.square} onClick={()=>{this.change()}}>
                    {this.state.value}
                </Button>
                {this.props.text}
            </div>
        )
    }
}

export default Square;