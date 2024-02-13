import { StyleSheet } from 'react-native';

const commonStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18, 
        fontWeight: 'bold',
    },
    tabBar: {
        backgroundColor: '#f0f0f0',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        borderRadius: 10,
    },
    tabBarLabel: {
        fontSize: 14,
    },
    tabBarIcon: {
        width: 48,
        height: 48,
    },
    iconSize: 24,
    scrollView: {
        padding: 10,
    },
    recipeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#3498db',
        padding: 15,
        margin: 5,
        borderRadius: 10,
    },
    recipeImage: {
        width: 60,
        height: 60,
        borderRadius: 10,
    },
    recipeDetailsImage: {
        marginTop: 10,
        width: '95%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    recipeTitle: {
        paddingTop: 20,
        paddingLeft: 20,
        fontSize: 24,
        fontWeight: 'bold',
    },
    recipeItemTitle: {
        marginLeft: 10,
        fontSize: 16,
        padding: 10,
    },
    recipeDetailsText: {
        marginLeft: 25,
        fontSize: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingLeft: 10,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 16,
        marginBottom: 8,
        marginLeft: 20,
    },
    link: {
        color: 'blue',
        fontSize: 16,
        marginBottom: 16,
    },
    button: {
        backgroundColor: 'green',
        color: 'white',
        padding: 10,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 16,
    },
    title: {
        paddingTop: 50,
        paddingLeft: 20,
        fontSize: 24,
        fontWeight: 'bold',
    }
});

export default commonStyles;