import HeroHeaders from "@/components/Hero/HeroHeaders";
import Image from "next/image";
import friendsData from "@/../public/friends.json";
import FriendsBody from "@/components/Friends/FriendsBody";

export default async function Home() {
  return (
    <>
      <HeroHeaders friendsData={friendsData}></HeroHeaders>
      <FriendsBody friendsData={friendsData}></FriendsBody>
    </>
  );
}
