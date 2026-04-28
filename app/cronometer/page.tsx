"use client";

import {
    useEffect,
    useMemo,
    useState,
    type CSSProperties,
    type Dispatch,
    type ReactNode,
    type SetStateAction,
} from "react";
import styles from "./cronometer.module.scss";

// ============================================================
// Types
// ============================================================
type Match = {
    id: string;
    selected: boolean;
    name: string;
    serving: string;
    macros: string | null;
    kcal: number;
    p: number;
    c: number;
    f: number;
    confidence: number;
    notFound?: boolean;
    fingerWidths?: number;
    baseKcal?: number;
    baseP?: number;
    baseC?: number;
    baseF?: number;
};

type SwapOption = { name: string; serving: string };

type Screen =
    | "camera"
    | "matching"
    | "matched"
    | "guide"
    | "volume"
    | "verify"
    | "custom"
    | "success";

type PillVariant = "outline" | "primary" | "teal" | "disabled" | "ghost";

const PILL_VARIANT_CLASS: Record<PillVariant, string> = {
    outline: styles.pillOutline,
    primary: styles.pillPrimary,
    teal: styles.pillTeal,
    disabled: styles.pillDisabled,
    ghost: styles.pillGhost,
};

const cx = (...names: Array<string | false | null | undefined>) =>
    names.filter(Boolean).join(" ");

// ============================================================
// Sample data
// ============================================================
const INITIAL_MATCHES: Match[] = [
    {
        id: "m1",
        selected: true,
        name: "Chicken Breast, Skin Removed Before Cook…",
        serving: "1 cup, chopped or diced - 140.0g",
        macros: "242 kcal, 43.3g Protein, 0.0g Carbs, 6.3g Fat",
        kcal: 242,
        p: 43.3,
        c: 0,
        f: 6.3,
        confidence: 94,
    },
    {
        id: "m2",
        selected: true,
        name: "Carrots, Cooked From Fresh",
        serving: "10 slice - 50.0g",
        macros: "18 kcal, 0.4g Protein, 2.5g Carbs, 0.1g Fat",
        kcal: 18,
        p: 0.4,
        c: 2.5,
        f: 0.1,
        confidence: 88,
    },
    {
        id: "m3",
        selected: true,
        name: "Zucchini, Cooked From Fresh",
        serving: "4 slice - 40.0g",
        macros: "6 kcal, 0.5g Protein, 0.7g Carbs, 0.1g Fat",
        kcal: 6,
        p: 0.5,
        c: 0.7,
        f: 0.1,
        confidence: 76,
    },
    {
        id: "m4",
        selected: true,
        name: "Hot Chili Peppers, Red, Raw",
        serving: "17 slice - 29.5g",
        macros: "12 kcal, 0.6g Protein, 2.1g Carbs, 0.1g Fat",
        kcal: 12,
        p: 0.6,
        c: 2.1,
        f: 0.1,
        confidence: 64,
    },
    {
        id: "m5",
        selected: true,
        name: "Tofu, Not Silken, Cooked, Firm",
        serving: '0.25 block - 7" x 1 9/16" x 1 5/8" - 61.0g',
        macros: "63 kcal, 7.3g Protein, 1.5g Carbs, 3.4g Fat",
        kcal: 63,
        p: 7.3,
        c: 1.5,
        f: 3.4,
        confidence: 58,
    },
    {
        id: "m6",
        selected: false,
        name: "Spicy red broth",
        serving: "Not Found",
        macros: null,
        kcal: 0,
        p: 0,
        c: 0,
        f: 0,
        confidence: 0,
        notFound: true,
    },
];

const SWAP_OPTIONS: SwapOption[] = [
    { name: "Chicken Thigh, Skin Removed", serving: "1 cup, cut pieces - 135.0g" },
    { name: "Chicken Breast, Skin Removed Before Eating", serving: "0.67 cup - 163.6g" },
    { name: "Chicken Thigh, Skin Removed Before Eating", serving: "1 cup, cut pieces - 135.0g" },
    { name: "Chicken Thigh, Skin Eaten", serving: "1 cup, cut pieces - 135.0g" },
    { name: "Chicken, Whole, Skin Eaten", serving: "1 cup, cut pieces - 135.0g" },
    { name: "Chicken, Dark Meat, Skin Removed Before Eating", serving: "1 cup, cut pieces - 135.0g" },
    { name: "Chicken Breast, Skin Eaten", serving: "0.67 cup - 163.6g" },
    { name: "Tofu, Not Silken, Cooked, Firm", serving: "0.67 cup, cubed - 168.0g" },
];

type HandGuide = { id: string; label: string; grams: number; sub: string };

const HAND_VOLUME_GUIDES: HandGuide[] = [
    { id: "tip", label: "Fingertip", grams: 5, sub: "≈ 1 tsp" },
    { id: "thumb", label: "Thumb", grams: 15, sub: "≈ 1 tbsp" },
    { id: "two", label: "Two fingers", grams: 30, sub: "≈ 2 tbsp" },
    { id: "palm", label: "Palm", grams: 90, sub: "≈ ½ cup" },
    { id: "cupped", label: "Cupped hand", grams: 120, sub: "≈ ¾ cup" },
    { id: "fist", label: "Fist", grams: 160, sub: "≈ 1 cup" },
];

// ============================================================
// Shared primitives
// ============================================================
function PhotoLogHeader({
    onClose,
    title = "Photo Log",
    right = null,
    dark = false,
}: {
    onClose: () => void;
    title?: string;
    right?: ReactNode;
    dark?: boolean;
}) {
    return (
        <div className={cx(styles.header, dark && styles.headerDark)}>
            <button onClick={onClose} className={styles.headerCloseBtn}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 3l12 12M15 3L3 15" stroke={dark ? "#FFFFFF" : "#272A3A"} strokeWidth="1.6" strokeLinecap="round" />
                </svg>
            </button>
            <div className={styles.headerTitle}>{title}</div>
            <div className={styles.headerRight}>{right}</div>
        </div>
    );
}

