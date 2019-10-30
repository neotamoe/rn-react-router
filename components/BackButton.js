import React from 'react';
import { Button } from 'react-native';
import { useHistory } from 'react-router-dom';

function BackButton() {
  let history = useHistory();

  function goBack() {
    history.goBack();
  }

  return (
    <Button title="Go Back" onPress={goBack}/>
  )
}

export default BackButton;
