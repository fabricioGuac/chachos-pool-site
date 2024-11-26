
import { useEffect, useState } from "react";

// Hook to check if the element is visible
export default function useIsVisible(ref) {
    // State variables to track the visibility status
    const [isIntersecting, setIntersecting] = useState(false);

    // useEffect to set up the observer and clean up when unmounting
    useEffect(() => {
        // Creates a new IntersectionObserver to track changes in the visibility of the target element
        const observer = new IntersectionObserver(([entry]) => {
            // Updates the state variable when the visibility changes
            setIntersecting(entry.isIntersecting);
        });

        // Ensures the element is valid
        if (ref.current) {
            // Observes the element
            observer.observe(ref.current);
        }

        // Cleanup function to disconnect the observer on unmount
        return () => {
            observer.disconnect();
        }
    }, [ref]);
    return isIntersecting
}