// GroceryListScreen.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { insertExampleData, deleteAllData } from '../app-tools/DatabaseUtils';

// Styles
import commonStyles from '../app-tools/Styles';

const GroceryListScreen = () => {
    const handleInsertExampleData = async () => {
        const result = await insertExampleData();
        if (result) {
          console.log('Example data inserted:', result);
        } else {
          console.log('Failed to insert example data');
        }
    };

    const handleDeleteAllData = async () => {
        const result = await deleteAllData();
        if (result) {
          console.log('Example data deleted:', result);
        } else {
          console.log('Failed to delete example data');
        }
    };

  return (
    <View>
      <Text style={[commonStyles.title]}>
        Grocery List
      </Text>
      <TouchableOpacity onPress={handleInsertExampleData}>
        <Text styles={[commonStyles.text]}> Insert Example Data </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDeleteAllData}>
        <Text styles={[commonStyles.text]}> Delete Example Data </Text>
      </TouchableOpacity>
    </View>
  );
};

export default GroceryListScreen;
