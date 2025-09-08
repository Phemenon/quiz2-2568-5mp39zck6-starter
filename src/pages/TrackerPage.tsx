import { useState } from "react";
import { Button, Stack, Title, Divider, Container } from "@mantine/core";
import { v4 as uuidv4 } from "uuid";
import AddExpenseModal from "../components/Modal";

type Expense = {
  id: string;
  name: string;
  amount: number | string;
  category: string | null;
};

export default function ExpenseTracker() {
  const [opened, setOpened] = useState(false);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const categories = ["Food", "Transport", "Entertainment"];

  const setExpense = (
    name: string,
    amount: number | string,
    category: string | null,
  ) => {
    const newExpenses: Expense = {
      id: uuidv4(),
      name,
      amount,
      category,
    };
    setExpenses((prev) => [...prev, newExpenses]);
  };

  return (
    <Container style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <Title order={2} mb="md">
        Expense Tracker
      </Title>
      <Button onClick={() => setOpened(true)}>Add Expense Item</Button>
      {/* Type additional AddExpenseModal here. */}
      <AddExpenseModal
        opened={opened}
        onClose={() => setOpened(false)}
        onAdd={setExpense}
      />

      <Divider my="md" />
      {/* Type additional total cost here. */}
      <Title order={4}>Total cost: {} Baht</Title>
      <Stack my="sm">{/* Type additional text here. */}</Stack>

      <Divider my="md" />
      {/* Type additional card here. */}
      <Stack>{/* Type additional expense card list here. */}</Stack>
    </Container>
  );
}
