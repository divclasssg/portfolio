import Styles from "./button.module.scss";

export default function ButtonGlobalnavLanguages() {
    return (
        <button type="button" className={Styles.languages}>
            <span className={Styles.iconGlobal}></span>
            <span className={Styles.text}>EN</span>
            <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect width="12" height="12" fill="url(#pattern0_732_63)" />
                <defs>
                    <pattern
                        id="pattern0_732_63"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                    >
                        <use
                            href="#image0_732_63"
                            transform="scale(0.00416667)"
                        />
                    </pattern>
                    <image
                        id="image0_732_63"
                        width="240"
                        height="240"
                        preserveAspectRatio="none"
                        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAydpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LmMwMjA0YjJkZWYsIDIwMjMvMDIvMDItMTI6MTQ6MjQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC40IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDQTBDNEY2REI0OUIxMUYwQTRGNkFGRDkzQjE0NTM5QiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDQTBDNEY2RUI0OUIxMUYwQTRGNkFGRDkzQjE0NTM5QiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkNBMEM0RjZCQjQ5QjExRjBBNEY2QUZEOTNCMTQ1MzlCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNBMEM0RjZDQjQ5QjExRjBBNEY2QUZEOTNCMTQ1MzlCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+WmstYgAABEJJREFUeNrs3NFN21AUgGGn6hyRN0mYpGGSuJPEnQSzSWARc91eXhBQBCG65/j7JMsPkEj4+I9vkJPNPM8dENMPhwAEDAgYEDAIGBAwIGBAwCBgQMCAgEHAgIABAQMCBgEDAgYEDAgYBAwIGBAwCBgQMCBgQMAgYEDAgIABAYOAAQEDAgYBAwIGBAwIGAQMCBgQMAgYEDAgYEDAIGBAwICAAQGDgAEBAwIGAQMCBgQMCBgEDAgYEDAgYBAwIGBAwCBgQMCAgAEBg4ABAQMCBgQMAgYEDAgYBAwIGBAwIGAQMCBg4Ot+Zv8Dt9t+X3a7sh3K1pftXH80le3+8fE8Og3MN6rNPM+ZB3uqQ33PMvCxDPq3HMzXErqN4R7L7u4Dw+3q7wz1MZivK3ADwx0++fDllfpWIk3Pdwl3/8mHD9muxKkCrsuquy8+jYhzxvvspsx3soRu0+kCz3EoJ8pJLinjvdQ5IuBvGPDhg++JRLzeeP++J64rNQE3Znfh5xNxvnifHQXcnu94VRVxvni7C67UBBxgKCLOFW8qbqUU8RrjdQVu0FnE4m3kXBFwo0MRcY5l8yTg9lzrDhsRx3/Pey/gNq/Ak4jF+7/zJNMnlNIEXIZyvuJVWMQx412kuk021X+h6z2ug4jF+4Yh033Q6QKu/ohYvK+YMn4mOF3AdSktYvG+jPcm47FMeSOHiMW7hnjTBixi8a4h3tQBi1i82eNNH7CIxStgEYtYvAIWsXjFK2ARi1e8aw1YxOIVsIhFLF4Bi1i84hWwiMXbCVjEIhavgEW8vojFK2ARi1e8AhaxeAUsYhGLV8AizhqxeAUs4qARi1fAIg4asXgFLOKgEYtXwCIOGrF4BSzioBGLV8AiDhqxeAUs4qARi1fAIg4asXgFLOKgEYtXwCIOGrF4BSzioBGLV8AiDhqxeAVM0IjFK2CCRixeARM0YvEKmKARi1fABI1YvAImaMTiFTBBIxZvXpt5nh2FKygR9WX368ohj2XrxStg4kbcidcSmrjLafEKGBGLV8BkjFi8AhaxeBGwiMUrYEQsXgGTNWLxCpigEYtXwASNWLwCJmjE4hUwQSMWr4AJGrF4BUzQiMUrYIJGLF4BEzRi8QqYoBGLV8AEjVi8AiZoxOIVMEEjFq+ACRqxeAVM0IgH8cbnWymT2G77Q9kdu39fI/ueJfrbEu/kqAmYtiJe4t2XbVf3fQ12MZbtoYQ7OlICBrwHBgQMAgYEDAgYEDAIGBAwIGBAwCBgQMCAgEHAgIABAQMCBgEDAgYEDAgYBAwIGBAwCBgQMCBgQMAgYEDAgIBBwICAAQEDAgYBAwIGBAwIGAQMCBgQMAgYEDAgYEDAIGBAwICAAQGDgAEBAwIGAQMCBgQMCBgEDAgYEDAI2CEAAQMCBgQMAgYEDAgYEDAIGBAwIGAQMCBgQMCAgEHAgIABAQMChhyeBBgAbBLxJesz+qQAAAAASUVORK5CYII="
                    />
                </defs>
            </svg>
        </button>
    );
}
