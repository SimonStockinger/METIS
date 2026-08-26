import { useEffect } from "react";
import type { ReactNode, MouseEvent } from "react";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: ReactNode;
};

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
    useEffect(() => {
        if (!isOpen) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const stopPropagation = (e: MouseEvent) => e.stopPropagation();

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-content"
                role="dialog"
                aria-modal="true"
                aria-label={title}
                onClick={stopPropagation}
            >
                <div className="modal-header">
                    {title && <h2 className="modal-title">{title}</h2>}
                    <button
                        type="button"
                        className="modal-close-button"
                        onClick={onClose}
                        aria-label="Schließen"
                    >
                        &times;
                    </button>
                </div>
                <div className="modal-body">{children}</div>
            </div>
        </div>
    );
}
