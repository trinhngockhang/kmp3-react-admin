import React from 'react';
import { List, Datagrid, TextField, ImageField, SimpleShowLayout,
  Show, RichTextField, Create, SimpleForm,Edit, DateField,
   ReferenceInput, TextInput, EmailField} from 'react-admin';
export const Users = props => (
    <List {...props}  title="List Users">
        <Datagrid rowClick="edit">
            <TextField source="name" label="Tên" />
            <TextField source="username" label="Tên đăng nhập" />
            <DateField source="createdAt" label="Ngày tạo" ></DateField>
            <NewEmailField source="email" />
            <NewFbField source="fbId" />
        </Datagrid>
    </List>
);

const NewEmailField = ({ record, ...rest }) =>
  record && record[rest.source] ? (
    <EmailField source="email" record={record} {...rest}/>
  ) : <span>Chưa cập nhật email</span>;

const NewFbField = ({ record, ...rest }) =>
  record && record[rest.source] ? (
    <TextField source="fbId" record={record} {...rest}/>
) : <span>Chưa cập nhật Facebook</span>;


export const UserDetail = (props) => (
  <Show {...props}>
      <SimpleShowLayout>
            <TextField source="name" label="Tên" />
            <ImageField source="avatar" label="Avartar"/>
            <TextField source="username" label="Tên đăng nhập" />
            <NewEmailField source="email" label="Email" />
            <br/>
            <NewFbField source="fbId" />
      </SimpleShowLayout>
  </Show>
);

export const UserCreate = props => (
  <Create {...props}>
      <SimpleForm>
          <ReferenceInput source="name" reference="singers">
          </ReferenceInput>
          <TextInput source="description" />
      </SimpleForm>
  </Create>
);

export const UserEdit = props => (
  <Edit {...props}>
      <SimpleForm>
        <TextInput source="name" label="Tên" />
        <TextInput source="avatar" label="Avartar"/>
        <TextInput source="username" label="Tên đăng nhập" />
        <TextInput source="email" />
        <TextInput source="fbId" />
      </SimpleForm>
  </Edit>
);