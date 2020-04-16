import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, TextInput } from 'react-native';
import axios from 'axios';
import { ListItem } from 'react-native-elements';

// const Home: () => React$Node = () => {
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            listNames: null
        };
        // this.getList = this.getList.bind(this);
      }
    // state = {
    //     text: '',
    //     listNames: null
    // }
    // nameList = [
    //     {key: 'Devin',
    //     title: 'TIME IN BOTTLE'},
    //     {key: 'Dan',
    //     title: 'TIME IN SOUND'},
    //     {key: 'Dominic',
    //     title: 'OOO IN SOUND'}
    // ];

    // componentDidMount() {
    //     console.log("componentDidMount");
    //     // this.getList();
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //     .then(response => {
    //         return response.json();
    //     }).then(responseData => {
    //         console.log(responseData);
    //         this.setState(prevState => ({
    //             listNames: prevState.listNames = responseData
    //         }));
    //     })
    // }

    // EN LUGAR DE PROMESAS SE USA ASYNC Y AWAIT 
    async componentDidMount() {
        this.getList();
        // const response = await fetch("https://api.openbrewerydb.org/breweries");
        // const responseData = await response.json();
        // this.setState(prevState => ({
        //     listNames: prevState.listNames = responseData
        // }));

        // let self  = this;
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        // .then(function (response) {
        //     console.log(response.data);
        //     self.setState(prevState => ({
        //         listNames: prevState.listNames = response.data
        //     }));
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });

    }
    async getList() {
        try {
            const reponse = await axios.get("https://api.openbrewerydb.org/breweries")
            console.log(reponse.data);
            this.setState(prevState => ({
                listNames: prevState.listNames = reponse.data
            }));
        } catch(error) {
            console.log(error);
        }
    }

    submitName(name) {
        console.log("submitName");
        console.log(name);
        this.setState({
            listNames: [...this.state.listNames, {
                id: Math.random(),
                name: name.text,
                street: 'Providencia',
                city: 'Santiago',
                state: 'Region Metropolitana'
            }]
        });
    }

    deleteName(id) {
        console.log(id);
        this.setState({
            listNames: [...this.state.listNames.filter((item) => item.id !== id)]
        });
    }

    getName(name) {
        console.log("nombre");
        console.log(name);
        this.state.text = name;
    }
    showList() {
        console.log("listNames")
        return (
        // <View style={styles.container}></View>
        <FlatList
          ItemSeparatorComponent={() => <View style={styles.separator}></View>}
          data={this.state.listNames}
          renderItem={({item}) => 
        //   <Text style={styles.item} onPress={() => this.getName(item.title)} >{item.title}</Text>
          <ListItem title={`${item.name}`} subtitle={`${item.street} ${item.city}, ${item.state}`} onPress={() => this.deleteName(item.id)}></ListItem>
          }
        />
    )};
    render() {
            return (
                <View style={styles.container}>
                    <TextInput
                    style={{height: 40}}
                    // value={this.state.text}
                    placeholder="Type here to add list!"
                    onChangeText={(text) => this.submitName({text})}
                    />
                    <Text style={{padding: 10, fontSize: 42}}>
                    {/* {this.state.text.split(' ').map((word) => word && '🍕').join(' ')} */}
                    </Text>
                    {this.showList()}
                </View>
            )
    }
}
const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    // separator: {
    //     borderBottomColor: 'black',
    //     borderBottomWidth: 1,
    //     marginLeft: 5,
    //     marginRight: 5
    // }
    separator: {
        height: 1,
        backgroundColor: '#CED0CE'
    }
  })
  
//   export default Home;