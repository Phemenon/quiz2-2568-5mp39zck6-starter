import { useState, useEffect } from "react";
import {
  Button,
  Stack,
  Title,
  Divider,
  Container,
  Card,
  Group,
  Text,
} from "@mantine/core";
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

  useEffect(() => {
    const stored = localStorage.getItem("my-expense");
    if (stored) {
      const parsed = JSON.parse(stored);
      setExpenses(parsed);
    }
    setExpenses(expenses);
  }, []);

  useEffect(() => {
    localStorage.setItem("my-expense", JSON.stringify(expenses));
  }, [expenses]);

  const setExpense = (
    name: string,
    amount: number | string,
    category: string | null
  ) => {
    const newExpenses: Expense = {
      id: uuidv4(),
      name,
      amount,
      category,
    };
    setExpenses((prev) => [...prev, newExpenses]);
  };

  const deleteExpense = (expenseId: string) => {
    setExpenses((prev) => prev.filter((t) => t.id !== expenseId));
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
      <Title order={4}>Total cost: {  } Baht</Title>
      <Stack my="sm">
        {expenses.map((expense) => (
          <Card withBorder shadow="sm" radius="md" mb="sm" key={expense.id}>
            <Group justify="space-between" align="flex-start">
              <Stack>
                <Text fw={600} size="lg">
                  {expense.name}
                </Text>
                <Text size="sm" c="dimmed">
                  {expense.amount}
                </Text>
                <Text size="xs" c="gray">
                  {expense.category}
                </Text>
              </Stack>
            </Group>
          </Card>
        ))}
      </Stack>

      <Divider my="md" />
      {/* Type additional card here. */}
      <Stack>{/* Type additional expense card list here. */}</Stack>
    </Container>
  );
}
