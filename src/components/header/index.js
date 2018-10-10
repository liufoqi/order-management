import React, {Component} from 'react';
// import {HashRouter, Route} from 'react-router-dom'
import '../../style/common.less'
import './index.less'
import {formDate} from '../../utils'
// import utils from '../../utils'
// const  formDate =utils. formatDate
import axios from  'axios'
class Header extends Component {
    constructor(props) {
        super(props)
    }
    state={
        time:'',
        weather:''
    }
    getTime=()=>{
        setInterval(()=>{
            let unixDate =new Date().getTime()
            let timeStr= formDate(unixDate)
            this.setState({
                time:timeStr
            })
        },1000)
    }
    getWeather=()=>{
        axios.get(`http://t.weather.sojson.com/api/weather/city/101010100`).then(
            res=>{
                let weather =res.data.data.forecast[0]
                console.log(weather)
                let weatherStr=`${weather.low} ~ ${weather.high}  ${weather.type} ${weather.fx}${weather.fl}`
                this.setState({
                    weather:weatherStr
                })

            }
        )
    }
    componentWillMount(){
        this.getTime()
        this.getWeather()
    }
    render() {
        return (
            <div className='Header'>
                <div className='HeaderTop clearFix'>
                    <h1>欢迎来到订单管理页面</h1>
                    <div className="weatherTime fll">
                        <span className="time">
                          {this.state.time}
                        </span>
                    <span className="weather flr">
                        {this.state.weather}
                        </span>
                </div>
                    <div className='flr'>
                        <span className='detail'>
                        <a className='username'>欢迎,肉包子</a>
                        <a className='exit'>退出</a>
                        </span>
                    </div>

                </div>
                <div className='HeaderBottom  clearFix'>
                    <div className='breadcrumb fll'>
                        首页
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
