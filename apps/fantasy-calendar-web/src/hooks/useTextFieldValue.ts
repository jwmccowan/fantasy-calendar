import * as React from 'react';

export type InputEvent = React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;
export type InputChanger = (ev: InputEvent) => void;

export const useTextFieldValue = (initialValue = ''): [string, InputChanger] => {
  const [value, setValue] = React.useState(initialValue);

  const setValueByEvent: InputChanger = React.useCallback((ev) => {
    setValue(ev.target.value);
  }, []);

  return [value, setValueByEvent];
};
