"use client";
import { NextResponse } from "next/server";
import { useState, FormEvent } from "react";

export default function Form() {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/todo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      });
      const newPerson = await response.json();
      return NextResponse.json(newPerson), setTitle("");
    } catch (err) {
      return NextResponse.json(err);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="">
      <input
        type="text"
        placeholder="Your title"
        value={title}
        className="w-[200px] h-10 mr-5 text-black"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="border border-green-500 p-2 text-green-500">
        Add
      </button>
    </form>
  );
}
