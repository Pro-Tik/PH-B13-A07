"use client";
import HeroHeaders from "@/components/Hero/HeroHeaders";
import FriendsBody from "@/components/Friends/FriendsBody";
import { useEffect, useState } from "react";

export default function Home() {
  const [friendsData, setFriendsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        setFriendsData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch friends:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center p-6">
        <span className="loading loading-spinner text-error loading-lg"></span>
      </div>
    );
  }

  return (
    <>
      <HeroHeaders friendsData={friendsData}></HeroHeaders>
      <FriendsBody friendsData={friendsData}></FriendsBody>
    </>
  );
}
