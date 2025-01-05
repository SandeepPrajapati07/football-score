/* eslint-disable @next/next/no-img-element */

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Bookmark } from 'lucide-react'
export default function TrendingNews() {
  const newsItems = [
    {
      title: "Results And Scores From The Premier League....!!",
      image: "https://s3-alpha-sig.figma.com/img/001c/3303/ac9d752717f8c7f58b81b70f259d3e53?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R3NDuWNt-nvMxcyO61brrNa1odMcZ219hM1ws0oayZDOZzSqGCanvhxYWOpjDa0m~Pn96GjG3~S7qcvPIZLzf8Bb~tWdsDe4fJqnHrhFzxS8ODyKj8hxQ1Fb33P4waWzI1MmP3FGwWEqfFh8iNMlM7wjnbtGgnJmkTaygueJ91lo6hzmJM-8QRyqDAtUXQH97phtwg3plmq8X-KzSdj5LcNjlROvG8v7cQ-ShJcCNlfiG3maF4HlCkFzeCi5KDKrrmKJimdnL~M4qt3ggXgBK2vEccug2TymvA~GyOWC6ym-MPQIUb4aRRuQxxTVE7tgZqraA53VB9F5pHpt87MQ7Q__",
      time: "5 Hours Ago",
      icon: Bookmark
    },
    {
      title: "Here Are The Top 100 Players And Managers",
      image: "https://s3-alpha-sig.figma.com/img/c53a/c410/aca10398a054bd4607a198d82e9a91c4?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lGf1lrp1voPdFb-qxAAsSX9yUJKJwLFWebqBI6TIPq323f0MIVsYTgqIK8DzEJwg5j~4ph7Oppppc9d8sYZ-aNkfsAVkYrkPtl2gm8zf834D4qGC~mPZjtOA8NLcN-7W16un8PoYmWE1Acf-QZhwSgD0-dq0edhd8QSOsFmcyHZDlH4elk20vcJ05hyHAaDSOsEWOo3iPZAdCsMTa94bibqmznjP6j9bAnAVD0d4ZHiq7f7ionIQBF-u~NOP-L4W5Ed5JkkD2~PEZgh9F8xWu19pzIM55D7xyD-fx7n8d6jaMcCoaqN~WW~2OAChSq5npiOzoBxAm8xvWEdWoNqqyw__",
      time: "11 Oct 2023, 06:00 AM",
      icon: Bookmark
    },
    {
      title: "Join Or Start A Competition Now!",
      image: "https://s3-alpha-sig.figma.com/img/3264/0de6/2ae14816bf6df7b242361242c1844bbb?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=flWI5QdQAai-mf5EMd--AUPVdewb-RB5VOKKbqPLf-2YmLhwLL~Lb-1N8KmNivBXUFQsae4f5bbrcZMm7tBUUw9EtHS4O~q6KfXWHri2acMF0T9vkUMIDZ~AfKXvE1ysMjCtK8d5CLLrk~6IzfLa7e6cbDBoGlrWL5I81KNXLlH0RlB572i6JGVnaDIlZ1niD7B3L74xpOhbXDrmt7psKrOjNAo1-GSY~CG6er8QJ-nCuuVhXqOtOwk78S03K~VYO7N~YGai~LWiWDaMl8tkwgP2phntRsy5Rh~puaLmHwBuRi6t~x~8MBRJR~LBC~gw9QBRshmhKq7n0PRHuoYGfw__",
      time: "10 Oct 2023, 02:40 PM",
      icon: Bookmark
    },
    {
      title: "Breaking News: Upcoming Matches Scheduled",
      image: "https://s3-alpha-sig.figma.com/img/7121/dd59/da2597819c827d4d7fc1e04885cea509?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IdisxzLvlD8~0yZiyg58x4RKrXO5dSjbuVhoDzUcXlXkAqGAYuZwpme7cOPlRX-jWVGHgz8W~2dEqxJ2MyFdLFnGLXlanlauPD5Q0QRevntrxVBHjooIjDaBuvNYS96Apqv8wYgFKf~uFGrS79quGmtQFYiknfkagdZzt-c2QQE7lZVZ81i0SWmtkqdPasqTAtkEkCZFGD1Sl1DbLiwC1PiSuDt5N1HMl9BPLSBy78uE1~yus2VqCO0aivrLWJ14-nsB6rQzixOn5Mx1fCJPXqitAwZe4fTi4drG7Tsn~GNDYgTGS7ZLAkJjTUtkPfkRG4V4Rk4gbjRVwAU1y25jSA__",
      time: "8 Hours Ago",
      icon: Bookmark
    },
    {
      title: "Highlights From Yesterday's Matches",
      image: "https://s3-alpha-sig.figma.com/img/dc82/156b/5fd1ed226ac2a74632355a984dd55746?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aUmbsMowZm9mTsPX~g~N0uIbNq2duFVWMNkgVRHXfCHjRWDhhQtzwtCvU2XAtJbL6foK5~6EX0vovjpaXPoFC5RA4suwdKXuhvh~2x-PDN-xkMKXzGNX7UXMSUbbb8aJ9A2IWLO7QroAP0-A2i98-Fodq8dJASHNTvIj-F0o4NieDP1h-YBexw2fhhY2TxdlWz8uPUhsf1agxZwcoWJi5aDHSzpJFFNdQp~auHUeyW3Ui95z8F9TvJd~Yp5QmiPC4jP4TWYrf8kfEAPtjv5P8MPvTi5TCxgvmnLhrR4XdOa4s5PwbrpUQIzKXfV7y8WwCM5AOt9DNvbGInSEnuas7Q__",
      time: "Yesterday, 10:00 PM",
      icon: Bookmark
    },
  ];

  return (
    <Card className="w-full h-full lg:flex-[2_2_0%] 2xl:flex-[1_1_0%] overflow-auto">
      <CardHeader className="bg-[#222222] sticky top-0">
        <CardTitle className="text-[25px]">Trending News</CardTitle>
      </CardHeader>
      <CardContent>
        <img className="rounded w-full" src="https://s3-alpha-sig.figma.com/img/2350/8d59/6416b64fd861b1d93681ef9ece054eb5?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UexTY~dBMWPM2pLHj6z5dX3D6bjby7ofjHhT4JKYlSzmv0TlK7jxLBp-uI3NFIVkDEQTv1Zk5umNZ1ATo1zkHVgXJ7qXbNeuOSDiLcEjp92Nss5PoUXVwtaTSoiT0In0aq2iQoHttqbyDfvIIywVywzdm5ef0ytksp~GXT~f0pTE60teIX8pX~BtGHMSFdvL4W3GroVu3wP108dLNHvMXtlzEssq7KU4J82xYZ2mhG8dFoqyRqu9CR2H7e5~ii06w8ZubN5p23Q33jewFpgpJtSFgZHXMpEQoa1DoRtZhasHhnlVSW-sWxxDcgELKoKKrYlbHlKKFHFdSR~uwMYmgw__" alt="" />
        <div className="flex mt-3">
          <h1 className="text-2xl font-bold">Results And Scores From The Premier League....!!</h1>
          <div style={{marginLeft: 'auto'}}>
            <Bookmark height={40} width={40} stroke="#C3CC5A" fill="#C3CC5A" />
          </div>
        </div>
        <p className="text-gray-400 text-xs mb-5">5 Hours Ago</p>

        <div className="space-y-4 overflow-y-auto max-h-96">
          {newsItems.map((item, idx) => (
            <div key={idx} className="flex items-start space-x-2">
              <img
                src={item.image}
                alt="News Placeholder"
                className="bg-gray-800 h-12 w-12 object-cover rounded"
              />
              <div>
                <p className="font-bold text-[16px]">{item.title}</p>
                <p className="text-gray-400 text-xs">{item.time}</p>
              </div>
              <div style={{marginLeft: 'auto'}}>
                <item.icon height={30} width={30} stroke="#C3CC5A" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
