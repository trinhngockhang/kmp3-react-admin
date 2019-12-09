import React from 'react';
import { List, Datagrid, TextField, ImageField, SimpleShowLayout,
     Show, RichTextField, Create, SimpleForm,Edit,
      ReferenceInput, TextInput, SelectInput} from 'react-admin';

export const Singers = props => (
    <List {...props}  title="List song">
        <Datagrid rowClick="edit">
            <TextField source="name" label="Tên"/>
            <TextField source="description" label="Mô tả"/>
            <ImageField source="avatar" label="Avatar" />
        </Datagrid>
    </List>
);

export const SingerDetail = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="name" />
            <ImageField source="avatar" label="Avatar" />
            <RichTextField source="description" />
        </SimpleShowLayout>
    </Show>
);

export const SingerCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="name" reference="singers">
            </ReferenceInput>
            <TextInput source="description" />
        </SimpleForm>
    </Create>
);

export const SingerEdit = props => (
    <Edit {...props}>
        <SimpleForm>
           <TextInput source="name" label="Tên"/>
           <TextInput source="description" label="Mô tả"/>
           <TextInput source="avatar" label="Avatar"/>
        </SimpleForm>
    </Edit>
);