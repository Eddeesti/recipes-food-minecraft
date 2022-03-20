import React from 'react';
import { TouchableHighlight, Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default function ViewIngredientsButton (props) {
    return (
      <TouchableHighlight underlayColor='rgb(138, 22, 184)' onPress={props.onPress}>
        <View style={styles.container}>
          <Text style={styles.text}>Смотреть Ингредиенты</Text>
        </View>
      </TouchableHighlight>
    );
}

ViewIngredientsButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string
};
