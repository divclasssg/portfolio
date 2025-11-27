export default function Form({ state }: { state: number }) {
    if (state === 1) {
        return (
            <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="9" cy="9" r="8.5" fill="#009982" stroke="white" />
                <line
                    x1="5.98331"
                    y1="8.7749"
                    x2="8.10463"
                    y2="10.8962"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <line
                    x1="8.10449"
                    y1="10.8961"
                    x2="12.3471"
                    y2="6.65345"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
        );
    }

    if (state === 2) {
        return (
            <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="9" cy="9" r="8.5" fill="#D1D1D6" stroke="white" />
                <line
                    x1="6"
                    y1="9"
                    x2="12"
                    y2="9"
                    stroke="#8E8E93"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
        );
    }

    if (state === 3) {
        return (
            <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="9" cy="9" r="8.5" fill="#E31B23" stroke="white" />
                <line
                    x1="6.87857"
                    y1="6.53564"
                    x2="11.1212"
                    y2="10.7783"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <line
                    x1="6.87866"
                    y1="10.7782"
                    x2="11.1213"
                    y2="6.53553"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
        );
    }
}
