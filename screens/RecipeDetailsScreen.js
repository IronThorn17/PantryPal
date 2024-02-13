// RecipeDetailsScreen.js
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { deleteDataById } from '../app-tools/DatabaseUtils';
import commonStyles from '../app-tools/Styles';

const RecipeDetailsScreen = ({ route }) => {
  const { recipe } = route.params;
  const navigation = useNavigation();

  const handleUpdate = () => {
    // implement update
  };

  const confirmDelete = async () => {
    const recipeIdToDelete = recipe.id;
    await deleteDataById(recipeIdToDelete);
    navigation.goBack();
  };

  const handleDelete = () => {
    Alert.alert(
      'Delete Recipe',
      'Are you sure you want to delete this recipe?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', onPress: confirmDelete },
      ],
      { cancelable: true }
    );
  };

  return (
    <ScrollView>
      <View>
        <View style={commonStyles.container}>
          {recipe.image && (
            <Image
              source={recipe.image ? { uri: recipe.image } : defaultImageSource}
              style={commonStyles.recipeDetailsImage}
              resizeMode='cover'
            />
          )}
        </View>

        <Text style={commonStyles.recipeTitle}>{recipe.title}</Text>

        {/* Display Ingredients */}
        <Text style={commonStyles.label}>Ingredients:</Text>
        {recipe.ingredients.map((ingredient, index) => (
          <Text key={`ingredient-${index}`} style={commonStyles.recipeDetailsText}>
            {ingredient.name}
          </Text>
        ))}

        {/* Display Instructions */}
        <Text style={commonStyles.label}>Instructions:</Text>
        {recipe.instructions.map((instruction, index) => (
          <Text key={`instruction-${index}`} style={commonStyles.recipeDetailsText}>
            {instruction}
          </Text>
        ))}

        {/* Display other details like prepTime, cookTime, requirements, etc. */}
        <Text style={commonStyles.label}>Prep Time: {recipe.prepTime}</Text>
        <Text style={commonStyles.label}>Cook Time: {recipe.cookTime}</Text>
        <Text style={commonStyles.label}>
          Requirements: {recipe.requirements ? recipe.requirements.join(', ') : 'N/A'}
        </Text>

      </View>
      {/* Buttons for Update and Delete */}
      <TouchableOpacity onPress={handleUpdate}>
          <Text style={commonStyles.button}>Update Recipe</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDelete}>
          <Text style={commonStyles.button}>Delete Recipe</Text>
        </TouchableOpacity>
    </ScrollView>
  );
};

export default RecipeDetailsScreen;
