import styles from "./button.module.scss";

export default function ButtonAddFixturesToCalendar() {
    return (
        <button className={styles.buttonAddFixturesToCalendar}>
            <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M6.66671 7.10156L4.00004 9.87083L1.33337 7.10156"
                    stroke="#0C0C0C"
                />
                <path
                    d="M4 8.94764V3.40918"
                    stroke="black"
                    strokeWidth="1.78"
                />
                <path
                    d="M2.22224 0.640137H0.444458V2.48629H2.22224V0.640137Z"
                    fill="#0C0C0C"
                />
                <path
                    d="M2.22224 3.40918H0.444458V5.25533H2.22224V3.40918Z"
                    fill="#0C0C0C"
                />
                <path
                    d="M4.88886 0.640137H3.11108V2.48629H4.88886V0.640137Z"
                    fill="#0C0C0C"
                />
                <path
                    d="M7.55561 0.640137H5.77783V2.48629H7.55561V0.640137Z"
                    fill="#0C0C0C"
                />
                <path
                    d="M7.55561 3.40918H5.77783V5.25533H7.55561V3.40918Z"
                    fill="#0C0C0C"
                />
            </svg>

            <span>Add fixtures to calendar</span>
        </button>
    );
}
