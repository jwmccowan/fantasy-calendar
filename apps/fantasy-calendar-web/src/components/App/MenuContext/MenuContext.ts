import * as React from 'react';

export const MenuContext = React.createContext<
  [boolean, React.DispatchWithoutAction]
>([false, () => false]);

export const useToggle = (initial = false) =>
  React.useReducer((state) => !state, initial);
