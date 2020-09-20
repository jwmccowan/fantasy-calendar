import { gql, useMutation, useQuery } from '@apollo/client';
import {
    Dialog,
    DialogTitle,
    TextField,
    InputLabel,
    Select,
    MenuItem,
    FormControl,
    DialogContent,
    DialogActions,
    Button,
} from '@material-ui/core';
import { DateTime } from 'luxon';
import * as React from 'react';
import styled from 'styled-components';
import { useTextFieldValue } from './useTextFieldValue';

export type NewCalendarDialogProps = {
    open: boolean;
    date: DateTime;
    onClose: () => void;
};

type SelectEvent = React.ChangeEvent<{
    name?: string | undefined;
    value: unknown;
}>;

const StyledForm = styled(DialogContent)`
    min-width: 500;
    & > * {
        margin-bottom: ${({ theme }) => theme.spacing(2)}px;
    }
`;

const calendarQuery = gql`
    query GetCalendars {
        calendars {
            id
            title
        }
    }
`;

const newCalendarItemMutation = gql`
    mutation NewCalendarItem($title: String!, $description: String!, $calendar: String!, $date: String!) {
        createCalendarItem(title: $title, description: $description, calendar: $calendar, date: $date) {
            id
            calendar {
                id
                title
            }
        }
    }
`;

type Calendar = {
    id: string;
    title: string;
};

type CalendarQueryResult = {
    calendars: Calendar[];
};

export const NewCalendarDialog: React.FC<NewCalendarDialogProps> = ({ date, ...rest }) => {
    const [title, setTitle] = useTextFieldValue();
    const [description, setDescription] = useTextFieldValue();
    const [calendar, setCalendar] = React.useState('');
    const { data, loading } = useQuery<CalendarQueryResult>(calendarQuery);
    const [createNewCalItem, { loading: mutationLoading }] = useMutation(newCalendarItemMutation);
    const setCalFromEvent = React.useCallback((ev: SelectEvent) => setCalendar(ev.target.value as string), []);
    const createNewCalendarItem = () => {
        createNewCalItem({
            variables: {
                title,
                description,
                calendar,
                date: date.toFormat('yyyy-LL-dd'),
            },
        }).then(() => rest.onClose());
    };

    return (
        <Dialog {...rest}>
            <DialogTitle>{'New Calendar Item'}</DialogTitle>
            {!loading && !!data && (
                <StyledForm>
                    <TextField label="Title" fullWidth value={title} onChange={setTitle} />
                    <TextField
                        label="Description"
                        fullWidth
                        multiline
                        rowsMax={4}
                        value={description}
                        onChange={setDescription}
                    />
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel>{'Calendar'}</InputLabel>
                        <Select value={calendar} onChange={setCalFromEvent} label="Calendar">
                            {data.calendars.map((cldr: { id: string; title: string }) => (
                                <MenuItem key={cldr.id} value={cldr.id}>
                                    {cldr.title}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </StyledForm>
            )}
            <DialogActions>
                <Button disabled={mutationLoading} onClick={rest.onClose} color="primary">
                    {'Cancel'}
                </Button>
                <Button disabled={mutationLoading} onClick={createNewCalendarItem} color="primary">
                    {'Subscribe'}
                </Button>
            </DialogActions>
        </Dialog>
    );
};
