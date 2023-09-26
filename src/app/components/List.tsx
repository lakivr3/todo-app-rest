"use client";

import { NextResponse } from "next/server";
import persons from "../../../_data/db.json";
import Link from "next/link";

export default function List() {
  const handleDelete = async (id: number) => {
    await fetch(`http://localhost:4000/todo/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    return NextResponse.json({ message: `${id} Deleted` });
  };

  const data = persons.todo;
  return (
    <ul className="mt-10 list-decimal ">
      {data.map((person) => {
        return (
          <div
            key={person.id}
            className="flex justify-between gap-10 my-3 text-center items-center"
          >
            <Link href={`/data/${person.id}`}>
              <li>{person.title}</li>
            </Link>
            <button
              className="border border-red-500 p-2 text-red-500"
              onClick={() => handleDelete(person.id)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </ul>
  );
}
