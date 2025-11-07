import { useState, useEffect } from "react";
export function useMediaQuery(query) {
    const [matches, setmatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);

        const handleChange = () => {
            setmatches(media.matches);

        }
        // onMount par chalega 
        handleChange();
        try {
            media.addEventListener('change', handleChange);
        } catch (error) {
            media.addEventListener(handleChange)
        }

        return () => {
            try {
                media.removeEventListener('change', handleChange);

            } catch (error) {
                media.removeEventListener(handleChange);
            }
        };
    }, [query]);

    return matches;
}
