export type CountMode = "planned" | "passed";

type Props = {
    mode: CountMode;
    onChange: (mode: CountMode) => void;
};

export function CountModeToggle({ mode, onChange }: Props) {
    return (
        <div
            className="count-mode-toggle"
            role="radiogroup"
            aria-label="Zählmodus"
        >
            <button
                type="button"
                className={
                    mode === "planned"
                        ? "toggle-option active"
                        : "toggle-option"
                }
                aria-pressed={mode === "planned"}
                onClick={() => onChange("planned")}
            >
                Geplant
            </button>
            <button
                type="button"
                className={
                    mode === "passed" ? "toggle-option active" : "toggle-option"
                }
                aria-pressed={mode === "passed"}
                onClick={() => onChange("passed")}
            >
                Bestanden
            </button>
        </div>
    );
}
