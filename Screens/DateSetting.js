import React, { useEffect, useState, useRef } from "react";
import { Text, Dimensions } from "react-native";
import DatePicker from "react-native-date-picker";
import styled from "styled-components/native";
const WindowWidth = Dimensions.get("window").width;
const WindowHeight = Dimensions.get("window").height;
const dateStart = new Date(2023, 1, 1, 12);
const dateEnd = new Date(2023, 1, 2, 12);
// const timeStampStart = dateStart.getTime() / 1000;
// const timeStampEnd = dateEnd.getTime() / 1000;
let today = new Date(2023, 1, 1, 12);
let todayTimestamp = today.getTime();
let day = today.getDay();
let monday = todayTimestamp - ((day + 6) % 7) * 86400 * 1000;
let sunday = todayTimestamp + (6 - ((day + 6) % 7)) * 86400 * 1000;
const timeStampStart = (monday / 1000).toFixed();
const timeStampEnd = (sunday / 1000).toFixed();

const DateSetting = ({ route, navigation: { navigate } }) => {
  // useEffect(() => {
  //   console.log("오늘", todayTimestamp);
  //   console.log("요일", day);
  //   console.log("월요일", monday);
  //   console.log("일요일", sunday);
  // }, []);
  // const { isLoading: lolLoading, data: lolData } = useQuery(
  //   [
  //     "myData",
  //     { start: timeStampStart, end: timeStampEnd, name: route.params.name },
  //   ],
  //   lolApi
  // );
  // useEffect(() => {
  //   console.log("loading:", lolLoading);
  //   console.log("data:", lolData);
  //   if (!lolLoading) {
  //     const totalMinutes = Math.floor(lolData / 60);

  //     const seconds = lolData % 60;
  //     const hours = Math.floor(totalMinutes / 60);
  //     const minutes = totalMinutes % 60;

  //     console.log(hours, minutes, seconds);
  //   }
  // }, [lolLoading]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <WindowContainer>
      <DateContainer>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>{"시작시간"}</Text>
        <DatePickerBox>
          <DatePicker
            date={startDate}
            onDateChange={setStartDate}
            dividerHeight={10}
            androidVariant="nativeAndroid"
            textColor="black"
          />
        </DatePickerBox>
      </DateContainer>
      <DateContainer>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>{"종료시간"}</Text>
        <DatePickerBox>
          <DatePicker
            date={endDate}
            onDateChange={setEndDate}
            dividerHeight={10}
            androidVariant="nativeAndroid"
            textColor="black"
          />
        </DatePickerBox>
      </DateContainer>
      <ConfirmDateBtn
        onPress={() => {
          const start = (startDate.getTime() / 1000).toFixed();
          const end = (endDate.getTime() / 1000).toFixed();

          navigate("Results", {
            name: route.params.name,
            start,
            end,
          });
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>{"분석하기"}</Text>
      </ConfirmDateBtn>
    </WindowContainer>
  );
};
export default DateSetting;

const WindowContainer = styled.View`
  flex: 1;
  background-color: skyblue;
  justify-content: space-evenly;
  align-items: center;
`;

const DateContainer = styled.View``;

const DatePickerBox = styled.View`
  background-color: white;
  justify-content: center;
  align-items: center;
  width: ${WindowWidth * 0.9}px;
  border-radius: 25px;
  border-width: 5px;
  border-color: slateblue;
`;
const ConfirmDateBtn = styled.TouchableOpacity`
  background-color: slateblue;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 60px;
  border-radius: 25px;
  border-width: 5px;
  border-color: slateblue;
`;
