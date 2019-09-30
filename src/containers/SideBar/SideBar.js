import React from 'react';
import {SideBarItem} from './SideBarItem/SideBarItem';
import {Divider, Menu, Image} from 'semantic-ui-react';
import './SideBar.scss';
import lauri from "../../assets/images/lauriIso.png";
import {SideBarHeader} from "./SideBarHeader/SideBarHeader";

export class SideBar extends React.Component {
    render() {
        return (
            <Menu borderless vertical stackable fixed='left' className='side-nav'>
                <SideBarItem highlight={true}  label='Home' icon='home'/>
                <SideBarItem highlight={true}  label='Trending' icon='fire'/>

                <Menu.Item header className='lauri'>
                    <Image src={lauri} size='tiny'/>
                </Menu.Item>
                <Divider/>

                <SideBarHeader title='Library'/>
                <SideBarItem label='Followers' icon='spy'/>
                <SideBarItem label='History' icon='history'/>
                <SideBarItem label='Watch later' icon='clock'/>
                <SideBarItem highlight={true}  label='Liked videos' icon='thumbs up'/>
                <Divider/>

                <SideBarHeader title='More of Lauri'/>
                <SideBarItem label='Movies and Shows' icon='film'/>
                <Divider/>
                <SideBarItem label='Report history' icon='flag'/>
                <SideBarItem label='Help' icon='help circle'/>
                <SideBarItem label='Send feedback' icon='comment'/>
                <Divider/>
            </Menu>
        );
    }
}
