import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from "ra-data-json-server";
import { Users, UserCreate, UserEdit, UserDetail } from './Component/Users/Users';
import { Songs, SongEdit, SongCreate, SongDetail } from './Component/Songs/Songs';
import { Singers, SingerDetail, SingerCreate, SingerEdit } from './Component/Singer/Singer';

const settings = { total: 'totalCount' };

const dataProvider = jsonServerProvider('http://localhost:3002/admin/');

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="songs" list={Songs} show={SongDetail} edit={SongEdit} create={SongCreate} />
      <Resource name="users" list={Users} show={UserDetail} edit={UserEdit} create={UserCreate}/>
      <Resource name="singers" list={Singers} show={SingerDetail} edit={SingerEdit} create={SingerCreate}/>
    </Admin>
  );
}

export default App;
