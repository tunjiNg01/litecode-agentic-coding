import type { Command } from "./types";

export const COMMANDS: Command[] = [
    {
        name: "new",
        description: "Start a new conversion",
        value: "/new",
    },
    {
        name: "help",
        description: "Show help message",
        value: "/help",
       
    },
    {
        name: "exit",
        description: "Exit the application",
        value: "/exit",
        action: (context) => {
            context.exit();
        }
    }
]
