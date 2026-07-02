import { StatusBar } from "./StatusBar";
import type { KeyBinding } from "@opentui/core";

type Props = {
    onSubmit: (text: string) => void;
    disabled: boolean;
}
export const TEXT_AREA_KEYBINDINGS: KeyBinding[] = [
    {
        name: "enter",
        action:"submit",
    },
    {
        name: "return",
        action:"submit",
    },
    // This will work in advanced terminals supporting Kitty Keyboard Protocol
    {
        name: "enter",
        action:"newline",
        shift:true,
    },
    {
        name: "return",
        action:"newline",
        shift:true,
    },
    // Fallback for standard terminals where Shift+Enter = Enter
    {
        name: "n",
        action:"newline",
        ctrl:true,
    },
]
export function InputBar({ onSubmit, disabled = false }: Props) {

    return (
        <box width={"100%"} alignItems="center">
            <box
            border={["left"]}
            borderColor={"cyan"}
            >
            <box position="relative" 
            justifyContent="center" 
            backgroundColor={"#1A1A24"}
            paddingX={2} 
            paddingY={1}
            width={"100%"}
            gap={1}
            >
            <textarea 
                focused={!disabled}
                placeholder={"Ask Litecode anything..., ex. Fix a bug in the databased"}
                keyBindings={TEXT_AREA_KEYBINDINGS}
                minWidth={"100%"}
                minHeight={4}
            />
            <box>
               <StatusBar />
            </box>
            </box>
           </box>
        </box>
    );
}