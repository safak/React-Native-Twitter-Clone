import React, { useState } from "react";
import Styled from "styled-components/n";
import Feed from "../components/Feed";
import NewTweetButton from "../components/NewTweetButton";
import { postArray } from "../utils/DummyData";

const Container = Styled.View`
    flex:1;
    padding:10px
    background-color:white
`;

const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <NewTweetButton navigation={navigation} />
      <Feed posts={postArray} />
    </Container>
  );
};

export default HomeScreen;
