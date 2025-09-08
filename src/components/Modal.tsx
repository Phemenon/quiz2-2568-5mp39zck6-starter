import { useState } from "react";
import {
  Modal,
  TextInput,
  NumberInput,
  Select,
  Button,
  Stack,
} from "@mantine/core";

type AddExpenseModalProps = {
  opened: boolean;
  onClose: () => void;
  onAdd: (
    name: string,
    amount: number | string,
    category: string | null,
  ) => void;
};

export default function AddExpenseModal({
  opened,
  onClose,
  onAdd,
}: AddExpenseModalProps) {
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<string | number>(0);
  const [category, setCategory] = useState<string | null>(null);

  const handleSubmit = () => {
    if (!name.trim() || !amount || !category) return;
    onAdd(name, amount, category);
    setName("");
    setAmount("");
    setCategory(null);
    onClose();
  };

  // หากต้องการแปง type string เป็น type number สามารถดูตัวอย่างนี้ได้
  let val_number: number = Number("500.0");
  console.log(val_number + 100); // 600.0

  return (
    /* Type additional text here. */
    <Modal opened={opened} onClose={onClose} title="Authentication">
      <Stack>
        <TextInput
          label="Name"
          withAsterisk
          description="กรอกชื่อรายการจ่าย"
          error={!name.trim() && "Expense Name is  required"}
          placeholder="Input placeholder"
          value={ name }
          onChange={(e) => setName(e.currentTarget.value)}
        />

        <NumberInput
          label="Price"
          withAsterisk
          description="Input description"
          error={!String(amount).trim() &&  "Amount is  required"}
          placeholder="Input placeholder"
          value={amount}
          onChange={setAmount}
          min={0}
        />

        <Select
          label="Your favorite library"
          withAsterisk
          placeholder="Pick value"
          error={!category?.trim() ?"Category is required": false}
          data={["Food", "Transport", "Entertainment"]}
          value={category}
          onChange={setCategory}
        />

        <Button onClick={handleSubmit}> ADD </Button>
      </Stack>
    </Modal>
  );
}
