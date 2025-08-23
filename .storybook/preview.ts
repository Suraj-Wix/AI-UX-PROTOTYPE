import type { Preview } from "storybook";
import "../styles/globals.css";
import React from "react";
import { ThemeProvider } from "../contexts/ThemeContext";
import { SessionProvider } from "../contexts/SessionContext";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <SessionProvider>
          <div className="p-6">
            <Story />
          </div>
        </SessionProvider>
      </ThemeProvider>
    )
  ]
};

export default preview;