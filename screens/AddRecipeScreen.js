// AddRecipeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { insertRecipe } from '../app-tools/DatabaseUtils';

// Styles
import commonStyles from '../app-tools/Styles';

const AddRecipeScreen = ({ navigation }) => {
    const initialRecipeData = {
      title: '',
      image: '', // Store the image URL here
      ingredients: [''],
      instructions: [''],
      prepTime: '',
      cookTime: '',
      requirements: '',
    };
  
    const [recipeData, setRecipeData] = useState(initialRecipeData);
  
    const handleInputChange = (field, value, index) => {
      const updatedData = { ...recipeData };
  
      if (Array.isArray(updatedData[field])) {
        updatedData[field][index] = value;
      } else {
        updatedData[field] = value;
      }
  
      setRecipeData(updatedData);
    };
  
    const addField = (field) => {
      const updatedData = { ...recipeData };
  
      if (Array.isArray(updatedData[field])) {
        updatedData[field].push('');
      }
  
      setRecipeData(updatedData);
    };
  
    const saveRecipe = async () => {
      // Validate required fields
      if (!recipeData.title) {
        alert('Please fill in the required fields.');
        return;
      }
  
      // Remove empty fields before saving
      const cleanedRecipeData = { ...recipeData };
      Object.keys(cleanedRecipeData).forEach((key) => {
        if (Array.isArray(cleanedRecipeData[key])) {
          cleanedRecipeData[key] = cleanedRecipeData[key].filter(Boolean);
        }
      });
  
      // Insert data into the JSON file
      const insertedRecipe = await insertRecipe(cleanedRecipeData);
  
      if (insertedRecipe) {
        // Clear text fields for a new recipe
        setRecipeData(initialRecipeData);
  
        // Navigate back to the recipe list screen
        // navigation.goBack(); // doesn't update RecipeList screen automatically
      }
    };
  
    return (
      <ScrollView>
        <View>
          <Text style={commonStyles.title}>Add Recipe</Text>
  
          {/* Title */}
          <TextInput
            style={commonStyles.input}
            placeholder="Recipe Title"
            value={recipeData.title}
            onChangeText={(value) => handleInputChange('title', value)}
          />
  
          {/* Image */}
          <TextInput
            style={commonStyles.input}
            placeholder="Image URL"
            value={recipeData.image}
            onChangeText={(value) => handleInputChange('image', value)}
          />
  
          {/* Ingredients */}
          <Text style={commonStyles.label}>Ingredients</Text>
          {recipeData.ingredients.map((ingredient, index) => (
            <TextInput
              key={`ingredient-${index}`}
              style={commonStyles.input}
              placeholder={`Ingredient ${index + 1}`}
              value={ingredient}
              onChangeText={(value) => handleInputChange('ingredients', value, index)}
            />
          ))}
          <TouchableOpacity onPress={() => addField('ingredients')}>
            <Text style={commonStyles.link}>Add Ingredient</Text>
          </TouchableOpacity>
  
          {/* Instructions */}
          <Text style={commonStyles.label}>Instructions</Text>
          {recipeData.instructions.map((instruction, index) => (
            <TextInput
              key={`instruction-${index}`}
              style={commonStyles.input}
              placeholder={`Step ${index + 1}`}
              value={instruction}
              onChangeText={(value) => handleInputChange('instructions', value, index)}
            />
          ))}
          <TouchableOpacity onPress={() => addField('instructions')}>
            <Text style={commonStyles.link}>Add Step</Text>
          </TouchableOpacity>
  
          {/* Prep Time */}
          <TextInput
            style={commonStyles.input}
            placeholder="Prep Time"
            value={recipeData.prepTime}
            onChangeText={(value) => handleInputChange('prepTime', value)}
          />
  
          {/* Cook Time */}
          <TextInput
            style={commonStyles.input}
            placeholder="Cook Time"
            value={recipeData.cookTime}
            onChangeText={(value) => handleInputChange('cookTime', value)}
          />
  
          {/* Requirements */}
          <TextInput
            style={commonStyles.input}
            placeholder="Requirements"
            value={recipeData.requirements}
            onChangeText={(value) => handleInputChange('requirements', value)}
          />
  
          {/* Save Button */}
          <TouchableOpacity onPress={saveRecipe}>
            <Text style={commonStyles.button}>Save Recipe</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  };
  
  export default AddRecipeScreen;