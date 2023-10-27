import React from 'react';
import { useBoolean } from '@fluentui/react-hooks';
import { FontIcon } from '@fluentui/react/lib/Icon';
import { mergeStyles } from '@fluentui/react/lib/Styling';

const copyIconClass = mergeStyles({
    margin: '0 10px',
    cursor: 'pointer'
});
const checkIconClass = mergeStyles({
    margin: '0 10px',
    color: 'green'
});

export interface ICopyToClipboardProps {
    value: string;
}

export const CopyToClipboard: React.FunctionComponent<ICopyToClipboardProps> = (props) => {
    const [copied, { toggle: toggleCopyIcon }] = useBoolean(false);

    return (
        <>
            {!copied && <FontIcon hidden={copied} aria-label='Copy to Clipboard' iconName='Copy' onClick={() => { navigator.clipboard.writeText(props.value); toggleCopyIcon(); }}
                className={copyIconClass} />}
            {copied && <FontIcon aria-label='Copied!' iconName='SkypeCircleCheck'
                className={checkIconClass} />}
        </>
    );
};
