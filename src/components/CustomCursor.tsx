
import { useEffect, useRef, useState } from "react";

export const CustomCursor = () => {
    const mainCursor = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            if (mainCursor.current) {
                // Use translate3d for hardware acceleration
                mainCursor.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
            }
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

        window.addEventListener("mousemove", updatePosition, { passive: true });
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
          @media (max-width: 768px), (pointer: coarse) {
            .custom-cursor {
              display: none !important;
            }
            * {
              cursor: auto !important;
            }
          }
          iframe {
            cursor: default !important;
          }
        `}
            </style>
            <div
                ref={mainCursor}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "24px",
                    height: "24px",
                    pointerEvents: "none",
                    zIndex: 9999,
                    backgroundImage: 'url("/cursor.png")',
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    marginTop: "-12px",
                    marginLeft: "-12px",
                    willChange: "transform",
                }}
                className={`custom-cursor ${isHovering ? "hovering" : ""}`}
            >
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                        transform: isHovering ? "scale(1.5)" : "scale(1)",
                        opacity: 0.8
                    }}
                />
            </div >
        </>
    );
};

