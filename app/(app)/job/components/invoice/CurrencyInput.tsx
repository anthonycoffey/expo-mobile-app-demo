import React from "react";
import { Input, Stack, Text } from "tamagui";
import { LabelText } from "@/components/Typography";

type Props = {
  label: string;
  value: string;
  editable?: boolean;
  readOnly?: boolean;
  onChangeText: (text: string) => void;
};
export default function CurrencyInput({
  label,
  value,
  editable,
  readOnly,
  onChangeText,
}: Props) {
  const formatCurrency = (text: string) => {
    // Remove any non-numeric characters
    const numericValue = text.replace(/[^0-9.]/g, "");
    const formattedValue = parseFloat(numericValue).toFixed(2);
    onChangeText(formattedValue);
  };

  return (
    <Stack>
      <LabelText style={{ marginBottom: 5 }}>{label}</LabelText>
      <Input
        size={"$6"}
        keyboardType="numeric"
        value={value}
        editable={editable}
        disabled={readOnly}
        onChangeText={formatCurrency}
      />
    </Stack>
  );
}
