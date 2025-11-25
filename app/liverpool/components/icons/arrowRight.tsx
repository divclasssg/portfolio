export default function ArrowRight({
    size,
    color,
}: {
    size: string;
    color: string;
}) {
    let iconSize = 40;
    switch (size) {
        case "small":
            iconSize = 12;
            break;
        case "medium":
            iconSize = 16;
            break;
        case "large":
            iconSize = 32;
            break;
        case "xlarge":
            iconSize = 40;
            break;
        default:
            iconSize = 40;
            break;
    }

    let strokeColor = "#1D1D1F";
    switch (color) {
        case "black":
            strokeColor = "#1D1D1F";
            break;
        case "red":
            strokeColor = "#E31B22";
            break;
        case "yellow":
            strokeColor = "#FFD900";
            break;
        case "white":
            strokeColor = "#FFFFFF";
            break;
        default:
            strokeColor = "#1D1D1F";
            break;
    }

    return (
        <svg
            width={iconSize}
            height={iconSize}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M15.75 11.5L24.25 20L15.75 28.5"
                stroke={strokeColor}
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    );
}
