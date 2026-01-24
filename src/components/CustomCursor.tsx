import { useEffect, useState } from "react";

export const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "BUTTON" ||
                target.tagName === "A" ||
                target.closest("button") ||
                target.closest("a") ||
                target.getAttribute("role") === "button"
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", updatePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updatePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <>
            <style>
                {`
          * {
            cursor: none !important;
          }
          /* Restore cursor for iframes or specific elements if needed */
          iframe {
            cursor: default !important;
          }
        `}
            </style>
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "16px",
                    height: "16px", // Reduced to half
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    pointerEvents: "none",
                    zIndex: 9999,
                    backgroundImage: 'url("/cursor.png")',
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    transition: "transform 0.1s ease-out, width 0.3s, height 0.3s", // fast movement, smooth size change
                    // Adjusting offsets to center or tip-align if necessary. 
                    // For a container box, centering or top-left might depend on the image visual. 
                    // Let's assume top-left corner is the pointer.
                    marginTop: "-2px", // Adjusted offset for smaller size
                    marginLeft: "-2px",
                }}
                className={`custom-cursor ${isHovering ? "hovering" : ""}`}
            >
                {/* Optional: Add a follower or effect inside if needed */}
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        transition: "all 0.3s ease",
                        transform: isHovering ? "scale(1.5) rotate(-5deg)" : "scale(1) rotate(0deg)",
                    }}
                />
            </div >
        </>
    );
};
