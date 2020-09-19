import { css } from 'styled-components';

export const drawerWidth = 240;

export const unsquanchTransition = css`
  transition: ${({ theme }) =>
    theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    })};
`;

export const squanchTransition = css`
  transition: ${({ theme }) =>
    theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })};
`;

export const squanchedNavbar = css`
  width: calc(100% - ${drawerWidth}px);
  margin-left: ${drawerWidth};
  ${unsquanchTransition}
`;

export const squanchedContentCSS = css`
  ${unsquanchTransition}
  margin-left: 0px;
`;

export const ToolbarMixin = css`
  min-height: 56px;
  @media (min-width: 0px) and (orientation: landscape) {
    min-width: 48px;
  }
  ${({ theme }) => theme.breakpoints.up('md')} {
    min-height: 64px;
  }
`;
