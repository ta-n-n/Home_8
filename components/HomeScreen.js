import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons'; // Icon library

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello 👋🏻</Text>
          <Text style={styles.name}>Christie Doe</Text>
        </View>
      </View>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?ihttps://s3-alpha-sig.figma.com/img/2425/1bda/8af0c9001ab883dd52875da9a3f6f754?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BckALeDsvvkePEWEfvY1jFsEElKXvC5JVy94ubWAJNOFsj0WrY6-gKFyWORgx9uVa2nVouw~geaSifJmkw3tPUd~ZIAF2YQGbiJvnPyrV6xV0PiGTV6A2tPSBHmNL4qFK~lfaH75eCh~yXkXF1kjLjNBjezlkua0ZZcJ1aSJS02JwrjHuariPf02G87NJQ~RLmAdoNWv9sGRG77KgK~rzWQVx3xkr0i0gjgEIOgk-wZObUpdwp4M1~5JNqJiEkYCevpjADJLF7qpMdXBGTQN6SGTfGVkyNHHlBaB~rgLSkhepyVSL385U1z8T4nYtbcewAmrIqI7FOBp3mwAuNr2gA__mg=3' }}
          style={styles.profileImage}
        />
      {/* Insights Section */}
      <Text style={styles.insightTitle}>Your Insights</Text>
      <View style={styles.insightsContainer}>
        <TouchableOpacity style={styles.insightBox}>
          <Ionicons name="scan-outline" size={32} color="#8089FF" />
          <Text style={styles.insightText}>Scan new</Text>
          <Text style={styles.insightSubText}>Scanned 483</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.insightBox}>
          <Ionicons name="alert-circle-outline" size={32} color="#FFB6A0" />
          <Text style={styles.insightText}>Counterfeits</Text>
          <Text style={styles.insightSubText}>Counterfeited 32</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.insightBox}>
          <Ionicons name="checkmark-circle-outline" size={32} color="#9DE2BE" />
          <Text style={styles.insightText}>Success</Text>
          <Text style={styles.insightSubText}>Checkouts 8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.insightBox}>
          <Ionicons name="calendar-outline" size={32} color="#A8D8FC" />
          <Text style={styles.insightText}>Directory</Text>
          <Text style={styles.insightSubText}>History 26</Text>
        </TouchableOpacity>
      </View>

      {/* Explore More */}
      <View style={styles.exploreMore}>
        <Text style={styles.exploreText}>Explore More</Text>
        <Feather name="arrow-right" size={24} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  // header: {
  //   top : 63,
  //   left: 23,

  // },
  greeting: {
    fontFamily: 'Helvetica Now Display', 
    fontSize: 22,
    fontWeight: '700',
    lightHeight: 32.34, 
    letterSpacing : 3,
    top : 63,
    left: 23,
  },
  
  
  name: {
    fontFamily: 'Helvetica Now Display', 
    fontSize: 14,
    fontWeight: '400',
    lightHeight: 21.48, 
    letterSpacing : 3,
    top : 63,
    left: 23,
  },
  profileImage: {
    width: 47.05,
    height: 46,
    borderRadius: 12,
    top: 69,
    left: 308,
  },
  insightTitle: {
    fontFamily: 'Helvetica Now Display', 
    fontSize: 18,
    fontWeight: '400',
    lightHeight: 26.46, 
    letterSpacing : 3,
    top: 148,  
  },
  insightsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    top : 205,
    left : 20,
    borderRadius: 16,
    height : 176.82,
    width : 310,
  
   
  },
  insightBox: {
    backgroundColor: '#F9FAFB',
    width: '47%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  insightText: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 5,
  },
insightSubText: {
    fontSize: 12,
    color: '#777',
  },
  exploreMore: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  exploreText: {
    fontSize: 16,
    fontWeight: '600',
  },
});