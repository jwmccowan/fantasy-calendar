import * as React from 'react';
import { Divider, Drawer, IconButton, Theme, useMediaQuery } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import styled from 'styled-components';
import { drawerWidth, ToolbarMixin } from '../styles';
import { AppDrawerContent } from '../AppDrawerContent';
import { MenuContext } from '../MenuContext';

export const StyledDrawerHeader = styled.div`
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.spacing(0, 1)}px;
    /* necessary for content to be below app bar */
    ${ToolbarMixin}
    justify-content: flex-end;
`;

export const StyledDrawer = styled(Drawer)`
    flex-shrink: 0;
    width: ${drawerWidth}px;
    padding: ${({ theme }) => theme.spacing(0, 1)}px;
    justify-content: flex-end;
    & > .MuiDrawer-paper {
        width: ${drawerWidth}px;
    }
`;

export const AppDrawer: React.FC = () => {
    const isBig = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
    const [open, dispatch] = React.useContext(MenuContext);

    return (
        <StyledDrawer onClose={dispatch} open={open} variant={isBig ? 'persistent' : 'temporary'}>
            <StyledDrawerHeader>
                <IconButton onClick={dispatch}>
                    <ChevronLeftIcon />
                </IconButton>
            </StyledDrawerHeader>
            <Divider />
            <AppDrawerContent />
        </StyledDrawer>
    );
};