function InfoBanner({
    children,
    onDismiss,
    tone = "info",
}: {
    children: ReactNode;
    onDismiss?: () => void;
    tone?: "info" | "warning" | "danger";
}) {
    const toneClass =
        tone === "info" ? styles.bannerInfo : tone === "warning" ? styles.bannerWarning : styles.bannerDanger;
    return (
        <div className={cx(styles.banner, toneClass)}>
            <div className={styles.bannerBody}>{children}</div>
            {onDismiss && (
                <button onClick={onDismiss} className={styles.bannerDismiss}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 2l8 8M10 2L2 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </button>
            )}
        </div>
    );
}

function Eyebrow({ children }: { children: ReactNode }) {
    return <div className={styles.eyebrow}>{children}</div>;
}

function PillButton({
    children,
    variant = "outline",
    onClick,
    disabled = false,
    fullWidth = false,
}: {
    children: ReactNode;
    variant?: PillVariant;
    onClick?: () => void;
    disabled?: boolean;
    fullWidth?: boolean;
}) {
    return (
        <button
            type="button"
            className={cx(styles.pill, PILL_VARIANT_CLASS[variant], fullWidth && styles.pillFullWidth)}
            onClick={disabled ? undefined : onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

function Checkbox({
    checked,
    onChange,
    indeterminate = false,
}: {
    checked: boolean;
    onChange?: (next: boolean) => void;
    indeterminate?: boolean;
}) {
    return (
        <button
            onClick={() => onChange?.(!checked)}
            className={cx(styles.checkbox, checked && styles.checkboxChecked)}
            aria-checked={checked}
        >
            {checked && !indeterminate && (
                <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                    <path d="M1 5l3 3 7-7" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )}
            {indeterminate && <div className={styles.checkboxIndeterminateMark} />}
        </button>
    );
}

function ConfidenceBadge({ pct }: { pct: number }) {
    const toneClass =
        pct >= 80 ? styles.confBadgeHigh : pct >= 50 ? styles.confBadgeMid : styles.confBadgeLow;
    return (
        <div className={cx(styles.confBadge, toneClass)}>
            <div className={styles.confBadgeDot} />
            {pct}% match
        </div>
    );
}

function IconButton({
    onClick,
    children,
    color = "#005A5B",
}: {
    onClick: () => void;
    children: ReactNode;
    color?: string;
}) {
    return (
        <button
            onClick={onClick}
            className={styles.iconBtn}
            style={{ "--cron-icon-color": color } as CSSProperties}
        >
            {children}
        </button>
    );
}

function SwapIcon({ size = 18, color = "#005A5B" }: { size?: number; color?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12a9 9 0 0 1-15.5 6.36L3 16M3 12a9 9 0 0 1 15.5-6.36L21 8" />
            <path d="M21 3v5h-5M3 21v-5h5" />
        </svg>
    );
}

function EnergyDonut({
    kcal,
    p,
    c,
    f,
    size = 70,
}: {
    kcal: number;
    p: number;
    c: number;
    f: number;
    size?: number;
}) {
    const stroke = 8;
    const r = (size - stroke) / 2;
    const C = 2 * Math.PI * r;
    const total = Math.max(p + c + f, 0.001);
    const segs = [
        { len: (p / total) * C, color: "#14B255" },
        { len: (c / total) * C, color: "#5FC7D5" },
        { len: (f / total) * C, color: "#F17144" },
    ];
    let offset = 0;
    return (
        <div className={styles.donut} style={{ width: size, height: size }}>
            <svg width={size} height={size} className={styles.donutSvg}>
                <circle cx={size / 2} cy={size / 2} r={r} stroke="#F0F2FA" strokeWidth={stroke} fill="none" />
                {segs.map((s, i) => {
                    const dash = `${s.len} ${C}`;
                    const dashOffset = -offset;
                    offset += s.len;
                    return (
                        <circle
                            key={i}
                            cx={size / 2}
                            cy={size / 2}
                            r={r}
                            stroke={s.color}
                            strokeWidth={stroke}
                            fill="none"
                            strokeDasharray={dash}
                            strokeDashoffset={dashOffset}
                            strokeLinecap="butt"
                        />
                    );
                })}
            </svg>
            <div className={styles.donutLabel}>
                <div className={styles.donutKcal}>{kcal}</div>
                <div className={styles.donutUnit}>kcal</div>
            </div>
        </div>
    );
}

// ============================================================
// SCREEN 1 · Camera capture
// ============================================================
function CameraScreen({ onCapture, onClose }: { onCapture: () => void; onClose: () => void }) {
    return (
        <div className={styles.cameraScreen}>
            <PhotoLogHeader onClose={onClose} dark />
            <div className={styles.cameraBannerOverlay}>
                <div className={styles.cameraBanner}>
                    <div className={styles.cameraBannerBody}>
                        Use your phone&apos;s camera to take a photo of your food and we will match the foods to our database.
                    </div>
                    <button className={styles.cameraBannerDismiss}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M2 2l8 8M10 2L2 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className={styles.cameraViewfinder}>
                <div className={styles.cameraGrid}>
                    <span />
                    <span />
                    <span />
                    <span />
                </div>
                <div className={styles.cameraFocus} />
            </div>
            <div className={styles.cameraControls}>
                <div className={styles.cameraGalleryThumb} />
                <button onClick={onCapture} className={styles.shutter} />
                <button onClick={onClose} className={styles.cancelBtn}>
                    Cancel
                </button>
            </div>
        </div>
    );
}

// ============================================================
// SCREEN 2 · Matching loading
// ============================================================
function MatchingScreen({
    onMatched,
    onRetake,
    frozen = false,
}: {
    onMatched: () => void;
    onRetake: () => void;
    frozen?: boolean;
}) {
    const [progress, setProgress] = useState(frozen ? 80 : 0);
    useEffect(() => {
        if (frozen) return;
        let step = 0;
        const tick = setInterval(() => {
            step += 1;
            setProgress(step);
            if (step >= 100) clearInterval(tick);
        }, 28);
        const t = setTimeout(() => onMatched(), 3200);
        return () => {
            clearInterval(tick);
            clearTimeout(t);
        };
    }, [frozen, onMatched]);

    return (
        <div className={styles.matchingScreen}>
            <PhotoLogHeader onClose={onRetake} dark />
            <div className={styles.cameraBannerOverlay}>
                <div className={styles.matchingBanner}>
                    Use your phone&apos;s camera to take a photo of your food and we will match the foods to our database.
                </div>
            </div>

            <div className={styles.matchingBg}>
                <div className={styles.scanLine} style={{ "--cron-progress": `${progress}%` } as CSSProperties} />
                <div className={styles.dim} />

                {progress > 25 && (
                    <>
                        <div className={cx(styles.detectionBox, styles.detectionBoxTofu)}>
                            <div className={styles.detectionLabel}>Tofu · 94%</div>
                        </div>
                        {progress > 55 && (
                            <div className={cx(styles.detectionBox, styles.detectionBoxPepper)}>
                                <div className={styles.detectionLabel}>Pepper · 76%</div>
                            </div>
                        )}
                        {progress > 75 && (
                            <div className={cx(styles.detectionBox, styles.detectionBoxCarrot)}>
                                <div className={styles.detectionLabel}>Carrot · 88%</div>
                            </div>
                        )}
                    </>
                )}
            </div>

            <div className={styles.matchingFooter}>
                <div className={styles.matchingStatus}>
                    <div className={styles.matchingSpinner} style={frozen ? { animation: "none" } : undefined} />
                    Matching foods…
                </div>
                <button onClick={onRetake} className={styles.retakeBtn}>
                    Retake Photo
                </button>
            </div>
        </div>
    );
}

// ============================================================
// SCREEN 3 · Matched foods checklist
// ============================================================
function MacroRow({ color, label, g, pct }: { color: string; label: string; g: number; pct: number }) {
    return (
        <div className={styles.macroRow} style={{ "--cron-macro-color": color } as CSSProperties}>
            <div className={styles.macroDot} />
            <div className={styles.macroLabel}>{label}</div>
            <div className={styles.macroG}>{g.toFixed(1)} g</div>
            <div className={styles.macroPct}>{pct.toFixed(1)}%</div>
        </div>
    );
}

function MatchedFoodsScreen({
    matches,
    setMatches,
    onSwap,
    onVolumeGuide,
    onContinue,
    onClose,
}: {
    matches: Match[];
    setMatches: Dispatch<SetStateAction<Match[]>>;
    onSwap: (id: string | null) => void;
    onVolumeGuide: () => void;
    onContinue: { create: () => void; diary: () => void };
    onClose: () => void;
    onRetake: () => void;
}) {
    const [groupOpen, setGroupOpen] = useState(false);
    const [energyOpen, setEnergyOpen] = useState(true);
    const selectedMatches = matches.filter((m) => m.selected && !m.notFound);
    const totals = selectedMatches.reduce(
        (acc, m) => ({ kcal: acc.kcal + m.kcal, p: acc.p + m.p, c: acc.c + m.c, f: acc.f + m.f }),
        { kcal: 0, p: 0, c: 0, f: 0 }
    );
    const totalMacroG = totals.p + totals.c + totals.f || 1;
    const pPct = (totals.p / totalMacroG) * 100;
    const cPct = (totals.c / totalMacroG) * 100;
    const fPct = (totals.f / totalMacroG) * 100;

    const toggle = (id: string) =>
        setMatches((prev) => prev.map((m) => (m.id === id ? { ...m, selected: !m.selected } : m)));
    const selectedCount = matches.filter((m) => m.selected).length;
    const allSelected = selectedCount === matches.length;
    const allOff = selectedCount === 0;
    const toggleAll = () => {
        setMatches((prev) => prev.map((m) => ({ ...m, selected: !allSelected && !m.notFound })));
    };

    return (
        <div className={styles.screen}>
            <PhotoLogHeader onClose={onClose} />

            <div className={styles.scrollBody}>
                <div className={styles.photoSummary}>
                    <div className={styles.photoCard}>
                        <div className={styles.photoThumb} />
                        <div className={styles.photoMetaWrap}>
                            <div className={styles.photoMetaTitle}>My Photo</div>
                            <div className={styles.photoMetaSub}>4:16 pm · Auto-detected</div>
                        </div>
                        <button onClick={onVolumeGuide} className={styles.volumeBtn} title="Estimate portion volume">
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                                <path d="M2 10 L6 6 L10 10 L14 6" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                <circle cx="6" cy="6" r="1.4" fill="#FFFFFF" />
                                <circle cx="10" cy="10" r="1.4" fill="#FFFFFF" />
                            </svg>
                            <span className={styles.volumeBtnLabel}>Volume</span>
                        </button>
                    </div>
                </div>

                <InfoBanner tone="info">
                    Please check if all your foods have been matched correctly. Tap an item to swap, or use{" "}
                    <span style={{ display: "inline-flex", verticalAlign: "middle" }}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#005A5B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 12a9 9 0 0 1-15.5 6.36L3 16M3 12a9 9 0 0 1 15.5-6.36L21 8" />
                            <path d="M21 3v5h-5M3 21v-5h5" />
                        </svg>
                    </span>{" "}
                    to find an alternative.
                </InfoBanner>

                <div className={styles.matchedHeader}>
                    <Eyebrow>
                        Matched foods · {selectedCount}/{matches.length}
                    </Eyebrow>
                    <button onClick={toggleAll} className={styles.toggleAllBtn}>
                        {allSelected ? "Deselect all" : "Select all"}
                    </button>
                </div>

                <div className={styles.matchList}>
                    {matches.map((m) => (
                        <div key={m.id} className={cx(styles.matchRow, !m.selected && styles.matchRowDimmed)}>
                            <div className={styles.matchRowCheck}>
                                <Checkbox checked={m.selected} onChange={() => !m.notFound && toggle(m.id)} />
                            </div>
                            <div className={styles.matchRowBody}>
                                <div className={styles.matchTitleLine}>
                                    {m.notFound && (
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path d="M6 1l5 9H1L6 1z" fill="#CD0A01" />
                                            <path d="M6 5v2M6 8.5v0.5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
                                        </svg>
                                    )}
                                    <div className={cx(styles.matchTitle, m.notFound && styles.matchTitleNotFound)}>
                                        {m.name}
                                    </div>
                                </div>
                                {m.serving && (
                                    <div className={cx(styles.matchServing, m.notFound && styles.matchServingNotFound)}>
                                        {m.serving}
                                    </div>
                                )}
                                {m.macros && <div className={styles.matchMacros}>{m.macros}</div>}
                                {!m.notFound && m.confidence > 0 && (
                                    <div className={styles.matchConfidenceWrap}>
                                        <ConfidenceBadge pct={m.confidence} />
                                    </div>
                                )}
                            </div>
                            <IconButton onClick={() => onSwap(m.id)} color={m.notFound ? "#CD0A01" : "#005A5B"}>
                                <SwapIcon size={16} color={m.notFound ? "#CD0A01" : "#005A5B"} />
                            </IconButton>
                        </div>
                    ))}

                    <button onClick={() => onSwap(null)} className={styles.searchMore}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#005A5B" strokeWidth="2" strokeLinecap="round">
                            <circle cx="5" cy="5" r="3.5" />
                            <path d="M7.5 7.5L10.5 10.5" />
                        </svg>
                        Search for more
                    </button>
                </div>

                <div className={styles.collapsibleSection}>
                    <div className={styles.collapsibleHeader} onClick={() => setGroupOpen(!groupOpen)}>
                        <div className={styles.collapsibleTitle}>Group</div>
                        <div className={styles.collapsibleMeta}>
                            Uncategorized
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={cx(styles.chevron, groupOpen && styles.chevronOpen)}>
                                <path d="M1 1l4 4 4-4" stroke="#888A93" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className={styles.energySection}>
                    <div
                        className={cx(styles.energyHeader, !energyOpen && styles.energyHeaderCollapsed)}
                        onClick={() => setEnergyOpen(!energyOpen)}
                    >
                        <div className={styles.collapsibleTitle}>Energy Summary</div>
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={cx(styles.chevron, energyOpen && styles.chevronOpen)}>
                            <path d="M1 1l4 4 4-4" stroke="#888A93" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </div>
                    {energyOpen && (
                        <div className={styles.energyContent}>
                            <EnergyDonut kcal={Math.round(totals.kcal)} p={totals.p} c={totals.c} f={totals.f} size={76} />
                            <div className={styles.macroRows}>
                                <MacroRow color="#14B255" label="Protein" g={totals.p} pct={pPct} />
                                <MacroRow color="#5FC7D5" label="Net Carbs" g={totals.c} pct={cPct} />
                                <MacroRow color="#F17144" label="Fat" g={totals.f} pct={fPct} />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className={styles.footerRow}>
                <PillButton variant="outline" onClick={onContinue.create}>
                    Create…
                </PillButton>
                <div className={styles.footerRowFlex}>
                    <PillButton variant={allOff ? "disabled" : "teal"} disabled={allOff} fullWidth onClick={onContinue.diary}>
                        Add to Diary
                    </PillButton>
                </div>
            </div>
        </div>
    );
}

// ============================================================
// SCREEN 4 · Swap food sheet
// ============================================================
function SwapSheet({
    targetName,
    onPick,
    onClose,
    onSearchMore,
}: {
    targetName: string | null;
    onPick: (option: SwapOption) => void;
    onClose: () => void;
    onSearchMore: () => void;
}) {
    return (
        <div className={styles.swapBackdrop} onClick={onClose}>
            <div className={styles.swapSheet} onClick={(e) => e.stopPropagation()}>
                <div className={styles.swapHandleWrap}>
                    <div className={styles.swapHandle} />
                </div>
                <div className={styles.swapHeader}>
                    <div>
                        <Eyebrow>Swap food for…</Eyebrow>
                        <div className={styles.swapTargetTitle}>
                            {targetName ? `Alternatives to "${targetName}"` : "Search alternatives"}
                        </div>
                    </div>
                    <button onClick={onClose} className={styles.swapClose}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M2 2l10 10M12 2L2 12" stroke="#272A3A" strokeWidth="1.6" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>
                <div className={styles.swapList}>
                    {SWAP_OPTIONS.map((o, i) => (
                        <div key={i} onClick={() => onPick(o)} className={styles.swapItem}>
                            <div className={styles.swapItemTitle}>{o.name}</div>
                            <div className={styles.swapItemServing}>{o.serving}</div>
                        </div>
                    ))}
                    <button onClick={onSearchMore} className={styles.searchMoreBtn}>
                        Search for more
                    </button>
                </div>
            </div>
        </div>
    );
}

// ============================================================
// SCREEN 5 · Volume Guide
// ============================================================
function PhotoPlaceholder({ label }: { label: string }) {
    return (
        <div className={styles.placeholder}>
            <div className={styles.placeholderHash} />
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" className={styles.placeholderIcon}>
                <rect x="1" y="4" width="20" height="14" rx="2.5" stroke="#888A93" strokeWidth="1.4" />
                <path d="M7 4 L8.5 1.5 H13.5 L15 4" stroke="#888A93" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
                <circle cx="11" cy="11" r="3.5" stroke="#888A93" strokeWidth="1.4" fill="none" />
            </svg>
            <div className={styles.placeholderLabel}>Photo · {label}</div>
        </div>
    );
}

function VolumeGuideScreen({
    matches,
    setMatches,
    onClose,
    onApply,
}: {
    matches: Match[];
    setMatches: Dispatch<SetStateAction<Match[]>>;
    onClose: () => void;
    onApply: () => void;
}) {
    const targets = matches.filter((m) => m.selected && !m.notFound);
    const [targetIdx, setTargetIdx] = useState(0);
    const [pickedId, setPickedId] = useState<string | null>(null);
    const target = targets[targetIdx];

    const apply = () => {
        if (!pickedId || !target) return onApply();
        const guide = HAND_VOLUME_GUIDES.find((g) => g.id === pickedId);
        if (!guide) return onApply();
        const m = (target.serving || "").match(/([\d.]+)\s*g/);
        const oldG = m ? parseFloat(m[1]) : 100;
        const k = guide.grams / oldG;
        setMatches((prev) =>
            prev.map((mm) => {
                if (mm.id !== target.id) return mm;
                const newKcal = Math.round(mm.kcal * k);
                const newP = +(mm.p * k).toFixed(1);
                const newC = +(mm.c * k).toFixed(1);
                const newF = +(mm.f * k).toFixed(1);
                return {
                    ...mm,
                    serving: `${guide.label.toLowerCase()} · ${guide.grams}.0g`,
                    kcal: newKcal,
                    p: newP,
                    c: newC,
                    f: newF,
                    macros: `${newKcal} kcal, ${newP}g Protein, ${newC}g Carbs, ${newF}g Fat`,
                };
            })
        );
        onApply();
    };

    return (
        <div className={styles.screen}>
            <PhotoLogHeader onClose={onClose} title="Estimate Volume" />
            <InfoBanner tone="info">
                Compare your own hand to the food in your photo and pick the portion that&apos;s closest in size.
            </InfoBanner>

            {target && (
                <div className={styles.targetCardWrap}>
                    <div className={styles.targetCard}>
                        <div className={styles.photoThumb} />
                        <div className={styles.targetCardBody}>
                            <div className={styles.targetEyebrow}>
                                Estimating · {targetIdx + 1} of {targets.length}
                            </div>
                            <div className={styles.targetName}>{target.name}</div>
                            <div className={styles.targetCurrent}>Currently · {target.serving}</div>
                        </div>
                        {targets.length > 1 && (
                            <div className={styles.targetNav}>
                                <button
                                    className={styles.targetNavBtn}
                                    onClick={() => {
                                        setPickedId(null);
                                        setTargetIdx((targetIdx - 1 + targets.length) % targets.length);
                                    }}
                                >
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                        <path d="M6 1L2 5l4 4" stroke="#272A3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                <button
                                    className={styles.targetNavBtn}
                                    onClick={() => {
                                        setPickedId(null);
                                        setTargetIdx((targetIdx + 1) % targets.length);
                                    }}
                                >
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                        <path d="M4 1l4 4-4 4" stroke="#272A3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}

            <div className={styles.guideContent}>
                <div className={styles.guideHeader}>
                    <Eyebrow>Hand Reference · Tap to apply</Eyebrow>
                </div>
                <div className={styles.guideGrid}>
                    {HAND_VOLUME_GUIDES.map((g) => {
                        const active = pickedId === g.id;
                        return (
                            <button
                                key={g.id}
                                onClick={() => setPickedId(g.id)}
                                className={cx(styles.guideCard, active && styles.guideCardActive)}
                            >
                                <PhotoPlaceholder label={g.label} />
                                <div className={styles.guideCardMeta}>
                                    <div className={styles.guideCardLabel}>{g.label}</div>
                                    <div className={styles.guideCardGrams}>{g.grams}g</div>
                                </div>
                                <div className={styles.guideCardSub}>{g.sub}</div>
                            </button>
                        );
                    })}
                </div>

                <div className={styles.guideTip}>
                    <span style={{ fontWeight: 700 }}>Tip · </span>
                    Hold your hand next to your plate before eating — your own palm is the most personalized scale.
                </div>
            </div>

            <div className={styles.footerRow}>
                <div className={styles.footerRowFlex}>
                    <PillButton variant="outline" fullWidth onClick={onClose}>
                        Back
                    </PillButton>
                </div>
                <div className={styles.footerRowFlex14}>
                    <PillButton variant={pickedId ? "primary" : "disabled"} disabled={!pickedId} fullWidth onClick={apply}>
                        Apply portion
                    </PillButton>
                </div>
            </div>
        </div>
    );
}

// ============================================================
// SCREEN · Volume Calibration
// ============================================================
function VolumeCalibrationScreen({
    matches,
    onContinue,
    onBack,
    onClose,
}: {
    matches: Match[];
    setMatches: Dispatch<SetStateAction<Match[]>>;
    onContinue: () => void;
    onBack: () => void;
    onClose: () => void;
}) {
    const adjustable = matches.filter((m) => m.selected && !m.notFound);
    const [activeIdx, setActiveIdx] = useState(0);
    const item = adjustable[activeIdx] || adjustable[0];
    const fw = (item && item.fingerWidths) || 1.0;
    const aiError = 15.36;

    if (!item) {
        return (
            <div className={styles.screen}>
                <PhotoLogHeader onClose={onClose} title="Adjust Portions" />
                <div className={styles.emptyState}>No items to adjust. Go back and select foods.</div>
            </div>
        );
    }

    return (
        <div className={styles.screen}>
            <PhotoLogHeader onClose={onClose} title="Adjust Portions" />
            <InfoBanner tone="warning">
                AI estimated volumes with a <span style={{ fontWeight: 700 }}>±{aiError}%</span> margin. Use the finger-width guide to dial in the real serving — calories recalc as you drag.
            </InfoBanner>

            <div className={styles.scrollBodyWithPad}>
                <div className={styles.itemChips}>
                    {adjustable.map((m, i) => {
                        const active = i === activeIdx;
                        return (
                            <button
                                key={m.id}
                                onClick={() => setActiveIdx(i)}
                                className={cx(styles.itemChip, active && styles.itemChipActive)}
                            >
                                {m.name.split(",")[0].trim()}
                            </button>
                        );
                    })}
                </div>

                <div className={styles.portionPhoto}>
                    <div className={styles.portionMeter}>
                        <div className={styles.portionMeterFingerGlyph}>
                            <svg width="14" height="18" viewBox="0 0 14 18" fill="none">
                                <rect x="2" y="3" width="10" height="14" rx="5" fill="#F17144" />
                                <rect x="3.5" y="0" width="7" height="6" rx="3" fill="#F17144" />
                            </svg>
                        </div>
                        <div className={styles.portionMeterMain}>
                            <div className={styles.portionMeterEyebrow}>Finger widths</div>
                            <div className={styles.portionMeterFw}>
                                {fw.toFixed(2)}{" "}
                                <span className={styles.portionMeterCm}>· ≈ {(fw * 1.8).toFixed(1)} cm</span>
                            </div>
                        </div>
                        <div className={styles.portionMeterKcal}>{Math.round(item.kcal)} kcal</div>
                    </div>
                </div>

                <div className={styles.aiCard}>
                    <div className={styles.aiBadge}>AI</div>
                    <div className={styles.aiText}>
                        <span style={{ color: "#272A3A", fontWeight: 700 }}>{item.name.split(",")[0]}</span> · current estimate:{" "}
                        <span style={{ fontWeight: 700, color: "#F17144" }}>{Math.round(item.kcal)} kcal</span>, {item.p.toFixed(1)}g P · {item.c.toFixed(1)}g C · {item.f.toFixed(1)}g F
                    </div>
                </div>
            </div>

            <div className={styles.footerRow}>
                <div className={styles.footerRowFlex}>
                    <PillButton variant="outline" fullWidth onClick={onBack}>
                        Back
                    </PillButton>
                </div>
                <div className={styles.footerRowFlex14}>
                    <PillButton variant="primary" fullWidth onClick={onContinue}>
                        Continue · Verify
                    </PillButton>
                </div>
            </div>
        </div>
    );
}

// ============================================================
// SCREEN · Confidence Score
// ============================================================
function ScoreRow({
    label,
    value,
    desc,
    color,
}: {
    label: string;
    value: string;
    desc: string;
    color: string;
}) {
    return (
        <div className={styles.scoreRow} style={{ "--cron-row-color": color } as CSSProperties}>
            <div className={styles.scoreRowAccent} />
            <div className={styles.scoreRowBody}>
                <div className={styles.scoreRowLabel}>{label}</div>
                <div className={styles.scoreRowDesc}>{desc}</div>
            </div>
            <div className={styles.scoreRowValue}>{value}</div>
        </div>
    );
}

function ConfidenceScoreScreen({
    matches,
    onAccept,
    onSwapData,
    onBack,
}: {
    matches: Match[];
    onAccept: () => void;
    onSwapData: () => void;
    onBack: () => void;
}) {
    const selected = matches.filter((m) => m.selected && !m.notFound);
    const avgConfidence = selected.length ? selected.reduce((a, m) => a + (m.confidence || 0), 0) / selected.length : 0;
    const flaggedCount = matches.filter((m) => m.notFound).length;
    const coveragePenalty = flaggedCount * 8;
    const score = Math.max(0, Math.min(100, Math.round(avgConfidence - coveragePenalty)));
    const high = score >= 75;

    const r = 56;
    const C = 2 * Math.PI * r;
    const dash = (score / 100) * C;
    const ringColor = high ? "#6FCD83" : "#CD0A01";

    return (
        <div className={styles.screen}>
            <PhotoLogHeader onClose={onBack} title="Verify Accuracy" />

            <div className={styles.verifyScroll}>
                <div className={styles.scoreCard}>
                    <div className={styles.scoreCardEyebrow}>Confidence Score · NCCDB matched</div>
                    <div className={styles.scoreRingWrap}>
                        <svg width="140" height="140" className={styles.scoreRingSvg}>
                            <circle cx="70" cy="70" r={r} stroke="#F0F2FA" strokeWidth="10" fill="none" />
                            <circle
                                cx="70"
                                cy="70"
                                r={r}
                                stroke={ringColor}
                                strokeWidth="10"
                                fill="none"
                                strokeDasharray={`${dash} ${C}`}
                                strokeLinecap="round"
                                style={{ transition: "stroke-dasharray 600ms cubic-bezier(0.22,1,0.36,1)" }}
                            />
                        </svg>
                        <div className={styles.scoreRingLabel}>
                            <div className={styles.scoreRingNumber}>{score}</div>
                            <div className={styles.scoreRingSuffix}>out of 100</div>
                        </div>
                    </div>
                    <div className={cx(styles.scoreToneChip, high ? styles.scoreToneChipHigh : styles.scoreToneChipLow)}>
                        {high ? "High confidence" : "Low confidence · review recommended"}
                    </div>
                </div>

                <div className={styles.section}>
                    <Eyebrow>Score breakdown</Eyebrow>
                </div>
                <div className={styles.cardList}>
                    <ScoreRow label="Nutrient coverage" value={`${Math.round(avgConfidence)}%`} desc="Avg match across detected foods" color="#5FC7D5" />
                    <ScoreRow label="Volume calibration" value={`±${(15.36 * 0.6).toFixed(1)}%`} desc="Refined via finger-width" color="#6FCD83" />
                    <ScoreRow
                        label="NCCDB cross-match"
                        value={flaggedCount > 0 ? `${flaggedCount} unmatched` : "Complete"}
                        desc="Lab-grade reference dataset"
                        color={flaggedCount > 0 ? "#CD0A01" : "#6FCD83"}
                    />
                </div>

                <div className={styles.section}>
                    <Eyebrow>Per-item confidence</Eyebrow>
                </div>
                <div className={styles.cardList}>
                    {matches
                        .filter((m) => m.selected || m.notFound)
                        .map((m) => {
                            const fillColor = m.notFound
                                ? "#CD0A01"
                                : m.confidence >= 80
                                ? "#6FCD83"
                                : m.confidence >= 50
                                ? "#FFB12C"
                                : "#CD0A01";
                            const widthPct = m.notFound ? 0 : m.confidence;
                            return (
                                <div key={m.id} className={styles.perItemRow}>
                                    <div className={styles.perItemBody}>
                                        <div className={styles.perItemName}>{m.name}</div>
                                        <div className={styles.perItemBar}>
                                            <div
                                                className={styles.perItemBarFill}
                                                style={
                                                    {
                                                        "--cron-bar-width": `${widthPct}%`,
                                                        "--cron-bar-color": fillColor,
                                                    } as CSSProperties
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className={cx(styles.perItemValue, m.notFound && styles.perItemValueNotFound)}>
                                        {m.notFound ? "—" : `${m.confidence}%`}
                                    </div>
                                </div>
                            );
                        })}
                </div>

                {!high ? (
                    <div className={cx(styles.recommendation, styles.recommendationLow)}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={styles.recommendationIcon}>
                            <path d="M9 1.5l8 14H1L9 1.5z" fill="#CD0A01" />
                            <path d="M9 7v3.5M9 12.5v0.5" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
                        </svg>
                        <div className={styles.recommendationBody}>
                            <div className={styles.recommendationTitle}>Replace low-confidence items</div>
                            <div className={styles.recommendationDesc}>
                                Items below 60% match are likely off. Swap them with a closer NCCDB match before logging — this improves your daily nutrient totals.
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={cx(styles.recommendation, styles.recommendationHigh)}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={styles.recommendationIcon}>
                            <circle cx="9" cy="9" r="8" stroke="#1F7A36" strokeWidth="1.6" />
                            <path d="M5 9l3 3 5-6" stroke="#1F7A36" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className={styles.recommendationBody}>
                            <div className={styles.recommendationTitle}>Ready to log</div>
                            <div className={styles.recommendationDesc}>
                                Score is high. Your meal will be saved as a precise NCCDB-backed entry — full nutrient breakdown will show in trends.
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className={styles.footerRow}>
                <div className={styles.footerRowFlex}>
                    <PillButton variant="outline" fullWidth onClick={onSwapData}>
                        Replace items
                    </PillButton>
                </div>
                <div className={styles.footerRowFlex14}>
                    <PillButton variant={high ? "teal" : "primary"} fullWidth onClick={onAccept}>
                        {high ? "Save precise log" : "Log anyway"}
                    </PillButton>
                </div>
            </div>
        </div>
    );
}

// ============================================================
// SCREEN 6 · Custom Food Create
// ============================================================
function Field({
    label,
    value,
    onChange,
    suffix,
    hint,
    dot,
}: {
    label: string;
    value: string;
    onChange: (next: string) => void;
    suffix?: string;
    hint?: string;
    dot?: string;
}) {
    return (
        <label className={styles.field} style={dot ? ({ "--cron-dot-color": dot } as CSSProperties) : undefined}>
            {dot && <div className={styles.fieldDot} />}
            <div className={styles.fieldLabelWrap}>
                <div className={styles.fieldLabel}>{label}</div>
                {hint && <div className={styles.fieldHint}>{hint}</div>}
            </div>
            <input value={value} onChange={(e) => onChange(e.target.value)} className={styles.fieldInput} />
            {suffix && <div className={styles.fieldSuffix}>{suffix}</div>}
        </label>
    );
}

function CreateCustomFoodScreen({ onSave, onCancel }: { onSave: () => void; onCancel: () => void }) {
    const [name, setName] = useState("Spicy Red Broth");
    const [serving, setServing] = useState("1 bowl");
    const [grams, setGrams] = useState("250");
    const [kcal, setKcal] = useState("180");
    const [p, setP] = useState("8");
    const [c, setC] = useState("12");
    const [f, setF] = useState("9");
    const [group, setGroup] = useState("Lunch");

    return (
        <div className={styles.screen}>
            <PhotoLogHeader onClose={onCancel} title="Create Custom Food" />
            <InfoBanner tone="warning">
                We couldn&apos;t match this food. Save it once and we&apos;ll remember it for next time.
            </InfoBanner>

            <div className={styles.customScroll}>
                <div className={styles.section}>
                    <Eyebrow>Identity</Eyebrow>
                </div>
                <div className={styles.formCard}>
                    <Field label="Name" value={name} onChange={setName} />
                    <Field label="Serving" value={serving} onChange={setServing} hint="e.g. 1 cup, 1 bowl" />
                    <Field label="Weight (g)" value={grams} onChange={setGrams} suffix="g" />
                </div>

                <div className={styles.section}>
                    <Eyebrow>Energy & macros · per serving</Eyebrow>
                </div>
                <div className={styles.formCard}>
                    <Field label="Calories" value={kcal} onChange={setKcal} suffix="kcal" />
                    <Field label="Protein" value={p} onChange={setP} suffix="g" dot="#14B255" />
                    <Field label="Net Carbs" value={c} onChange={setC} suffix="g" dot="#5FC7D5" />
                    <Field label="Fat" value={f} onChange={setF} suffix="g" dot="#F17144" />
                </div>

                <div className={styles.section}>
                    <Eyebrow>Diary group</Eyebrow>
                </div>
                <div className={styles.groupChips}>
                    {["Breakfast", "Lunch", "Dinner", "Snacks", "Uncategorized"].map((g) => {
                        const active = group === g;
                        return (
                            <button
                                key={g}
                                onClick={() => setGroup(g)}
                                className={cx(styles.groupChip, active && styles.groupChipActive)}
                            >
                                {g}
                            </button>
                        );
                    })}
                </div>

                <div className={styles.savedHint}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={styles.savedHintIcon}>
                        <circle cx="7" cy="7" r="6" stroke="#1F7A36" strokeWidth="1.4" />
                        <path d="M4 7l2 2 4-4" stroke="#1F7A36" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div>
                        Saved foods sync to <span style={{ fontWeight: 700 }}>Custom</span> in your diary search and skip AI matching next time.
                    </div>
                </div>
            </div>

            <div className={styles.footerRow}>
                <div className={styles.footerRowFlex}>
                    <PillButton variant="outline" fullWidth onClick={onCancel}>
                        Cancel
                    </PillButton>
                </div>
                <div className={styles.footerRowFlex14}>
                    <PillButton variant="teal" fullWidth onClick={onSave}>
                        Save & Add to Diary
                    </PillButton>
                </div>
            </div>
        </div>
    );
}

// ============================================================
// SCREEN 7 · Success
// ============================================================
function SuccessScreen({
    kcal,
    kind,
    onDone,
    onAddAnother,
}: {
    kcal: number;
    kind: "diary" | "custom";
    onDone: () => void;
    onAddAnother: () => void;
}) {
    return (
        <div className={styles.successScreen}>
            <div className={styles.successIcon}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="22" stroke="#6FCD83" strokeWidth="2" />
                    <path d="M14 24l7 7 13-14" stroke="#1F7A36" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div className={styles.successTitle}>
                {kind === "custom" ? "Custom food saved" : "Added to your diary"}
            </div>
            <div className={styles.successDesc}>
                {kind === "custom"
                    ? "Spicy Red Broth · saved to Custom foods. We'll skip AI matching next time you log it."
                    : `${kcal} kcal logged · we updated your macros and energy summary for today.`}
            </div>
            <div className={styles.successActions}>
                <PillButton variant="outline" onClick={onAddAnother}>
                    Log another
                </PillButton>
                <PillButton variant="teal" onClick={onDone}>
                    View Diary
                </PillButton>
            </div>
        </div>
    );
}

// ============================================================
// App · multi-screen flow controller
// ============================================================
function App() {
    const [screen, setScreen] = useState<Screen>("camera");
    const [matches, setMatches] = useState<Match[]>(INITIAL_MATCHES);
    const [swapTarget, setSwapTarget] = useState<string | null>(null);
    const [swapOpen, setSwapOpen] = useState(false);
    const [successKind, setSuccessKind] = useState<"diary" | "custom">("diary");

    const totalKcal = useMemo(
        () => Math.round(matches.filter((m) => m.selected && !m.notFound).reduce((a, m) => a + m.kcal, 0)),
        [matches]
    );
    const targetMatch = matches.find((m) => m.id === swapTarget);

    const handleSwapPick = (option: SwapOption) => {
        if (swapTarget) {
            setMatches((prev) =>
                prev.map((m) =>
                    m.id === swapTarget
                        ? {
                              ...m,
                              name: option.name,
                              serving: option.serving,
                              notFound: false,
                              selected: true,
                              macros: "Updated · tap edit to refine",
                              confidence: 92,
                          }
                        : m
                )
            );
        }
        setSwapOpen(false);
        setSwapTarget(null);
    };

    const reset = () => {
        setMatches(INITIAL_MATCHES);
        setScreen("camera");
    };

    return (
        <div className={styles.app}>
            {screen === "camera" && <CameraScreen onCapture={() => setScreen("matching")} onClose={reset} />}
            {screen === "matching" && (
                <MatchingScreen onMatched={() => setScreen("matched")} onRetake={() => setScreen("camera")} />
            )}
            {screen === "matched" && (
                <MatchedFoodsScreen
                    matches={matches}
                    setMatches={setMatches}
                    onSwap={(id) => {
                        setSwapTarget(id);
                        setSwapOpen(true);
                    }}
                    onVolumeGuide={() => setScreen("guide")}
                    onContinue={{
                        create: () => setScreen("custom"),
                        diary: () => setScreen("volume"),
                    }}
                    onClose={reset}
                    onRetake={() => setScreen("camera")}
                />
            )}
            {screen === "guide" && (
                <VolumeGuideScreen
                    matches={matches}
                    setMatches={setMatches}
                    onClose={() => setScreen("matched")}
                    onApply={() => setScreen("matched")}
                />
            )}
            {screen === "volume" && (
                <VolumeCalibrationScreen
                    matches={matches}
                    setMatches={setMatches}
                    onContinue={() => setScreen("verify")}
                    onBack={() => setScreen("matched")}
                    onClose={reset}
                />
            )}
            {screen === "verify" && (
                <ConfidenceScoreScreen
                    matches={matches}
                    onAccept={() => {
                        setSuccessKind("diary");
                        setScreen("success");
                    }}
                    onSwapData={() => setScreen("matched")}
                    onBack={() => setScreen("volume")}
                />
            )}
            {screen === "custom" && (
                <CreateCustomFoodScreen
                    onSave={() => {
                        setSuccessKind("custom");
                        setScreen("success");
                    }}
                    onCancel={() => setScreen("matched")}
                />
            )}
            {screen === "success" && (
                <SuccessScreen kcal={totalKcal} kind={successKind} onDone={reset} onAddAnother={reset} />
            )}

            {swapOpen && (
                <SwapSheet
                    targetName={targetMatch?.name?.split(",")[0]?.trim() || null}
                    onPick={handleSwapPick}
                    onClose={() => {
                        setSwapOpen(false);
                        setSwapTarget(null);
                    }}
                    onSearchMore={() => {
                        /* no-op */
                    }}
                />
            )}
        </div>
    );
}

export default function CronometerPage() {
    return (
        <div className="cronometer-stage">
            <div className="cronometer-screen">
                <App />
            </div>
        </div>
    );
}
