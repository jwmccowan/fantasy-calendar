import * as React from 'react';
import styled from 'styled-components';
import { AppDrawer, StyledDrawerHeader } from './AppDrawer';
import { Calendar } from '../Calendar';
import { AppNavbar } from './Navbar';
import { MenuContext, useToggle } from './MenuContext';
import { drawerWidth, squanchedContentCSS, squanchTransition } from './styles';

const StyledApp = styled.div`
  ${({ theme }) => theme.breakpoints.up('md')} {
    display: flex;
  }
`;

const Content = styled.div<{ squanched: boolean }>`
  ${({ theme }) => theme.breakpoints.up('md')} {
    flex-grow: 1;
    margin-left: -${drawerWidth}px;
    ${squanchTransition}
    ${({ squanched }) => (squanched ? squanchedContentCSS : '')}
  }
  padding: ${({ theme }) => theme.spacing(3)}px;
`;

const ContentPadder = styled(StyledDrawerHeader)``;

export const App: React.FC = () => {
  const blah = useToggle();

  return (
    <StyledApp>
      <MenuContext.Provider value={blah}>
        <AppNavbar />
        <AppDrawer />
        <Content squanched={blah[0]}>
          <ContentPadder />
          <Calendar />
        </Content>
      </MenuContext.Provider>
    </StyledApp>
  );
};

// export const BestApp: React.FC = () => {
//   const blah = useToggle();
//   return (
//     <MenuContext.Provider value={blah}>
//       <StyledApp>
//         <AppNavbar />
//         <AppDrawer />
//         <AppContent>
//           <SomeRouterProbably />
//         </AppContent>
//       </StyledApp>
//     </MenuContext.Provider>
//   );
// };
