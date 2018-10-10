import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import img from './岛.jpg'
import './index.less'
class NotMatch extends Component {
    render() {
        return (
        <div className='notMatch clearFix'>
            <div className='notMatchLeft fll'>
                <div className='title'>
                    <h1>Oh My God !</h1>
                </div>
                    <p>404你要的页面没有找到</p>
                <div className='notice'>
                    <p>友情提示：您可以：</p>
                    <ul>
                        <li>
                            刷新页面再试
                        </li>
                        <li>
                            <Link to='/admin/home'>或者回首页</Link>
                        </li>
                    </ul>
                </div>
            </div>
           <div className='flr'>
               <img src={img} alt=""/>
           </div>

        </div>
        )
    }
}

export default NotMatch
