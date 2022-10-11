import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import Cross from './Cross';

const Cell = props => {
  const {cell, onPress} = props;
  return (
    <Pressable onPress={() => onPress()} style={styles.cell}>
      {(cell === 'o' || cell === 'O' || cell === '0') && (
        <View style={styles.circle} />
      )}
      {(cell === 'x' || cell === 'X') && <Cross />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cell: {
    width: 100,
    height: 100,
    flex: 1,
  },
  circle: {
    flex: 1,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,

    borderWidth: 10,
    borderColor: 'white',
  },
});

export default Cell;
