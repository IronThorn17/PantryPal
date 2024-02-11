// RecipeListScreen.js
import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { getAllData } from '../app-tools/DatabaseUtils';
import { useNavigation } from '@react-navigation/native';

// Styles
import commonStyles from '../app-tools/Styles';

const defaultImageSource = require('../assets/icons/128/general128-26.jpg');

const RecipeListScreen = ({ route, navigation }) => {
  const [recipes, setRecipes] = useState([]);
  const { navigate } = useNavigation(); // Use the useNavigation hook

  const fetchData = useCallback(async () => {
    const data = await getAllData();
    setRecipes(data);
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchData();
    });

    return unsubscribe;
  }, [navigation, fetchData]);

  const handleRecipeSelect = (recipe) => {
    navigate('RecipeDetailsScreen', { recipe }); // Navigate to RecipeDetailsScreen
  };

  return (
    <View>
      <Text style={commonStyles.title}>Recipe List</Text>
      <ScrollView style={commonStyles.scrollView}>
        {Array.isArray(recipes) &&
          recipes.map((recipe) => (
            <TouchableOpacity
              key={recipe.id}
              style={commonStyles.recipeContainer}
              onPress={() => handleRecipeSelect(recipe)}
            >
              <Image
                source={recipe.image ? { uri: recipe.image } : defaultImageSource}
                style={commonStyles.recipeImage}
              />
              <Text style={commonStyles.recipeItemTitle}>{recipe.title}</Text>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
};

export default RecipeListScreen;
