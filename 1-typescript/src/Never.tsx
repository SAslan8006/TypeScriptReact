import React from "react";

function Never() {
  return <div>Never</div>;
}

export default Never;

// let someValue: never = 0;

type Theme = "light" | "dark";

function checkTheme(theme: Theme) {
  if (theme === "light") {
    console.log("light theme");
    return;
  }
  if (theme === "dark") {
    console.log("dark theme");
    return;
  }
  theme; // TypeScript burada theme'in türünü 'never' olarak tanımlar.
}

enum Color {
  Red,
  Blue,
  // Green,
}

function getColorName(color: Color) {
  switch (color) {
    case Color.Red:
      return "Red";
    case Color.Blue:
      return "Blue";
    default:
      const unexpectedColor: never = color; // Eğer buraya düşerse, TypeScript hata verecektir.
      throw new Error(`Unexpected color value: ${unexpectedColor}`);
  }
}

console.log(getColorName(Color.Red)); // Red
console.log(getColorName(Color.Blue)); // Blue
// console.log(getColorName(Color.Green)); // Green
