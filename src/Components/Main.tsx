import React from 'react';
import { Stack, Text, IStackTokens, ITextStyles, StackItem, FontWeights } from '@fluentui/react';
import { NewGameButton } from './Main/NewGameButton';
import { JoinGameButton } from './Main/JoinGameButton';

const boldStyle: Partial<ITextStyles> = { root: { fontWeight: FontWeights.semibold, maxWidth: "60vmin" } };
const stackTokens: IStackTokens = { childrenGap: 15 };
const textWidthStyles: ITextStyles = {
    root: {
        maxWidth: "60vmin"
    }
}

export const Main: React.FunctionComponent = () => {
    return (
        <Stack horizontalAlign="center" verticalAlign="center" verticalFill tokens={stackTokens}>
            <StackItem>
                <Text variant="xxLarge" styles={boldStyle}>
                    Monopoly DIE BÖRSE
                </Text>
            </StackItem>
            <StackItem>
                <Text styles={textWidthStyles} variant="large">Ein Webinterface um das beste Monopoly noch besser zu machen.</Text>
            </StackItem>
            <StackItem>
                <NewGameButton />
            </StackItem>
            <StackItem>
                <JoinGameButton />
            </StackItem>
        </Stack>
    );
};
