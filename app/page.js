import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Button>Click me</Button>
      <Button variant='outline'>Click me</Button>
      <Button variant='ghost'>Click me</Button>
      <UserButton />
    </div>
  );
}