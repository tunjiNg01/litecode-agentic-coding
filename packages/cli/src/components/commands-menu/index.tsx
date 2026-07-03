import type {RefObject} from "react"
import { TextAttributes, type ScrollBoxRenderable } from "@opentui/core"
import {filterCommands} from "./filter-commands"
import { COMMANDS } from "./commands"

const MAX_VISIBLE_ITEMS = 8
const COMMAND_COL_WIDTH = Math.max(...COMMANDS.map((cmd) => cmd.name.length)) + 4

type CommandMenuProps = {
    query: string;
    selectedIndex: number;
    onSelect: (index: number) => void;
    scrollRef: RefObject<ScrollBoxRenderable | null>;
    onExecute: (index: number) => void;
}


export function CommandMenu({query, selectedIndex, onSelect, scrollRef, onExecute}: CommandMenuProps) {
    const filtered = filterCommands(query)
    const visibleHeight = Math.min(filtered.length, MAX_VISIBLE_ITEMS);

    if (filtered.length === 0) {
        return <box paddingX={1}>
             <text fg={"gray"} attributes={TextAttributes.DIM}>No commands match “{query}”</text>
        </box>;
    }

    return (
        <scrollbox ref={scrollRef} height={visibleHeight}>
            {filtered.map((cmd, index) => {
                const isSelected = index === selectedIndex;
                return (
                <box 
                key={cmd.value}
                flexDirection="row"
                height={1}
                 paddingX={1}
                 overflow="hidden"
                 backgroundColor={isSelected ? "#89B4FA" : undefined}
                 onMouseMove={() => onSelect(index)}
                 onMouseDown={() => onExecute(index)}
                 >
                    <box
                    width={COMMAND_COL_WIDTH}
                    flexShrink={0}
                    
                    >
                        <text selectable={false} fg={isSelected? "black" : "white"}>
                            {cmd.value}
                        </text>
                    </box>
                    <box>
                        <text 
                            flexGrow={1} 
                            flexShrink={1} 
                            overflow="hidden" 
                            fg={isSelected? "black" : "gray"}>
                            {cmd.description}
                        </text>
                    </box>
                </box>
            )})}
        </scrollbox>
    );
    
}