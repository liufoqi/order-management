import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Menu} from 'antd';
import './index.css'
const SubMenu =Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class navLeft extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='navLeft'>
                <Menu>
                    <Menu.Item>
                        <Link to='/admin/home'> 首页</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to='/admin/secondPage'>订单管理</Link>
                    </Menu.Item>
                    {/*<SubMenu title="子菜单">*/}
                        {/*<Menu.Item>菜单项</Menu.Item>*/}
                        {/*<Menu.Item>菜单项</Menu.Item>*/}
                    {/*</SubMenu>*/}
                    {/*<SubMenu title="子菜单">*/}
                        {/*<Menu.Item>菜单项</Menu.Item>*/}
                        {/*<Menu.Item>菜单项</Menu.Item>*/}
                    {/*</SubMenu>*/}
                    {/*<SubMenu title="子菜单">*/}
                        {/*<Menu.Item>菜单项</Menu.Item>*/}
                        {/*<Menu.Item>菜单项</Menu.Item>*/}
                    {/*</SubMenu>*/}
                </Menu>
            </div>
        )
    }
}

export default navLeft
