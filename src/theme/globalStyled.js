import {createGlobalStyle} from 'styled-components'


export const GlobalStyled = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}


:root{
    font-size: 16px;
    --color-border1: #ff954a;
    --color-nav: #FF6C01;
    --border-nav:1px solid var(--color-border1);
    --color-bg1: #323232;
    --color-gradient1:linear-gradient(109.6deg, rgb(255, 219, 47) 11.2%, rgb(244, 253, 0) 100.2%);
    --color-gradient2: linear-gradient(180deg, rgba(143, 255, 55, 0.18) 0%, rgba(189, 254, 138, 0.29) 100%);


}


body, main{
    background: var(--color-gradient1);
}



`