import React, { useEffect, useState, useRef } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { useQuery } from "react-query";
import { lolApi } from "../Utils/api";
const Results = ({ route }) => {
  const [date, setDate] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const timeCalc = (time) => {
    setDate(Math.floor(time / 86400));
    const totalSeconds = time % 86400;
    const totalMinutes = Math.floor(totalSeconds / 60);
    setHours(Math.floor(totalMinutes / 60));
    setMinutes(totalMinutes % 60);
  };

  useEffect(() => {
    const timeDiff = route.params.end - route.params.start;
    timeCalc(timeDiff);
  }, []);
  const { isLoading: lolLoading, data: lolData } = useQuery(
    [
      "myData",
      {
        start: route.params.start,
        end: route.params.end,
        name: route.params.name,
      },
    ],
    lolApi
  );

  return (
    <WindowContainer>
      {lolLoading ? (
        <Text style={{ fontWeight: "bold", fontSize: 50 }}>
          {"분석중입니다..."}
        </Text>
      ) : (
        <ResultsTextBox>
          <Text
            style={{ fontWeight: "bold", fontSize: 40 }}
          >{`${route.params.name}님은`}</Text>
          <Text style={{ fontWeight: "bold", fontSize: 30 }}>
            {`${date}일 ${hours}시간 ${minutes}분 동안 ${lolData.length}판 플레이 하였습니다.`}
          </Text>
        </ResultsTextBox>
      )}
    </WindowContainer>
  );
};
export default Results;

const WindowContainer = styled.View`
  flex: 1;
  background-color: skyblue;
  justify-content: center;
  align-items: center;
`;
const ResultsTextBox = styled.View`
  justify-content: center;
  align-items: center;
`;
