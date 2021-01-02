import React from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";

const ReceptionScreen = () => {
  return (
    <View style={styles.container}>
      {/* Search Patient */}
      <View style={styles.form_group}>
        <TextInput
          placeholder="Search Patient"
          placeholderTextColor="#777"
          style={styles.input}
        />
      </View>
      {/* Search Output */}

      <ScrollView>
        <View style={styles.search_output}>
          <Text style={styles.card_title}>People Found</Text>
          <View style={styles.card}>
            <View style={styles.card_body}>
              <View style={styles.card_image}></View>
              <View style={styles.card_text}>
                <Text style={styles.card_title}>Name</Text>
                <Text style={styles.card_subText}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laborum autem
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.card_body}>
              <View style={styles.card_image}></View>
              <View style={styles.card_text}>
                <Text style={styles.card_title}>Name</Text>
                <Text style={styles.card_subText}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laborum autem
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.card_body}>
              <View style={styles.card_image}></View>
              <View style={styles.card_text}>
                <Text style={styles.card_title}>Name</Text>
                <Text style={styles.card_subText}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laborum autem
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.card_body}>
              <View style={styles.card_image}></View>
              <View style={styles.card_text}>
                <Text style={styles.card_title}>Name</Text>
                <Text style={styles.card_subText}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laborum autem
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.card_body}>
              <View style={styles.card_image}></View>
              <View style={styles.card_text}>
                <Text style={styles.card_title}>Name</Text>
                <Text style={styles.card_subText}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laborum autem
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.card_body}>
              <View style={styles.card_image}></View>
              <View style={styles.card_text}>
                <Text style={styles.card_title}>Name</Text>
                <Text style={styles.card_subText}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laborum autem
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#f4f4f4",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
  bgImage: {
    flex: 1,
  },

  form_group: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },

  input: {
    paddingHorizontal: 5,
    paddingVertical: 10,

    borderBottomWidth: 3,
    borderBottomColor: "#777",
    paddingBottom: 5,

    width: "100%",
    marginLeft: 10,
    color: "#ccc",
    fontSize: 20,
  },

  card: {
    backgroundColor: "#fff",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,

    marginBottom: 20,
  },
  search_output: {
    marginVertical: 50,
  },
  card_body: {
    flexDirection: "row",
    width: "100%",
  },
  card_image: {
    backgroundColor: "#f18f01ff",
    width: "20%",
  },
  card_text: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: "80%",
  },
  card_title: {
    color: "#444",
    fontSize: 20,
    fontWeight: 500,
    marginBottom: 10,
  },
});

export default ReceptionScreen;
