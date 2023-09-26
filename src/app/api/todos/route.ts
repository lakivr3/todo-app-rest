import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "http://localhost:4000/todo";
const API_KEY: string = process.env.DATA_API_KEY as string;

export async function GET(req: Request, res: Response) {
  const response = await fetch(DATA_SOURCE_URL);
  const todos: Todo[] = await response.json();
  return NextResponse.json(todos);
}
export async function DELETE(req: Request, res: Response) {
  const { id }: Partial<Todo> = await req.json();
  if (!id) return NextResponse.json({ message: "Todo id required" });
  await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "API-Key": API_KEY,
    },
  });
  return NextResponse.json({ message: "Deleted" });
}
export async function POST(req: Request, res: Response) {
  const { title }: Partial<Todo> = await req.json();
  if (!title) return NextResponse.json({ message: "Missing required data" });
  const response = await fetch(DATA_SOURCE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "API-Key": API_KEY,
    },
    body: JSON.stringify({
      title,
    }),
  });
  const newTodo: Todo = await response.json();
  return NextResponse.json(newTodo);
}
