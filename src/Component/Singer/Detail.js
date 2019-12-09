import React from 'react';
import { Show, SimpleShowLayout, TextField, DateField, EditButton, RichTextField } from 'react-admin';

export const SingerDetail = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="name" />
            <RichTextField source="description" />
            <TextField source="avartar" />
        </SimpleShowLayout>
    </Show>
);