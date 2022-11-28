// import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, View } from 'react-native';
import { AppBar, IconButton, Button, HStack, Surface, Text, Stack, Avatar } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function App() {
  return (
    <View style={styles.minipad}>
      <AppBar
    title="Barcode Scanner"
    subtitle="by OnixMedia"
    color='black'
    centerTitle={true}
    leading={props => (
      <IconButton icon={props => <Icon name="menu" {...props} />} {...props} />
    )}
    trailing={props => (
      <Stack>
    <Avatar
      image={
        <Image
          size={4}
          source={{ uri: "https://mui.com/static/images/avatar/2.jpg" }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: 25,
          }}
        />
      }
    />
  </Stack>
    )}
  />
  <View>
    <Image 
       source={require('./assets/GoldLiquid.png')} 
       style={{ width:'100%', height:175, justifyContent: 'center', alignContent: 'center'}}
       />
  </View>
    <View style={styles.container}>
  <Stack style={{ margin: 16 }} items="center" spacing={16}>
      <View style={styles.win}>
        <Button variant="outlined" title="Recent Search" color="#000" style={styles.win} />
        <Button variant="outlined" title="Order History" color="#000" style={styles.win} />
      </View>
      <View style={styles.win}>
        <Button variant="outlined" title="Invite a friend" color="#000" style={styles.win} />
        <Button variant="outlined" title="Need Help" color="#000" style={styles.win} />
      </View>
    <View>
    <Surface
      elevation={8}
      category="medium"
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: 300,
        height: 70,
        marginTop:.5
      }}
    >
      
      <Text>BarCode Scanner</Text>
    </Surface>
    <Surface
      elevation={8}
      category="medium"
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: 300,
        height: 70,
        marginTop:5
      }}
    >
      
      <Text>Order More</Text>
    </Surface>
  
  </View>
    </Stack>
  </View>
  </View>
    
    );
    }

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: (15),
    paddingLeft: (15), 
    paddingBottom: (250),   
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  intro: {
    // flex: 1,
    fontWeight: 'bold'
  },
  title: {
    color: 'black',
    Size: 45,
    fontWeight: 'bold',
    fontSize: 22
  },
  minipad:{
    paddingTop: 25,
  },
  win:{
    flexDirection: 'row',
    paddingBottom: 30,
    paddingTop: 30,
    width: 150, 
    height: 150, 
    justifyContent: "center",
    alignItems: "center",
  }
});