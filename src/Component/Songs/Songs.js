import React from 'react';
import { List, Datagrid, TextField, ImageField, SimpleShowLayout,
  Show, RichTextField, Create, SimpleForm,Edit,
   ReferenceInput, TextInput, ArrayField} from 'react-admin';
export const Songs = props => (
    <List {...props}  title="List song">
        <Datagrid rowClick="edit">
            <TextField source="nameSong" label="Bài hát"/>
            <TextField source="likeNumber" label="Lượt like" />
            <TextField source="writer" label="Sáng tác" />
            <ArrayField source="singer" label="Ca sỹ">
              <Datagrid>
                <TextField source="singer"/>
              </Datagrid>
            </ArrayField>
        </Datagrid>
    </List>
);

export const SongDetail = (props) => (
  <Show {...props}>
      <SimpleShowLayout>
        <TextField source="nameSong" label="Bài hát"/>
            <TextField source="likeNumber" label="Lượt like" />
            <ImageField source="image"/>
            <TextField source="writer" label="Sáng tác" />
            <ArrayField source="singer" label="Ca sỹ">
              <Datagrid>
                <TextField source="singer"/>
              </Datagrid>
            </ArrayField>
            <ArrayField source="categories" label="Thể loại">
              <Datagrid>
                <TextField source="name"  />
              </Datagrid>
            </ArrayField>
      </SimpleShowLayout>
  </Show>
);

export const SongCreate = props => (
  <Create {...props}>
      <SimpleForm>
          <ReferenceInput source="name" reference="singers">
          </ReferenceInput>
          <TextInput source="description" />
      </SimpleForm>
  </Create>
);

export const SongEdit = props => (
  <Edit {...props}>
      <SimpleForm>
      <TextInput source="nameSong" label="Bài hát"/>
      <TextInput source="writer" label="Sáng tác" />
      <TextInput source="image" label="Avatar" />
      <TextInput source="coverImg" label="Ảnh bìa" />
      </SimpleForm>
  </Edit>
);