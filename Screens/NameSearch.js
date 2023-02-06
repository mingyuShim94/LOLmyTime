import React, { useEffect, useState, useRef } from "react";
import { Text, TextInput } from "react-native";
import styled from "styled-components/native";

const NameSearch = ({ navigation: { navigate } }) => {
  const [myAnswer, setMyAnswer] = useState("");

  return (
    <WindowContainer>
      <NameInput
        placeholder="소환사의 이름을 입력해주세요"
        onChangeText={(newText) => setMyAnswer(newText)}
        onSubmitEditing={() => navigate("DateSetting", { name: myAnswer })}
        value={myAnswer}
        autoFocus={false}
      ></NameInput>
    </WindowContainer>
  );
};
export default NameSearch;

const WindowContainer = styled.View`
  flex: 1;
  background-color: skyblue;
  justify-content: center;
  align-items: center;
`;

const NameInput = styled.TextInput`
  background-color: white;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 15px;
`;
