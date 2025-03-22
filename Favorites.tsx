import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native';



const FavoritesScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('Foods');

  // Sample Data for Favorites
  const foodFavorites = [
    { id: '1', name: 'Fruits', image: require('../../assets/images/Fruits.jpeg') },
    { id: '2', name: 'Kare-kare', image: require('../../assets/images/kare-kare.jpg') }
  ];

  const exerciseFavorites = [
    { id: '3', name: 'Planking', image: require('../../assets/images/planking.jpg') },
    { id: '4', name: 'Jogging', image: require('../../assets/images/Jogging.jpg') }
  ];

  const favoriteItems = selectedCategory === 'Foods' ? foodFavorites : exerciseFavorites;
 
  return (
    
    <View style={styles.container}>
      {/* Title */}
      <Image source={require('../../assets/images/LOGO.png')} style={styles.logo} />
      <Text style={styles.title}>Favorites</Text>

      {/* Toggle Buttons */}
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[styles.toggleButton, selectedCategory === 'Foods' && styles.activeButton]}
          onPress={() => setSelectedCategory('Foods')}>
          <Text style={[styles.toggleText, selectedCategory === 'Foods' && styles.activeText]}>Foods</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.toggleButton, selectedCategory === 'Exercise' && styles.activeButton]}
          onPress={() => setSelectedCategory('Exercise')}>
          <Text style={[styles.toggleText, selectedCategory === 'Exercise' && styles.activeText]}>Exercise</Text>
        </TouchableOpacity>
      </View>

      {/* Favorite Items List */}
      <FlatList
        data={favoriteItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <Text style={styles.itemText}>{item.name}</Text>
            <TouchableOpacity>
              <Image source={require('../../assets/images/heart.png')} style={styles.heartIcon} />
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Bottom Navigation */}
      
                       <View style={styles.bottomNav}>
                         <TouchableOpacity>
                          <View>
                          <Image source={require('../../assets/images/Home.png')} style={styles.icon}/>
                          <Text style={styles.label}>Home</Text>
                          </View>
                         </TouchableOpacity>
                 
                         <TouchableOpacity>
                         <View>
                         <Image source={require('../../assets/images/heart.png')} style={styles.icon} />
                         <Text style={styles.label}>Favorites</Text>
                         </View>
                         </TouchableOpacity>
                 
                         <TouchableOpacity>
                         <View>
                         <Image source={require('../../assets/images/meal.png')} style={styles.icon} />
                         <Text style={styles.label}>Meal Plan</Text>
                         </View>  
                         </TouchableOpacity>
                 
                 
                         <TouchableOpacity>
                         <View>
                         <Image source={require('../../assets/images/Tracker.png')} style={styles.icon} />
                         <Text style={styles.label}>Tracker</Text>
                         </View>
                         </TouchableOpacity>
                 
                         <TouchableOpacity>
                           <View>
                           <Image source={require('../../assets/images/Profile.png')} style={styles.icon} />
                           </View>
                           <Text style={styles.label}>Profile</Text>
                         </TouchableOpacity>
                       </View>
                     </View>
  );
};

const styles = StyleSheet.create({

    logo: {
        width: 60,
        height: 70,
        marginTop: 17,
        borderRadius: 10,
        marginBottom: 10,
      },

  container: {
    flex: 1,
    backgroundColor: '#e8f5e9',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
  toggleButton: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: '#dcdcdc',
    borderRadius: 10,
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: '#2ecc71',
  },
  toggleText: {
    fontSize: 16,
    color: '#555',
  },
  activeText: {
    color: 'white',
    fontWeight: 'bold',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  itemImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  itemText: {
    flex: 1,
    fontSize: 16,
  },
  heartIcon: {
    width: 24,
    height: 24,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },

  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center', 
    padding: 15,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    elevation: 10, 
  },

  label:{
    marginTop: 4,
    marginRight: 5,
  },

  icon: {
    width: 30,
    height: 30,
    tintColor: '#555', 

  },
});

export default FavoritesScreen;

