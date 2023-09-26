"use client";

import React from "react";
import todo from "../../../../_data/db.json";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";
import Link from "next/link";

export default function Data({ params: { id } }: { params: { id: string } }) {
  const find = todo.todo.find((data) => data.id.toString() === id);
  const [edit, setEdit] = useState("");
  const router = useRouter();
  const handleEdit = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:4000/todo/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: edit }),
      });
      if (response.ok) {
        return (
          NextResponse.json({ message: `id: ${id} => Edited` }), router.back()
        );
      } else {
        return NextResponse.json({ message: "Failed" });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Link href="http://localhost:3000">{`<--Go back`}</Link>
      <form
        action=""
        className="flex mt-20 text-center flex-col  items-center  "
        onSubmit={(e) => {
          handleEdit(id), e.preventDefault();
        }}
      >
        <label htmlFor="" className="mb-5">
          Edit: {find?.title}
        </label>
        <input
          type="text"
          value={edit}
          placeholder="Assignment"
          onChange={(e) => {
            setEdit(e.target.value), e.preventDefault();
          }}
          className="w-[200px] h-10 mr-5 text-black "
        />
      </form>
    </div>
  );
}
