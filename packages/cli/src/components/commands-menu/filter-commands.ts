import type { Command } from "./types";
import { COMMANDS } from "./commands";


export function filterCommands(value: string): Command[] {
    if (COMMANDS.length === 0) {
        return COMMANDS
    }
    return COMMANDS.filter((command) => command.name.toLowerCase().startsWith(value.toLowerCase()));
}
