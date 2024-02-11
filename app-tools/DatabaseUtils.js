import * as FileSystem from 'expo-file-system';

const databaseFilePath = FileSystem.documentDirectory + 'database.json';

const initializeDatabase = async () => {
  try {
    const fileInfo = await FileSystem.getInfoAsync(databaseFilePath);

    if (!fileInfo.exists) {
      await FileSystem.writeAsStringAsync(databaseFilePath, JSON.stringify({ data: [] }));
    }
  } catch (error) {
    console.error('Error initializing database:', error);
  }
};

const getAllData = async () => {
  try {
    await initializeDatabase();
    const data = await FileSystem.readAsStringAsync(databaseFilePath);
    return JSON.parse(data).data;
  } catch (error) {
    console.error('Error reading data:', error);
    return [];
  }
};

const getDataById = async (id) => {
  try {
    await initializeDatabase();
    const data = await FileSystem.readAsStringAsync(databaseFilePath);
    const records = JSON.parse(data).data;
    return records.find((record) => record.id === id);
  } catch (error) {
    console.error('Error getting data by ID:', error);
    return null;
  }
};

const insertRecipe = async (newRecipe) => {
    try {
      await initializeDatabase();
      const data = await FileSystem.readAsStringAsync(databaseFilePath);
      const records = JSON.parse(data).data;
  
      newRecipe.id = Date.now();
      records.push(newRecipe);
  
      await FileSystem.writeAsStringAsync(databaseFilePath, JSON.stringify({ data: records }));
      return newRecipe;
    } catch (error) {
      console.error('Error inserting recipe:', error);
      return null;
    }
  };

const updateDataById = async (id, updatedData) => {
  try {
    await initializeDatabase();
    const data = await FileSystem.readAsStringAsync(databaseFilePath);
    let records = JSON.parse(data).data;
    const index = records.findIndex((record) => record.id === id);
    if (index !== -1) {
      records[index] = { ...records[index], ...updatedData };
      await FileSystem.writeAsStringAsync(databaseFilePath, JSON.stringify({ data: records }));
      return records[index];
    }
    return null;
  } catch (error) {
    console.error('Error updating data by ID:', error);
    return null;
  }
};

const deleteDataById = async (id) => {
  try {
    await initializeDatabase();
    const data = await FileSystem.readAsStringAsync(databaseFilePath);
    let records = JSON.parse(data).data;
    const index = records.findIndex((record) => record.id === id);
    if (index !== -1) {
      const deletedRecord = records.splice(index, 1)[0];
      await FileSystem.writeAsStringAsync(databaseFilePath, JSON.stringify({ data: records }));
      return deletedRecord;
    }
    return null;
  } catch (error) {
    console.error('Error deleting data by ID:', error);
    return null;
  }
};

const deleteAllData = async () => {
  try {
    await initializeDatabase();
    await FileSystem.writeAsStringAsync(databaseFilePath, JSON.stringify({ data: [] }));
  } catch (error) {
    console.error('Error deleting all data:', error);
  }
};

const insertExampleData = async () => {
    try {
      await initializeDatabase();
      const data = await FileSystem.readAsStringAsync(databaseFilePath);
      const records = JSON.parse(data).data;
  
      // Inserting example data
      const exampleData = {
        id: Date.now(),
        title: 'Example Recipe',
        image: 'https://feelgoodfoodie.net/wp-content/uploads/2023/09/Chicken-Burrito-Bowl-TIMG.jpg',
        ingredients: [
          { name: 'Ingredient 1', amount: '1 cup' },
          { name: 'Ingredient 2', amount: '2 tbsp' },
          // ... other ingredients
        ],
        instructions: [
          '1. Step 1...',
          '2. Step 2...',
          // ... other instructions
        ],
        prepTime: '15 minutes',
        cookTime: '30 minutes',
        requirements: ['Stove', 'Pan', 'Cutting board'],
      };
  
      records.push(exampleData);
  
      await FileSystem.writeAsStringAsync(databaseFilePath, JSON.stringify({ data: records }));
      return exampleData;
    } catch (error) {
      console.error('Error inserting example data:', error);
      return null;
    }
  };

export {
  getAllData,
  getDataById,
  insertRecipe,
  updateDataById,
  deleteDataById,
  deleteAllData,
  insertExampleData,
};
