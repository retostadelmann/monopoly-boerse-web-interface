import React from 'react';
import { Stack, Text, IStackTokens, ITextStyles, StackItem, FontWeights } from '@fluentui/react';
import { CopyToClipboard } from './Utilities/CopyToClipboard';
import { useParams } from "react-router-dom";
import { GameList } from './GameList';

const boldStyle: Partial<ITextStyles> = { root: { fontWeight: FontWeights.semibold, maxWidth: "60vmin" } };
const stackTokens: IStackTokens = { childrenGap: 15 };
const textWidthStyles: ITextStyles = {
    root: {
        maxWidth: "60vmin"
    }
}

export const Game: React.FunctionComponent = () => {
    const { id } = useParams();

    return (
        <Stack horizontalAlign="center" verticalAlign="center" verticalFill tokens={stackTokens}>
            <StackItem>
                <Text variant="xxLarge" styles={boldStyle}>
                    Game Name
                </Text>
            </StackItem>
            <StackItem>
                <Text styles={boldStyle} variant="medium">Deine GameID: </Text>
                <Text styles={textWidthStyles} variant="medium">{id}</Text>
                <CopyToClipboard value={id as string} />
            </StackItem>
            <StackItem>
                <GameList />
            </StackItem>
        </Stack>
    );
};
