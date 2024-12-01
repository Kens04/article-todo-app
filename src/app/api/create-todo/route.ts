import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { title, url, state, date } = await req.json();
    const createTodo = await prisma.todo.create({
      data: {
        title: title,
        url: url,
        state: state,
        date: new Date(date),
      }
    });
    return NextResponse.json(createTodo);
}
