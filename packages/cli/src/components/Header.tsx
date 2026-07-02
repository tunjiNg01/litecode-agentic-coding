
export function Header() {
    return (
        <box flexDirection="row" alignItems="center" justifyContent="center" flexGrow={1}>
            <box flexDirection="row" alignItems="center" justifyContent="center" gap={0.5}>
                <ascii-font font="tiny" text="Lite" color={"gray"} />
                <ascii-font font="tiny" text="Code" />
            </box>
        </box>
    );
}