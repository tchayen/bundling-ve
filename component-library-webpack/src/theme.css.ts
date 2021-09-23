import { createGlobalTheme } from "@vanilla-extract/css";
import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

const vars = createGlobalTheme(":root", {
  color: {
    white: "#999",
    black: "#111",
  },
});

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { "@media": "(prefers-color-scheme: dark)" },
  },
  defaultCondition: "lightMode",
  properties: {
    color: vars.color,
  },
});

export const atoms = createSprinkles(colorProperties);
