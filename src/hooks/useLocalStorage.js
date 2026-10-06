import { useCallback, useState  } from "react";

// stores values as JSON so theme is saved as "dark with quotes"
// script in index.html should parse it the same way

export function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        try {
            const raw = window.localStorage.getItem(key);
            if (raw !== null) return JSON.parse(raw);

        } catch {
            // storage unavailable or corrupted: fall through to the initial value;
        }
        return typeof initialValue === 'function' ? initialValue() : initialValue;

    });

    const setStoredValue = useCallback(
        (next) => {
            try {
                window.localStorage.setItem(key, JSON.stringify(next));
            } catch {
                // storage full/blockes: the in memory state still works
            }
        },
        [key],
    );

    return [value, setStoredValue];
}