import { gql, useMutation } from '@apollo/client';
import { DialogContent, Dialog, DialogTitle, TextField, DialogActions, Button } from '@material-ui/core';
import { useTextFieldValue } from '../../../hooks';
import * as React from 'react';
import styled from 'styled-components';

const CREATE_NEW_CALENDAR = gql`
  mutation createNewCalendar($title: String!) {
    createCalendar(title: $title) {
      id
    }
  }
`;

const StyledForm = styled(DialogContent)`
  min-width: 500px;
  & > * {
    margin-bottom: ${({ theme }) => theme.spacing(3)}px;
  }
`;

export type NewCalendarDialogProps = { onClose: () => void; open: boolean };
export const NewCalendarDialog: React.FC<NewCalendarDialogProps> = ({ onClose, open }) => {
  const [title, setTitle] = useTextFieldValue();
  const [createNewCalendar, { loading: mutationLoading }] = useMutation(CREATE_NEW_CALENDAR, {
    variables: { title },
  });
  const handleClick = () => {
    createNewCalendar({ variables: { title } }).then(onClose);
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{'New Calendar'}</DialogTitle>
      <StyledForm>
        <TextField value={title} onChange={setTitle} fullWidth label="Title" />
      </StyledForm>
      <DialogActions>
        <Button disabled={mutationLoading} onClick={onClose} color="primary">
          {'Cancel'}
        </Button>
        <Button disabled={mutationLoading} onClick={handleClick} color="primary">
          {'Subscribe'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
