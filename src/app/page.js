import HeroHeaders from "@/components/Hero/HeroHeaders";
import Image from "next/image";
import friendsData from "@/../public/friends.json";

export default async function Home() {
  console.log(friendsData);
  return <HeroHeaders></HeroHeaders>;
}
