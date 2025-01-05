"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchMatchesByDate } from "../store/slices/continentSlice";

export default function LiveMatches() {
  const dispatch = useDispatch();
  const { matches, status, error } = useSelector((state) => state.matches);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );

 
  useEffect(() => {
    dispatch(fetchMatchesByDate(selectedDate));
  }, [dispatch, selectedDate]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleDateChange = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    setSelectedDate(formattedDate);
    dispatch(fetchMatchesByDate(formattedDate));
  };

  const generateUpcomingDates = () => {
    const dates = [];
    for (let i = 0; i < 10; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const filteredMatches = Array.isArray(matches)
    ? matches?.filter((match) =>
        match.league.toLowerCase().includes(searchTerm) 
      )
    : [];

  return (
    <Card className="w-full p-4">
      <CardHeader className="flex flex-row gap-x-3">
        <div className="relative">
          <Button variant="outline" className="flex-[1] ps-5 border-none bg-[#303030] hover:bg-[#303030] rounded-[10px]">Live (1)</Button>
          <span className="w-[10px] h-[10px] absolute block rounded-full bg-[#C3CC5A] top-[13px] left-[7px]"></span>
        </div>
        <Input
          placeholder="Search For Matches"
          className="mt-0 w-full flex-[6] border-none bg-[#303030] hover:bg-[#303030] rounded-[10px]"
          onChange={handleSearch}
        />
        <Button className="border px-3 flex-[2] border-none bg-[#303030] hover:bg-[#303030] rounded-[10px]">All Matches</Button>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-around space-x-2 overflow-x-auto my-4 pb-[10px]">
          {generateUpcomingDates().map((date, idx) => {
            const formattedDate = date.toISOString().split("T")[0];
            const isActive = formattedDate === selectedDate;
            return (
              <Button
                key={idx}
                variant={
                  formattedDate === selectedDate ? "primary" : "secondary"
                }
                className={`rounded-[10px] px-4 py-2 transition-colors ${
                  isActive
                    ? "border-[#C3CC5A] text-[#C3CC5A] border"
                    : "bg-[#303030] text-white hover:bg-gray-700"
                }`}
                size="sm"
                onClick={() => handleDateChange(date)}>
                {date.toLocaleDateString("en-US", {
                  weekday: "short",
                  day: "numeric",
                  month: "short",
                })}
              </Button>
            );
          })}
        </div>

        {status === "loading" && <p className="text-center">Loading...</p>}
        {status === "failed" && (
          <p className="text-center text-red-500">
            {error || "Failed to load matches."}
          </p>
        )}
        {status === "succeeded" && (
          <div className="space-y-4 overflow-y-auto max-h-96">
            {filteredMatches.length > 0 ? (
              filteredMatches.map((match, idx) => (
                <div key={idx} className="rounded-lg border border-black shadow shadow-black">
                  <p className="text-sm font-semibold rounded bg-black px-4 py-2">{match.league}</p>
                  <div className="">
                    {match.games.map((game, index) => (
                      <div 
                        className={`flex justify-between py-1 px-4 ${
                          (index%2==0) ? 'bg-[#2C2C2C]' : ''
                        }`}
                        key={index}>
                          <span className="text-gray-400 text-sm flex-1">{game.time}</span>
                          <div className="flex gap-3 flex-[2] justify-center">
                            <span className="flex-1">{game.teams.split('vs').at(0)}</span>
                            <span className="flex-1 text-center">-</span>
                            <span className="flex-1">{game.teams.split('vs').at(1)}</span>
                          </div>
                          <span className="flex-1 hidden md:hidden"></span>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No matches found.</p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
