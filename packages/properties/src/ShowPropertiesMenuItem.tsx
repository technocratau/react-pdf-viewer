/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-viewer.dev
 * @license https://react-pdf-viewer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import React, { FC, useContext } from 'react';
import { LocalizationContext, MenuItem } from '@react-pdf-viewer/core';

import InfoIcon from './InfoIcon';
import { RenderShowPropertiesProps } from './ShowProperties';

const ShowPropertiesMenuItem: FC<RenderShowPropertiesProps> = ({ onClick }) => {
    const l10n = useContext(LocalizationContext);
    const label = l10n && l10n.properties ? l10n.properties.showProperties : 'Show properties';

    return (
        <MenuItem icon={<InfoIcon />} onClick={onClick}>{label}</MenuItem>
    );
};

export default ShowPropertiesMenuItem;
