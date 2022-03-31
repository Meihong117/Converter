import React from 'react'
import {SideBarContainer,Icon,CloseIcon,SideBarWrapper,SideBarMenue,SidebarLink,LinkToGithub } from './SideBarElem'

const SideBar = ({isOpen,toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle} >
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenue>
                    <SidebarLink to='/celsius'>Celsius</SidebarLink>
                    <SidebarLink to='/hour'>Hour</SidebarLink>
                    <SidebarLink to='/length'>Length</SidebarLink>
                    <SidebarLink to='/bytes'>Bytes</SidebarLink>
                    <LinkToGithub href='https://github.com/Meihong117/MAGIQ-test' target="_blank" >See the code</LinkToGithub>
                </SideBarMenue>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar
