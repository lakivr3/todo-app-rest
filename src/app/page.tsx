import { Inter } from "next/font/google";
import Form from "./components/Form";
import List from "./components/List";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between p-40">
      <h1 className="mb-20 text-5xl">Todo List</h1>
      <Form />
      <List />
    </main>
  );
}
