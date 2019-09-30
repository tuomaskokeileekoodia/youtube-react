import React from 'react';
import {Image, Menu, Form, Input, Icon} from 'semantic-ui-react';
import './HeaderNav.scss';
// import logo from '../../assets/images/MYtube.jpg';
import lrlogo from '../../assets/images/LRtube.jpg';
import lauri from '../../assets/images/lauriIso.png';

export class HeaderNav extends React.Component {
    render() {
        return (
            <Menu borderless className='top-menu' fixed='top'>
                <Menu.Item header className='lauri'>
                    <Image src={lauri} size='tiny'/>
                </Menu.Item>

                <Menu.Item header className='lrlogo'>
                    <Image src={lrlogo} size='tiny'/>
                </Menu.Item>

                <Menu.Menu className='nav-container'>
                    <Menu.Item className='search-input'>
                        <Form>
                            <Form.Field>
                                <Input placeholder='Search'
                                       size='small'
                                       action='Go Lauri'
                                />
                            </Form.Field>
                        </Form>
                    </Menu.Item>
                </Menu.Menu>

                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Icon className='header-icon' name='video camera' size='large'/>
                    </Menu.Item>
                    <Menu.Item>
                        <Icon className='header-icon' name='grid layout' size='large'/>
                    </Menu.Item>
                    <Menu.Item>
                        <Icon className='header-icon' name='chat' size='large'/>
                    </Menu.Item>
                    <Menu.Item>
                        <Icon className='header-icon' name='alarm' size='large'/>
                    </Menu.Item>
                    <Menu.Item name='avatar'>
                        <Image src='http://via.placeholder.com/80x80' avatar/>
                    </Menu.Item>
                </Menu.Menu>

                <Menu.Item header className='lauri'>
                    <Image src={lauri} size='tiny'/>
                </Menu.Item>

                <Menu.Menu className='nav-container'>
                    {/* TODO */}
                </Menu.Menu>
            </Menu>
        );
    }
}

export default HeaderNav;
