const API_KEY = "RGAPI-519f8a34-91a7-475c-9259-a373cb2a6ec5";
const BASE_URL = "https://kr.api.riotgames.com/lol";
export const lolApi = async ({ queryKey }) => {
  let totalTime = 0;
  // const userName = "불멸창식";
  const [_, { start, end, name }] = queryKey;
  // console.log(start, end, name);
  const responseSummoner = await fetch(
    `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/` +
      `${name}` +
      `?api_key=` +
      `${API_KEY}`
  ).then((res) => res.json());

  const puuid = responseSummoner.puuid;
  // console.log("responseSummoner", responseSummoner);
  // console.log("puuid", puuid);
  const responseDateMatchList = await fetch(
    `https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/` +
      `${puuid}` +
      `/ids?startTime=` +
      `${start}` +
      `&endTime=` +
      `${end}` +
      `&start=0&count=100&api_key=` +
      `${API_KEY}`
  ).then((res) => res.json());
  // console.log(responseDateMatchList);

  // const timeList = await responseDateMatchList.map(async (matchId, index) => {
  //   const response = await fetch(
  //     `https://asia.api.riotgames.com/lol/match/v5/matches/` +
  //       `${matchId}` +
  //       `?api_key=` +
  //       `${API_KEY}`
  //   ).then((res) => res.json());
  // });

  // await Promise.all(
  //   responseDateMatchList.map(async (matchId, index) => {
  //     const response = await fetch(
  //       `https://asia.api.riotgames.com/lol/match/v5/matches/` +
  //         `${matchId}` +
  //         `?api_key=` +
  //         `${API_KEY}`
  //     ).then((res) => res.json());
  //     totalTime += response.info.gameDuration;
  //     // console.log(totalTime);
  //   })
  // );
  return responseDateMatchList;
};
