'use client';
import Image from "next/image";
import LiveMatches from "../../components/LiveMatches";
import TrendingNews from "../../components/TrendingNews";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col lg:flex-row gap-4 p-4"
    >
      <div className="space-y-4 flex-[3_2_0%] lg:max-w-[65%]">
        <div className="w-full h-60 rounded-lg flex items-center justify-center">
        <img alt="" className="w-full h-full rounded" src="https://s3-alpha-sig.figma.com/img/2173/7455/acad043c2e2a661912d25931b483be1a?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IIH-JwVb3SrAOESzH7PSSw-qNFwRdHtQHXe4~ucqnGqlmv0COcuWwjXUZ51-v61bjqwIXk4-C-3I4z2QjzjyQgz5Sz~B2xSOsCBciUs85PE~SDxuVush~dJ7BfPRY0ZbjLmJr6XBV9tB58~DqVltd3TElMW0GfVKJ~-2At2qq6yXvHB1~KOnA8sA-HHkCXuk9DuMhi8DjZci2ks4ajm8Pn~WNseUrcovr8kxNBxu5PH7ngglbHj8qgaDAcG6YCxTeg-oPX3X~GM7TM~TjhBIlour1zET-lQHHBHVlFtRdQObX5FgciJk0NUhk1UM1faaegEYQnCxAHGHXY8jUhBHvg__" />
        </div>
        <LiveMatches />
      </div>

      {/* Right Section */}
      <TrendingNews />
    </div>
  );
}
