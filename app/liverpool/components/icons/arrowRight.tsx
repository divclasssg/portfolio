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

    if (iconSize === 40) {
        return (
            <svg width={iconSize} height={iconSize} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.75 11.5L24.25 20L15.75 28.5" stroke={strokeColor} stroke-width="2" stroke-linecap="round"/>
            </svg>
        )
    }

    if (iconSize === 32) { 
        return (
            <svg width={iconSize} height={iconSize} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.75 7.5L20.25 16L11.75 24.5" stroke={strokeColor} stroke-width="2" stroke-linecap="round"/>
            </svg>
        )
    }

    if (iconSize === 16) { 
        return (
            <svg width={iconSize} height={iconSize} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.75 3.5L10.25 8L5.75 12.5" stroke={strokeColor} stroke-linecap="round"/>
            </svg>
        )
    }

    if (iconSize === 12) { 
        return (
            <svg width={iconSize} height={iconSize} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 3L7.5 6L4.5 9" stroke={strokeColor} stroke-linecap="round"/>
            </svg>
        )
    }
}
