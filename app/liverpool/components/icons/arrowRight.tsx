export default function ArrowRight({
    type,
    size,
    color,
}: {
    type: "fill" | "border" | "text";
    size: "small" | "medium" | "large" | "xlarge";
    color: "black" | "red" | "yellow" | "white";
}) {
    const iconSize =
        {
            small: 12,
            medium: type !== "text" ? 12 : 16,
            large: type !== "text" ? 16 : 32,
            xlarge: 40,
        }[size] || 40;

    const strokeColor =
        {
            black: "#1D1D1F",
            red: "#E31B22",
            yellow: "#FFD900",
            white: "#FFFFFF",
        }[color] || "#1D1D1F";

    const svgConfig = {
        40: {
            viewBox: "0 0 40 40",
            d: "M15.75 11.5L24.25 20L15.75 28.5",
            strokeWidth: "2",
        },
        32: {
            viewBox: "0 0 32 32",
            d: "M11.75 7.5L20.25 16L11.75 24.5",
            strokeWidth: "2",
        },
        16: {
            viewBox: "0 0 16 16",
            d: "M5.75 3.5L10.25 8L5.75 12.5",
            strokeWidth: undefined,
        },
        12: {
            viewBox: "0 0 12 12",
            d: "M4.5 3L7.5 6L4.5 9",
            strokeWidth: undefined,
        },
    }[iconSize as 40 | 32 | 16 | 12] || {
        viewBox: "0 0 40 40",
        d: "M15.75 11.5L24.25 20L15.75 28.5",
        strokeWidth: "2",
    };

    return (
        <svg
            width={iconSize}
            height={iconSize}
            viewBox={svgConfig.viewBox}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d={svgConfig.d}
                stroke={strokeColor}
                strokeWidth={svgConfig.strokeWidth}
                strokeLinecap="round"
            />
        </svg>
    );
}
