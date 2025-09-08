import { Text, Group } from "@mantine/core";
import type { FooterProps } from "../libs/Footer";
export default function Footer({ fullName, studentId, courseName, year }:FooterProps) {
  return (
    <Group p="md" justify="center">
      <Text>
        © CPE207-2025 { fullName } { studentId } { courseName } { year } . All rights reserved.
      </Text>
    </Group>
  );
}
