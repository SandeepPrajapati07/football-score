import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMatches } from "../../services/api"; 
export const fetchMatchesByDate = createAsyncThunk(
  "matches/fetchMatchesByDate",
  async (date) => {
    const response = await fetchMatches(date);
    const data = response.data;
    console.log('data: ', data);

    if(!data){
      throw new Error( 'No Matchs found')
    }

    // Check if data is an array
    if (!Array.isArray(data)) {
      throw new Error("Invalid data format. Expected an array.");
    }

    // Transform API response to group by league
    const groupedMatches = data.reduce((acc, match) => {
      const leagueId = match.league_id;
      const leagueName = `League ${leagueId}`;

      if (!acc[leagueId]) {
        acc[leagueId] = { league: leagueName, games: [] };
      }

      acc[leagueId].games.push({
        time: new Date(match.starting_at).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        teams: match.name,
      });

      return acc;
    }, {});

    return Object.values(groupedMatches);
  }
);


const matchesSlice = createSlice({
  name: "matches",
  initialState: {
    matches: [],
    status: "idle",
    error: null,
  },
  reducers: {
    clearMatches: (state) => {
      state.matches = [];
      state.status = "idle"; // Optional: reset status
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMatchesByDate.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMatchesByDate.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.matches = action.payload;
      })
      .addCase(fetchMatchesByDate.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { clearMatches } = matchesSlice.actions;
export default matchesSlice.reducer;

