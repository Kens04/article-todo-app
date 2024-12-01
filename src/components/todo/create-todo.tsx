"use client";

import { useState } from "react";
import { Form, TextField, Select, DatePicker, Button } from "ui";

type Software = {
  id: number;
  name: string;
};

export const software: Software[] = [
  { id: 1, name: "未読" },
  { id: 2, name: "読書中" },
  { id: 3, name: "完了" },
];

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [url, setURL] = useState("");
  const [selectedState, setSelectedState] = useState<Software>(software[0]);

  const handleCreateTodo = async () => {
    try {
      await fetch(`http://localhost:3000/api/create-todo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          url,
          state: selectedState.name,
          date: new Date().toISOString(),
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form className="max-w-lg mx-auto space-y-5">
      <TextField
        value={title}
        onChange={setTitle}
        label="タイトル"
        type="text"
      />
      <TextField value={url} onChange={setURL} label="URL" type="text" />
      <TextField label="カテゴリ" type="text" />
      <Select
        selectedKey={selectedState.id}
        onSelectionChange={(key) => {
          const selected = software.find((item) => item.id === key);
          if (selected) setSelectedState(selected);
        }}
        label="状態"
        placeholder="未読"
      >
        <Select.Trigger />
        <Select.List items={software}>
          {(item) => (
            <Select.Option id={item.id} textValue={item.name}>
              {item.name}
            </Select.Option>
          )}
        </Select.List>
      </Select>
      <DatePicker label="締切日" />
      <Button onClick={handleCreateTodo}>TODO追加</Button>
    </Form>
  );
};

export default CreateTodo;
