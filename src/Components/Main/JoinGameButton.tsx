import React, { useState } from 'react';
import { useId, useBoolean } from '@fluentui/react-hooks';
import { PrimaryButton, DefaultButton, IButtonStyles, Dialog, DialogFooter, DialogType, TextField } from '@fluentui/react';
import { useNavigate } from 'react-router-dom';


const buttonStyles: IButtonStyles = {
    root: {
        width: "240px"
    }
}

const dialogStyles = { main: { maxWidth: 450 } };
const dialogContentProps = {
    type: DialogType.normal,
    title: 'Spiel beitreten',
    closeButtonAriaLabel: 'Schliessen',
};

export const JoinGameButton: React.FunctionComponent = () => {
    const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);
    const [gameId, setGameId] = useState('');

    const labelId: string = useId('dialogLabel');

    const navigate = useNavigate();

    const navigateToGame = () => {
        // 👇️ navigate to /contacts
        navigate('game/' + gameId);
    };

    const modalProps = React.useMemo(
        () => ({
            titleAriaId: labelId,
            isBlocking: false,
            styles: dialogStyles,
        }),
        [labelId],
    );

    const handleChange = (e: any, value: string | undefined) => {
        setGameId(value as string);
    };

    return (
        <>
            <DefaultButton styles={buttonStyles} onClick={toggleHideDialog}>
                Spiel beitreten
            </DefaultButton>
            <Dialog
                hidden={hideDialog}
                onDismiss={toggleHideDialog}
                dialogContentProps={dialogContentProps}
                modalProps={modalProps}
            >
                <TextField autoComplete="off" required onChange={handleChange} value={gameId} label="GameID" />

                <DialogFooter>
                    <PrimaryButton onClick={navigateToGame} text="Beitreten" />
                    <DefaultButton onClick={toggleHideDialog} text="Abbrechen" />
                </DialogFooter>
            </Dialog>
        </>
    );
};
