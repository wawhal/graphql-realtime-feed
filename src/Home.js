import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView } from 'react-native';

export default class Home extends React.Component {
  state = {
    tweetText: ''
  }
  handleTextChange = (tweetText) => {
    this.setState({
      tweetText
    });
  }
  onPress = () => {
    Alert.alert('Pressed');
    this.setState({ tweetText: ''});
  }
  render() {
    return (
      <View style={styles.container}>
        <Input
          onPress={this.onPress}
          onChangeText={this.handleTextChange}
          tweetText={this.state.tweetText}
        />
        <List
          tweets={sampleTweets}
        />
      </View>
    );
  }
}

const Input = ({ onChangeText, onPress, tweetText }) => {
  return (
    <View style={styles.input}>
      <TextInput
        style={styles.textbox}
        onChangeText={onChangeText}
        value={tweetText}
        placeholder="What's happening?"
        editable
      />
      <Button
        onPress={onPress}
        title={"Send"}
        style={styles.sendButton}
      />
    </View>
  );
};

const List = ({ tweets }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.list}>
        {
          tweets.map((tweet) => (
            <View
              style={styles.tweet}
              key={tweet.id.toString()}
            >
              <Text style={styles.authorName}> {'@' + tweet.author.name} </Text>
              <Text style={styles.tweetText}>{tweet.text}</Text>
            </View>
          ))
        }
      </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 20,
    marginTop: 30,
    padding: 10,
    borderColor: '#2E86E3',
    borderWidth: 2,
    borderRadius: 5
  },
  textbox: {
    height: 40,
    flex: 0.9,
    borderColor: '#2E86E3',
    borderWidth: 2,
    borderRadius: 5,
    marginRight: 5,
    paddingHorizontal: 5,
    paddingVertical: 2
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    marginTop: 5
  },
  sendButton: {
    flex: 0.1
  },
  list: {
    flexDirection: 'column'
  },
  tweet: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    height: 100,
    width: 330,
    borderColor: '#2E86E3',
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    marginTop: 6
  },
  tweetText: {
    alignSelf: 'flex-start',
    color: 'gray'
  },
  authorName: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    marginBottom: 2
  }
});

const sampleTweets = [
  {
    id: 1,
    text: 'aello there 5 sdkjfka asdkjfkasfj jkasdkfj kasdjfk jakjk djakfj kasj kajsdfkj kaj kadjfk ajkfj kajkdj kajf jaksdjkj akjdkfj kasjfk sjk',
    author: {
      id: 1,
      name: "author1"
    }
  },
  {
    id: 2,
    text: 'aello there 5 sdkjfka asdkjfkasfj jkasdkfj kasdjfk jakjk djakfj kasj kajsdfkj kaj kadjfk ajkfj kajkdj kajf jaksdjkj akjdkfj kasjfk sjk',
    author: {
      id: 2,
      name: "author2"
    }
  },
  {
    id: 3,
    text: 'aello there 5 sdkjfka asdkjfkasfj jkasdkfj kasdjfk jakjk djakfj kasj kajsdfkj kaj kadjfk ajkfj kajkdj kajf jaksdjkj akjdkfj kasjfk sjk',
    author: {
      id: 3,
      name: "author3"
    }
  },
  {
    id: 4,
    text: 'aello there 5 sdkjfka asdkjfkasfj jkasdkfj kasdjfk jakjk djakfj kasj kajsdfkj kaj kadjfk ajkfj kajkdj kajf jaksdjkj akjdkfj kasjfk sjk',
    author: {
      id: 4,
      name: "author4"
    }
  },
  {
    id: 5,
    text: 'Hello there 5 sdkjfka asdkjfkasfj jkasdkfj kasdjfk jakjk djakfj kasj kajsdfkj kaj kadjfk ajkfj kajkdj kajf jaksdjkj akjdkfj kasjfk sjk',
    author: {
      id: 5,
      name: "author5"
    }
  },
  {
    id: 6,
    text: 'aello there 5 sdkjfka asdkjfkasfj jkasdkfj kasdjfk jakjk djakfj kasj kajsdfkj kaj kadjfk ajkfj kajkdj kajf jaksdjkj akjdkfj kasjfk sjk',
    author: {
      id: 6,
      name: "author5"
    }
  },
];
