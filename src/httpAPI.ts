import axios from "axios";

const apiKey = "8uRXaFHE9kTb1LqGVmUgOhe5DCQciMI4f";

const httpClient = axios.create({
  baseURL: "https://api.corona-19.kr",
  params: {
    serviceKey: apiKey,
  },
});

export const httpGetSummary = async (): Promise<SummaryType> => {
  const { data } = await httpClient.get("/korea/beta/");

  const { korea, API, quarantine, ...cities  } = data

  console.log(cities)

  return {
    ...korea,
    deathPcnt: API.deathPcnt,
    recPcnt: API.recPcnt,
    cities: Object.values(cities)
  };
};