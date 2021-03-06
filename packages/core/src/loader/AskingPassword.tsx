/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-viewer.dev
 * @license https://react-pdf-viewer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import React, { useContext, useState } from 'react';

import LocalizationContext from '../localization/LocalizationContext';
import ThemeContext from '../theme/ThemeContext';
import { VerifyPassword } from './LoadingStatus';

interface AskingPasswordProps {
    verifyPasswordFn: VerifyPassword;
    passwordInput: string;
}

const AskingPassword: React.FC<AskingPasswordProps> = ({ verifyPasswordFn, passwordInput }) => {
    const l10n = useContext(LocalizationContext);
    const theme = useContext(ThemeContext);
    const [password, setPassword] = useState('');

    const changePassword = (e: React.ChangeEvent<HTMLInputElement>): void => setPassword(e.target.value);
    const submit = (): void => verifyPasswordFn(passwordInput);

    return (
        <div className={`${theme.prefixClass}-asking-password`}>
            <div>
                <div className={`${theme.prefixClass}-asking-password-message`}>{l10n.core.askingPassword.requirePasswordToOpen}:</div>
                <div className={`${theme.prefixClass}-asking-password-input-container`}>
                    <input
                        className={`${theme.prefixClass}-asking-password-input`}
                        type="password"
                        onChange={changePassword}
                    />
                    <button className={`${theme.prefixClass}-asking-password-button`} onClick={submit}>
                        {l10n.core.askingPassword.submit}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AskingPassword;
