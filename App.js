import React, { Component } from 'react';
import { Text } from 'react-native';

import Home from './src/screens/containers/home'
import Header from './src/sections/components/header'
import SuggestionList from './src/videos/containers/suggestion-list'



type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
     <Home>
       <Header/>
       <Text>Buscadores</Text>
       <Text>Categorias</Text>
       <Text>Sugerencias</Text>
       <SuggestionList/>
     </Home>
    );
  }
}

