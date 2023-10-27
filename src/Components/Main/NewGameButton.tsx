import React from 'react';
import { useId, useBoolean } from '@fluentui/react-hooks';
import { PrimaryButton, DefaultButton, IButtonStyles, Dialog, DialogFooter, DialogType, TextField } from '@fluentui/react';

const buttonStyles: IButtonStyles = {
    root: {
        width: "240px"
    }
}

const dialogStyles = { main: { maxWidth: 450 } };
const dialogContentProps = {
    type: DialogType.normal,
    title: 'Neues Spiel erstellen',
    closeButtonAriaLabel: 'Schliessen',
};

export const NewGameButton: React.FunctionComponent = () => {
    const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);
    const labelId: string = useId('dialogLabel');

    const modalProps = React.useMemo(
        () => ({
            titleAriaId: labelId,
            isBlocking: false,
            styles: dialogStyles,
        }),
        [labelId],
    );

    return (
        <>
            <PrimaryButton styles={buttonStyles} onClick={toggleHideDialog}>
                Neues Spiel starten
            </PrimaryButton>
            <Dialog
                hidden={hideDialog}
                onDismiss={toggleHideDialog}
                dialogContentProps={dialogContentProps}
                modalProps={modalProps}
            >
                <TextField label="Spielname" />

                <DialogFooter>
                    <PrimaryButton onClick={toggleHideDialog} text="Erstellen" />
                    <DefaultButton onClick={toggleHideDialog} text="Abbrechen" />
                </DialogFooter>
            </Dialog>
        </>
    );
};
