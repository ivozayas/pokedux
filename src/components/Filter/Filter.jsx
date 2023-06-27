import { useSelector, useDispatch } from 'react-redux';
import { setSearchedType } from '../../slices/DataSlice';

import { Menu } from 'antd'
import SubMenu from 'antd/es/menu/SubMenu';
import { FireOutlined, CalendarOutlined } from '@ant-design/icons';

import './index.css'

function Filter() {
    const dispatch = useDispatch()
    const types = useSelector(state => state.data.types)
    const loading  = useSelector(state => state.ui.loading)

    return (
        <Menu className='filter' selectedKeys={[]} mode="horizontal">
            {!loading && (
                <SubMenu
                    key='types'
                    icon={<FireOutlined style={{fontSize: '15px', margin: '3px'}}/>}
                    title="Types"
                >
                    {types.map(type => (
                        <Menu.Item
                            style={{fontFamily: 'Visitor, sans-serif', fontSize: '16px'}}
                            key={type}
                            onClick={() => {dispatch(setSearchedType(type))}}
                        >{type}</Menu.Item>
                    ))}
                </SubMenu>
            )}
            {!loading && (
                <SubMenu
                    key='gen'
                    icon={<CalendarOutlined style={{fontSize: '15px', margin: '3px'}}/>} 
                    title="Generation"
                >
                </SubMenu>
            )}
        </Menu>
        )
}

export { Filter }