export default function SliderButtonArrow({
    size,
    active,
    direction,
}: {
    size: string;
    active: boolean;
    direction: string;
}) {
    let iconSize = 64;
    switch (size) {
        case "medium":
            iconSize = 48;
            break;
        case "large":
            iconSize = 64;
            break;
        default:
            iconSize = 64;
            break;
    }

    let iconActive = false;
    switch (active) {
        case true:
            iconActive = true;
            break;
        default:
            iconActive = false;
            break;
    }

    let iconDirection = "right";
    switch (direction) {
        case "left":
            iconDirection = "left";
            break;
        default:
            iconDirection = "right";
            break;
    }

    if (iconSize === 64 && iconActive && iconDirection === "left") {
        return (
            <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    x="63.5"
                    y="63.5"
                    width="63"
                    height="63"
                    rx="31.5"
                    transform="rotate(180 63.5 63.5)"
                    fill="white"
                />
                <rect
                    x="63.5"
                    y="63.5"
                    width="63"
                    height="63"
                    rx="31.5"
                    transform="rotate(180 63.5 63.5)"
                    stroke="#D1D1D6"
                />
                <path
                    d="M37.5 43L26.5 32L37.5 21"
                    stroke="#1D1D1F"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
            </svg>
        );
    }

    if (iconSize === 64 && !iconActive && iconDirection === "left") {
        return (
            <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    x="64"
                    y="64"
                    width="64"
                    height="64"
                    rx="32"
                    transform="rotate(180 64 64)"
                    fill="#F2F2F7"
                />
                <path
                    d="M37.5 43L26.5 32L37.5 21"
                    stroke="#D1D1D6"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
            </svg>
        );
    }

    if (iconSize === 64 && !iconActive && iconDirection === "right") {
        return (
            <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect width="64" height="64" rx="32" fill="#F2F2F7" />
                <path
                    d="M26.5 21L37.5 32L26.5 43"
                    stroke="#D1D1D6"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
            </svg>
        );
    }

    if (iconSize === 64 && iconActive && iconDirection === "right") {
        return (
            <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    x="0.5"
                    y="0.5"
                    width="63"
                    height="63"
                    rx="31.5"
                    fill="white"
                />
                <rect
                    x="0.5"
                    y="0.5"
                    width="63"
                    height="63"
                    rx="31.5"
                    stroke="#D1D1D6"
                />
                <path
                    d="M26.5 21L37.5 32L26.5 43"
                    stroke="#1D1D1F"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
            </svg>
        );
    }

    if (iconSize === 48 && iconActive && iconDirection === "left") {
        return (
            <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    x="47.5"
                    y="47.5"
                    width="47"
                    height="47"
                    rx="23.5"
                    transform="rotate(180 47.5 47.5)"
                    fill="white"
                />
                <rect
                    x="47.5"
                    y="47.5"
                    width="47"
                    height="47"
                    rx="23.5"
                    transform="rotate(180 47.5 47.5)"
                    stroke="#D1D1D6"
                />
                <path
                    d="M28 32L20 24L28 16"
                    stroke="#1D1D1F"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
        );
    }
    if (iconSize === 48 && iconActive && iconDirection === "right") {
        return (
            <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    x="0.5"
                    y="0.5"
                    width="47"
                    height="47"
                    rx="23.5"
                    fill="white"
                />
                <rect
                    x="0.5"
                    y="0.5"
                    width="47"
                    height="47"
                    rx="23.5"
                    stroke="#D1D1D6"
                />
                <path
                    d="M20 16L28 24L20 32"
                    stroke="#1D1D1F"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
        );
    }

    if (iconSize === 48 && !iconActive && iconDirection === "left") {
        return (
            <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    x="48"
                    y="48"
                    width="48"
                    height="48"
                    rx="24"
                    transform="rotate(180 48 48)"
                    fill="#F2F2F7"
                />
                <path
                    d="M28 32L20 24L28 16"
                    stroke="#D1D1D6"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
        );
    }

    if (iconSize === 48 && !iconActive && iconDirection === "right") {
        return (
            <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect width="48" height="48" rx="24" fill="#F2F2F7" />
                <path
                    d="M20 16L28 24L20 32"
                    stroke="#D1D1D6"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
        );
    }
}
