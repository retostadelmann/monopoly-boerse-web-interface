import React from 'react';
import { Stack, IStackTokens, IStackStyles } from '@fluentui/react';
import logo from '../Assets/Header.png'
import { Outlet } from 'react-router-dom';

const stackTokens: IStackTokens = { childrenGap: 15 };
const imageStyle: IStackStyles = {
    root: {
        padding: '8px'
    }
}

export const Layout: React.FunctionComponent = () => {
    return (
        <Stack horizontalAlign="center" verticalFill tokens={stackTokens} styles={imageStyle}>
            <img className="App-logo" src={logo} alt="logo" />
            <Stack.Item>
                <Outlet />
            </Stack.Item>
        </Stack>
    );
};
