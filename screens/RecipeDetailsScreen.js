// RecipeDetailsScreen.js
import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import commonStyles from '../app-tools/Styles';

const RecipeDetailsScreen = ({ route }) => {
  const { recipe } = route.params;

  return (
    <ScrollView>
      <View>
        <Text style={commonStyles.title}>{recipe.title}</Text>

        {/* Display other details like image, ingredients, instructions, etc. */}
        {recipe.image && (
          <Image
            source={{ uri: recipe.image }}
            style={commonStyles.recipeImageDetails}
          />
        )}

        {/* Display Ingredients */}
        <Text style={commonStyles.label}>Ingredients:</Text>
        {recipe.ingredients.map((ingredient, index) => (
          <Text key={`ingredient-${index}`} style={commonStyles.detailsText}>
            {ingredient.name}
          </Text>
        ))}

        {/* Display Instructions */}
        <Text style={commonStyles.label}>Instructions:</Text>
        {recipe.instructions.map((instruction, index) => (
          <Text key={`instruction-${index}`} style={commonStyles.detailsText}>
            {instruction}
          </Text>
        ))}

        {/* Display other details like prepTime, cookTime, requirements, etc. */}
        <Text style={commonStyles.label}>Prep Time: {recipe.prepTime}</Text>
        <Text style={commonStyles.label}>Cook Time: {recipe.cookTime}</Text>
        <Text style={commonStyles.label}>Requirements: {recipe.requirements}</Text>
      </View>
    </ScrollView>
  );
};

export default RecipeDetailsScreen;
