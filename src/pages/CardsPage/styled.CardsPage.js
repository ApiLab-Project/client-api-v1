import styled from 'styled-components'
import bg03 from './../../assets/images/bg03.svg'

export const ContainerCards = styled.div`

padding-top: 80px;
padding-bottom: 80px;

.cardBox{
padding: 2rem;
border-radius: 22px;
min-width: 400px;
max-width: 440px;
background-color:transparent;
border-radius: 12px;
display: flex;
position: relative;
margin: 50px;
color: #ffffff;
min-height: 250px;
background: url(${bg03});
background-color: #efefef;
background-size: contain;
background-repeat: no-repeat;
background-position: left top;
`

export const CardImg1 = styled.img`
position: absolute;
top: 0;
right: 0;
z-index: 0;

`