import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export const SideBarContainer=styled.div`
position: fixed;
z-index:999;
width: 100%;
height: 100%;
background: rgb(184, 126, 126);
display: grid;
align-items: center;
top:0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({isOpen})=>(isOpen?'100%':'0')};
top: ${({isOpen})=>(isOpen?'0':'-100%')};
`

export const CloseIcon=styled(FaTimes)`
color: #fff;
`

export const Icon =styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size:2rem;
cursor: pointer;
outline: none;
`
export const SideBarWrapper=styled.div`
color: #fff;
`
export const SideBarMenue=styled.ul`
display: grid;
grid-template-columns: 1fr;
text-align:center;

`
export const SidebarLink=styled(Link)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style:none;
transition: 0.2s ease-in-out;
color: #fff;
cursor: pointer;
margin: 20px;

&:hover{
    color: #000;
    transition: 0.2s ease-in-out;
}
`
export const LinkToGithub=styled.a`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style:none;
transition: 0.2s ease-in-out;
color: #fff;
cursor: pointer;
margin: 20px;
&:hover{
    color: #000;
    transition: 0.2s ease-in-out;
}
`


export const SideBtnWrap=styled.div`
display: flex;
justify-content: center;
`
export const SidebarRoute=styled(Link)`
border-radius: 50px;
background: #0562f7;
white-space: nowrap;
padding: 16px 64px;
color: #fff;
font-size:16px;
outline: none;
border:none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}
`
