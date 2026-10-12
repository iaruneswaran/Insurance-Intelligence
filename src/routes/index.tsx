import { createFileRoute } from "@tanstack/react-router";
<<<<<<< HEAD
import { useEffect, useMemo, useState } from "react";
import { ArrowDown, ChevronDown, Search, X } from "lucide-react";
=======
import { useMemo, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, ChevronDown, FileText, Search, X } from "lucide-react";
>>>>>>> 47870d2fa92f4c13b063b936e1cad6ac15244545
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Claim Overview | CLM-94021" },
      { name: "description", content: "Claim overview, flagged anomaly findings, verification checklist and recommended next steps for CLM-94021." },
      { property: "og:title", content: "Claim Overview | CLM-94021" },
      { property: "og:description", content: "Claim overview, flagged anomaly findings, verification checklist and recommended next steps for CLM-94021." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ClaimPage,
});

<<<<<<< HEAD
type Section = "checklist" | "steps";

type CheckItem = {
  title: string;
  risk: "High" | "Medium" | "Moderate";
  confidence: number;
  status: string;
  finding: string;
  evidence: string[];
};

const checks: CheckItem[] = [
  {
    title: "Clinical Necessity",
    risk: "High",
    confidence: 96,
    status: "Medical Review Required",
    finding:
      "Hospitalization duration (4 days) exceeds the standard 24-to-48 hour clinical pathway for acute gastroenteritis without documented clinical complications.",
    evidence: [
      "Length of stay above benchmark",
      "Limited documentation supporting extended admission",
      "Treatment timeline requires clinical validation",
    ],
  },
  {
    title: "Medication Compliance",
    risk: "Medium",
    confidence: 88,
    status: "Pharmacy Validation",
    finding:
      "Prescribed broad-spectrum parenteral antimicrobials deviate from formulary guidelines without preliminary microbiological culture confirmation.",
    evidence: [
      "Non-standard drug combinations",
      "Dosage exceeds recommended protocol",
      "Formulary compliance requires verification",
    ],
  },
  {
    title: "Billing & Tariff Validation",
    risk: "High",
    confidence: 94,
    status: "Financial Audit",
    finding:
      "Inpatient billing reflects daily room tariff inflation above agreed network caps and duplicate pharmacy charges from settled claim #CLM-78391.",
    evidence: [
      "Room tariff exceeds policy allowance",
      "High-value procedures require review",
      "Possible duplicate billing entries",
    ],
  },
  {
    title: "Diagnostic Review",
    risk: "Moderate",
    confidence: 82,
    status: "Clinical Verification",
    finding:
      "Diagnostic panel includes repeated laboratory blood testing and abdominal ultrasound imaging within 36 hours without documented clinical indication.",
    evidence: [
      "Duplicate laboratory tests",
      "Repeat imaging within short interval",
      "Laboratory billing variance detected",
    ],
  },
  {
    title: "Historical Claims",
    risk: "Medium",
    confidence: 91,
    status: "History Review",
    finding:
      "Longitudinal record reveals an abnormal submission velocity of 4 inpatient reimbursement claims within 90 days following recent sum insured enhancement.",
    evidence: [
      "Similar diagnosis in prior claims",
      "Higher claim utilization frequency",
      "Historical treatment comparison pending",
    ],
  },
];
const steps = [
  {
    title: "Request Treating Doctor Seal & Registration",
    body: "The prescription and initial referral note lack the attending consultant's official state medical council registration stamp and signature. Request hospital administration to provide certified copies.",
    suggested: "Request Document Re-upload",
    docs: [
      { title: "Prescription & Referral Note", file: "prescription-refer 1.4 MB" },
      { title: "Consultant Medical License Record", file: "physician-license 420 KB" },
    ],
  },
  {
    title: "Retrieve Complete Indoor Case Papers & Discharge Summary",
    body: "A formal signed discharge summary and daily indoor case sheets are missing from the claim file. Obtain certified nursing vitals and physician round logs before adjudicating.",
    suggested: "Request Indoor Case Sheets",
    docs: [
      { title: "Hospital Admission File", file: "admission-record 2.1 MB" },
      { title: "Nursing Vitals & Medication Chart", file: "nursing-chart 1.8 MB" },
    ],
  },
  {
    title: "Audit Pharmacy Duplicate Invoice Line Items",
    body: "Pharmacy bill line items match previous claim #CLM-78391 for ₹28,750. Request the hospital billing audit department to issue an itemized reconciliation and credit ledger.",
    suggested: "Issue Billing Query",
    docs: [
      { title: "Hospital Pharmacy Bill Batch", file: "pharmacy-bill 1.8 MB" },
      { title: "Prior Claim Settlement Ledger", file: "prior-claim-78391 950 KB" },
    ],
  },
  {
    title: "Reconcile Hospital Final Bill with Discharge Summary Tariff",
    body: "The final hospital bill total (₹1,42,500) exceeds the itemized breakdown in the discharge notes (₹1,28,750). Request a line-by-line tariff reconciliation statement.",
    suggested: "Request Tariff Reconciliation",
    docs: [
      { title: "Hospital Final Bill", file: "bill-final 3.2 MB" },
      { title: "Discharge Summary Ledger", file: "discharge-summary 2.8 MB" },
    ],
  },
  {
    title: "Assign Special Investigation Unit for Field Verification",
    body: "Due to 4 claims within 90 days and elective hospital admission 140 km away, assign a local investigator to verify inpatient stay records and bed occupancy.",
    suggested: "Assign Field Investigator",
    docs: [
      { title: "Claim Frequency Audit Summary", file: "velocity-audit 860 KB" },
      { title: "Hospital Distance Evaluation Note", file: "geo-audit 640 KB" },
    ],
  },
  {
    title: "Review Pre-Existing Condition & 36-Month Medical History",
    body: "Examine insured's 36-month lookback medical records and family physician consultation history to verify whether chronic gastrointestinal symptoms predated policy inception.",
    suggested: "Request 3-Year Medical History",
    docs: [
      { title: "Policy Proposal Form Declaration", file: "proposal-form 2.4 MB" },
      { title: "Medical History Examination Sheet", file: "medical-history 1.6 MB" },
    ],
  },
  {
    title: "Reconcile Policyholder Identity & KYC Discrepancy",
    body: "Obtain an official KYC confirmation or attested identity certificate from the member reconciling the name variation between government tax card and policy registry.",
    suggested: "Request Identity Re-confirmation",
    docs: [
      { title: "Government Tax Card Copy", file: "tax-card-copy 780 KB" },
      { title: "Policy Member Certificate", file: "member-certificate 510 KB" },
    ],
  },
  {
    title: "Evaluate Clinical Necessity for Final 24 Hours of Hospital Stay",
    body: "No active therapeutic notes or nursing vitals were documented during the final 22 hours prior to discharge. Assess whether the 4th day room rent and nursing fees should be deducted.",
    suggested: "Apply Tariff Deduction",
    docs: [
      { title: "Day 4 Indoor Medication Sheet", file: "day4-chart 1.3 MB" },
      { title: "Bedside Round Clinical Notes", file: "doctor-rounds 920 KB" },
    ],
  },
];
const scores = [
  { title: "Diagnosis & Procedures", score: 94, match: "Match", description: "High alignment with doctor's clinical plan, minimal divergence in diagnostic tests or treatment pathway." },
  { title: "Medication", score: 62, match: "Low Match", description: "Major differences in prescribed drugs versus standard formulary protocols, drug dosages and combinations." },
  { title: "Reports & Test Results", score: 48, match: "Match", description: "Variations in test results or excessive repeats indicate potential unbundling or repeated laboratory billing." },
];

const RISK = 64;
const GAUGE_TICKS = 31;
const GAUGE_START_ANGLE = -90;
const GAUGE_END_ANGLE = 90;
const GAUGE_TICK_W = 6;
const GAUGE_TICK_H = 44;

export function getConfidenceColor(confidence: number): string {
  if (confidence >= 90) return "#22c55e"; // Green for high confidence (>=90%)
  if (confidence >= 80) return "#f97316"; // Orange for medium confidence (80-89%)
  return "#ef4444"; // Red for lower confidence (<80%)
}

export function getRiskColor(score: number): string {
  if (score < 40) return "#22c55e"; // Green for good percentage
  if (score < 70) return "#f97316"; // Orange for medium percentage
  return "#ef4444"; // Red for danger percentage
}

function RiskGauge({ score = RISK }: { score?: number }) {
  const [animatedValue, setAnimatedValue] = useState(0);
  const color = getRiskColor(score);

  useEffect(() => {
    let animId: number;
    let startTime: number | null = null;
    const duration = 1200;

    // Reset to 0 on initial page load / refresh
    setAnimatedValue(0);

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(1, elapsed / duration);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(score * ease);
      setAnimatedValue(current);

      if (progress < 1) {
        animId = requestAnimationFrame(step);
      }
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [score]);

  return (
    <div className="relative mx-auto w-full max-w-[285px]">
      <svg viewBox="0 0 300 170" className="block w-full" aria-hidden="true">
        {Array.from({ length: GAUGE_TICKS }, (_, i) => {
          const rotate = GAUGE_START_ANGLE + (i / (GAUGE_TICKS - 1)) * (GAUGE_END_ANGLE - GAUGE_START_ANGLE);
          const tickPercent = (i / (GAUGE_TICKS - 1)) * 100;
          const isActive = tickPercent <= animatedValue;

          return (
            <rect
              key={i}
              x={150 - GAUGE_TICK_W / 2}
              y="3"
              width={GAUGE_TICK_W}
              height={GAUGE_TICK_H}
              rx={GAUGE_TICK_W / 2}
              transform={`rotate(${rotate.toFixed(2)} 150 150)`}
              fill={isActive ? color : "rgba(255, 255, 255, 0.35)"}
            />
          );
        })}
      </svg>
      <div className="absolute inset-0 flex translate-y-[48px] flex-col items-center justify-end pb-[6%] text-center">
        <p className="font-display text-5xl leading-none sm:text-6xl">
          {animatedValue}
          <span className="ml-1 text-2xl">%</span>
        </p>
        <p className="mt-2 text-[15px] font-bold">Risk Probability</p>
=======
type Section = "findings" | "checklist" | "steps";
const findings = [
  { title: "Procedure & Clinical Pathway Deviation", body: "Prescribed treatment plan includes 3 invasive procedures that deviate from established clinical guidelines for the diagnosis.", impact: "Unwarranted invasive interventions increase claim severity by ₹38,000.", priority: "High Priority" },
  { title: "Unjustified Medication & Specialist Over-Consultation", body: "Atypical prescription of broad-spectrum antibiotic and 4 uncoordinated specialist consults within 48 hours.", impact: "Excessive drug tariff markup: lack of cross-specialty clinical handover notes.", priority: "High Priority" },
  { title: "Duplicate Invoice & Test Repetition Billing", body: "Duplicate invoice matching prior claim and 3x repeated lab tests without clinical indication.", impact: "Identified exact hash collision with prior settled claim #CLM-78391 for ₹28,750.", priority: "Critical Priority" },
  { title: "Proximity Meter Outlier Score Deviation", body: "GD proximity score (10. 8) deviates into the 95th percentile, signaling high fraud probability.", impact: "Patient residential GPS deviates >140km while 6 nearby empanelled network hospitals were bypassed.", priority: "High Priority" },
  { title: "High-Frequency Claim Velocity Pattern", body: "4 claims filed in 90 days with the same provider, with cumulative claims 6.8x above average tier.", impact: "Abnormal velocity cluster triggering automated SIU (Special Investigation Unit) review protocol.", priority: "Medium Priority" },
];
const checks = [
  { question: "Does the claim fall within exclusions?", detail: "Borderline-pre-existing condition clause may apply", status: "Flagged" },
  { question: "Was the policy recently purchased or materially modified?", detail: "Policy modified 12 days before incident", status: "Failed" },
  { question: "Was coverage increased shortly before the incident?", detail: "Sum insured raised from ₹5L to ₹15L, 18 days prior", status: "Failed" },
  { question: "Has the insured made similar claims previously?", detail: "4 claims in last 90 days with same physician", status: "Flagged" },
  { question: "Is the sum insured sufficient for the claim amount?", detail: "Claim is 92% of total sum insured", status: "Flagged" },
  { question: "Does Government PAN card name strictly match member records?", detail: "Name difference: 'Johnathan E. Doe' on PAN vs John Doe on policy registration.", status: "Flagged" },
  { question: "Was treatment active during entire length of hospital stay?", detail: "No active therapeutic notes or vitals monitored during last 22 hours prior to discharge", status: "Flagged" },
  { question: "Does treating physician prescription carry official seal & registration stamp?", detail: "Missing official MCI/NMC medical registration stamp on primary prescription sheet", status: "Failed" },
  { question: "Is formal inpatient discharge summary attached and complete?", detail: "Discharge summary document missing fromuploaded patient packet", status: "Failed" },
];
const steps = [
  { title: "Doctor Seal Not Found", body: "The prescription and referral letter do not carry the physician's official seal or stamp. A valid stamp is mandatory for hospital claim approval.", suggested: "Request Re-upload", docs: [{ title: "Prescription & Referral Letter", file: "prescription-refer 1.4 MB" }] },
  { title: "Discharge Summary Missing", body: "No discharge summary has been attached. This document is required for inpatient treatment and settlement processing.", suggested: "Request Re-upload", docs: [{ title: "Discharge Summary", file: "discharge-summar... 2.8 MB" }] },
  { title: "Duplicate Invoice Detected", body: "Pharmacy Bill appears to be a duplicate of a previously submitted claim (#CLM-78391). Line item totals and invoice numbers match.", suggested: "Flag Duplicate", docs: [{ title: "Pharmacy Bill", file: "pharmacy-bill.png 1.8 MB" }] },
  { title: "Billing Amount Mismatch", body: "The total on the hospital bill (₹1,42,500) does not match the itemised breakdown in the discharge summary (₹1.28.750). A difference of ₹13,750 needs reconciliation.", suggested: "Request Clarification", docs: [{ title: "Hospital Final Bill", file: "bill-final pdf 3.2 MB" }, { title: "Discharge Summary", file: "discharge-summar... 2.8 MB" }] },
];
const scores = [
  { title: "Diagnosis & Procedures", score: 94, match: "Match", description: "High alignment with doctor's plan, minimal differences in diagnostic tests or treatment." },
  { title: "Medication", score: 62, match: "Low Match", description: "Major differences in prescribed vs. AI-suggested medications, including drug dosages and combinations." },
  { title: "Reports & Test Results", score: 48, match: "Match", description: "Variations in test results or excessive repeats may be a sign of data manipulation or efforts to overcharge." },
];

const RISK = 87;
const GAUGE_TICKS = 32;
const BAR_TICKS = 32;

const gaugeTicks = Array.from({ length: GAUGE_TICKS }, (_, i) => ({
  rotate: (i + 0.5) * (180 / GAUGE_TICKS) - 90,
  active: ((i + 0.5) / GAUGE_TICKS) * 100 < RISK,
}));

function RiskGauge() {
  return (
    <div className="relative mx-auto w-full max-w-[310px]">
      <svg viewBox="0 0 300 168" className="block w-full" aria-hidden="true">
        {gaugeTicks.map((tick, i) => (
          <rect key={i} x="147.5" y="2" width="5" height="34" rx="2.5" className={tick.active ? "fill-gauge-active" : "fill-gauge-track"} transform={`rotate(${tick.rotate.toFixed(2)} 150 150)`} />
        ))}
      </svg>
      <div className="absolute inset-0 flex translate-y-10 flex-col items-center justify-end pb-[7%] text-center">
        <p className="font-display text-6xl leading-none sm:text-7xl">{RISK}<span className="ml-1 text-3xl">%</span></p>
        <p className="mt-3 text-[15px] font-bold">Risk Probability</p>
>>>>>>> 47870d2fa92f4c13b063b936e1cad6ac15244545
      </div>
    </div>
  );
}

const BAR_VIEW_W = 400;
const BAR_VIEW_H = 46;
<<<<<<< HEAD
const BAR_TICKS = 32;
=======
>>>>>>> 47870d2fa92f4c13b063b936e1cad6ac15244545
const BAR_PITCH = BAR_VIEW_W / BAR_TICKS;
const BAR_TICK_W = 6.5;
const BAR_TICK_H = 40;

<<<<<<< HEAD
export function getProtocolScoreColor(score: number): string {
  if (score >= 70) return "#22c55e"; // Green for good score
  if (score >= 50) return "#f97316"; // Orange for medium score
  return "#ef4444"; // Red for danger/low score
}

function CombBar({ score, label, color }: { score: number; label: string; color?: string }) {
  const [animatedScore, setAnimatedScore] = useState(0);
  const barColor = color ?? getProtocolScoreColor(score);

  useEffect(() => {
    let animId: number;
    let startTime: number | null = null;
    const duration = 1000;

    setAnimatedScore(0);

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(1, elapsed / duration);
      const ease = 1 - Math.pow(1 - progress, 3);
      setAnimatedScore(Math.round(score * ease));

      if (progress < 1) {
        animId = requestAnimationFrame(step);
      }
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [score]);

  return (
    <svg viewBox={`0 0 ${BAR_VIEW_W} ${BAR_VIEW_H}`} className="mb-5 block h-auto w-full" role="img" aria-label={`${label}: ${score}%`} aria-hidden="false">
      {Array.from({ length: BAR_TICKS }, (_, i) => {
        const tickScore = ((i + 0.5) / BAR_TICKS) * 100;
        const isActive = tickScore <= animatedScore;
        return (
          <rect
            key={i}
            x={(i * BAR_PITCH).toFixed(2)}
            y="3"
            width={BAR_TICK_W}
            height={BAR_TICK_H}
            rx={BAR_TICK_W / 2}
            fill={isActive ? barColor : undefined}
            className={isActive ? "" : "fill-bar-track"}
          />
        );
      })}
=======
function CombBar({ score, label }: { score: number; label: string }) {
  return (
    <svg viewBox={`0 0 ${BAR_VIEW_W} ${BAR_VIEW_H}`} className="mb-5 block h-auto w-full" role="img" aria-label={`${label}: ${score}%`} aria-hidden="false">
      {Array.from({ length: BAR_TICKS }, (_, i) => (
        <rect key={i} x={(i * BAR_PITCH).toFixed(2)} y="3" width={BAR_TICK_W} height={BAR_TICK_H} rx={BAR_TICK_W / 2} className={((i + 0.5) / BAR_TICKS) * 100 <= score ? "fill-primary" : "fill-bar-track"} />
      ))}
>>>>>>> 47870d2fa92f4c13b063b936e1cad6ac15244545
    </svg>
  );
}

function ClaimPage() {
<<<<<<< HEAD
  const [section, setSection] = useState<Section>("checklist");
  const [search, setSearch] = useState("");
  const [queryStep, setQueryStep] = useState<number | null>(null);
  const [expandedEvidence, setExpandedEvidence] = useState<Record<string, boolean>>({});

  const toggleEvidence = (title: string) => {
    setExpandedEvidence((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const visibleChecks = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return checks;
    return checks.filter((item) =>
      `${item.title} ${item.finding} ${item.status} ${item.risk} ${item.evidence.join(" ")}`
        .toLowerCase()
        .includes(term),
    );
  }, [search]);

=======
  const [section, setSection] = useState<Section>("findings");
  const [openFinding, setOpenFinding] = useState<number | null>(0);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Flags & Warnings");
  const [queryStep, setQueryStep] = useState<number | null>(null);
  const visibleChecks = useMemo(() => checks.filter((item) => {
    const matchesFilter = filter === "Flags & Warnings" || item.status === filter;
    return matchesFilter && `${item.question} ${item.detail}`.toLowerCase().includes(search.toLowerCase());
  }), [filter, search]);
>>>>>>> 47870d2fa92f4c13b063b936e1cad6ac15244545
  const selectedStep = queryStep === null ? undefined : steps[queryStep];

  return (
    <main className="min-h-screen bg-canvas pb-24 text-foreground">
      <div className="mx-auto max-w-[1440px] px-5 pt-6 sm:px-8 lg:px-14 lg:pt-9">
<<<<<<< HEAD
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,.65fr)]">
          <section className="flex flex-col justify-between border border-border bg-card p-6 sm:p-7 lg:p-8" aria-label="Claim Overview">
            <div className="flex items-center justify-between border-b border-border pb-3.5"><h1 className="font-display text-2xl">Claim Overview</h1></div>
            <div className="py-4 sm:py-5">
              <p className="text-[15px] text-ink-soft">Patient Information</p>
              <p className="mt-1.5 font-display text-[38px] leading-tight">Elena Smith</p>
              <p className="mt-1 text-[15px] text-ink-soft">(28y, Female)</p>
            </div>
            <div className="grid grid-cols-2 gap-x-5 gap-y-3.5 border-t border-border pt-4 text-[15px]">
              <div><p className="mb-1 text-[15px] text-ink-soft">Policy Number</p><p className="font-semibold">#INS-2026-00389</p></div>
              <div><p className="mb-1 text-[15px] text-ink-soft">Total Claimed</p><p className="font-display text-xl">₹1,42,500</p></div>
              <div><p className="mb-1 text-[15px] text-ink-soft">Hospital / Center</p><p className="font-semibold">Apex Multi-Specialty Medical Center</p></div>
              <div><p className="mb-1 text-[15px] text-ink-soft">Hospitalization Stay</p><p className="font-semibold whitespace-nowrap">14 Feb 2026 – 18 Feb 2026 (4 days)</p></div>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-[15px]"><span className="text-ink-soft">Adjudication tier</span><span className="font-bold">High risk dossier</span></div>
          </section>
          <section className="flex flex-col justify-between bg-primary p-6 sm:p-7 lg:p-8 text-primary-foreground">
            <div className="flex items-center gap-2">
              <span className="size-2 shrink-0 rounded-full" style={{ backgroundColor: getRiskColor(RISK) }} aria-hidden="true" />
              <span className="text-[15px] font-bold">Overall Risk: High</span>
            </div>
            <div className="my-auto flex flex-col items-center justify-center py-2">
              <RiskGauge score={RISK} />
            </div>
            <p className="text-center text-[15px] leading-relaxed opacity-90">High risk adjudication score identified across clinical necessity, tariff conformity, and prior claim history.</p>
=======
        <div className="mb-5 flex items-center justify-end border-b border-border pb-3 text-[10px] font-bold uppercase tracking-widest sm:text-xs">
          <span>Claim Reference: CLM-94021</span>
        </div>
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,.65fr)]">
          <section className="flex min-h-[350px] flex-col justify-between border border-border bg-card p-7 sm:p-10 lg:p-12" aria-label="Patient Information">
            <div className="flex items-center justify-between border-b border-border pb-5"><h2 className="font-display text-2xl">Patient Information</h2></div>
            <div className="py-8 lg:py-12"><p className="text-xs uppercase text-ink-soft">Patient Information</p><p className="mt-3 font-display text-5xl leading-tight sm:text-6xl">Elena Smith</p><p className="mt-2 text-sm text-ink-soft">(28y, Female)</p></div>
            <div className="grid grid-cols-2 gap-x-5 gap-y-5 border-t border-border pt-6 text-sm">
              <div><p className="mb-2 text-xs text-ink-soft">Policy Number</p><p className="font-semibold">#INS-2026-00389</p></div>
              <div><p className="mb-2 text-xs text-ink-soft">Total Claimed</p><p className="font-display text-xl">₹1,42,500</p></div>
              <div><p className="mb-2 text-xs text-ink-soft">Hospital / Center</p><p className="font-semibold">Apex Multi-Specialty Medical Center</p></div>
              <div><p className="mb-2 text-xs text-ink-soft">Hospitalization Stay</p><p className="font-semibold">14 Feb 2026 – 18 Feb 2026<br />(4 days)</p></div>
            </div>
            <div className="mt-7 flex items-center justify-between border-t border-border pt-4 text-xs"><span className="text-ink-soft">Adjudication Tier</span><span className="font-bold">High Risk Dossier</span></div>
          </section>
          <section className="flex min-h-[350px] flex-col bg-primary px-7 py-8 text-primary-foreground sm:px-8 sm:py-10">
            <h1 className="sr-only">Claim Overview</h1>
            <div className="flex items-center gap-2">
              <span className="size-2 shrink-0 rounded-full bg-alert-bright" aria-hidden="true" />
              <span className="text-sm font-bold">Overall Risk: High</span>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center">
              <RiskGauge />
              <p className="mt-9 max-w-[280px] text-center text-sm leading-relaxed">High overall risk detected with 87% confidence, requiring immediate human investigation.</p>
            </div>
>>>>>>> 47870d2fa92f4c13b063b936e1cad6ac15244545
          </section>
        </div>

        <section className="mt-5 border border-border bg-card px-7 py-8 sm:px-10 sm:py-10" aria-label="Protocol match">
<<<<<<< HEAD
          <div className="mb-8 flex items-baseline justify-between gap-4 border-b border-border pb-5"><h2 className="font-display text-2xl sm:text-3xl">Protocol match</h2><span className="text-[15px] text-ink-soft">Ideal score: 70+ • Protocol match</span></div>
          <div className="grid gap-7 md:grid-cols-3 md:gap-0">{scores.map((item, i) => {
            const itemColor = getProtocolScoreColor(item.score);
            return (
              <div key={item.title} className={`flex flex-col ${i > 0 ? "md:border-l md:border-border md:pl-6" : ""} ${i < 2 ? "md:pr-6" : ""}`}>
                <div className="flex min-h-24 items-start justify-between gap-3">
                  <h3 className="max-w-44 font-display text-xl leading-tight">{item.title}</h3>
                  <div className="font-display text-4xl leading-none" style={{ color: itemColor }}>
                    {item.score}<span className="text-lg opacity-80">%</span>
                  </div>
                </div>
                <CombBar score={item.score} label={item.title} color={itemColor} />
                <p className="text-[15px] leading-relaxed text-ink-soft">{item.description}</p>
              </div>
            );
          })}</div>
        </section>

        <section id="dossier-content" className="scroll-mt-5 pt-14 sm:pt-20">
          <div className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <h2 className="font-display text-[38px] leading-none">
              {section === "checklist"
                ? "AI Findings & Verification Checklist"
                : "Recommended Next Steps"}
            </h2>
            <div className="font-display text-[38px] leading-none">
              {section === "checklist" ? "05" : "08"}
            </div>
          </div>
          <div className="mb-5 flex overflow-x-auto border-b border-border">
            {([
              ["checklist", "AI Findings & Verification Checklist"],
              ["steps", "Recommended Next Steps"],
            ] as const).map(([key, label]) => {
              const isActive = section === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSection(key)}
                  className={`h-auto shrink-0 border-b-2 px-5 py-3.5 text-[15px] font-semibold transition-colors cursor-pointer outline-none ${
                    isActive
                      ? "border-primary bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:bg-primary"
                      : "border-transparent text-ink-soft hover:border-border hover:bg-surface-soft/50 hover:text-foreground"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {section === "checklist" && (
            <div className="border border-border bg-card">
              <div className="border-b border-border p-5 sm:px-9">
                <div className="relative w-full sm:max-w-md">
                  <Search className="absolute left-0 top-1/2 size-4 -translate-y-1/2 text-ink-soft" />
                  <input
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search findings, evidence or status"
                    aria-label="Search findings, evidence or status"
                    className="h-11 w-full border-b border-border bg-transparent pl-7 pr-2 text-[15px] outline-none focus:border-primary"
                  />
                </div>
              </div>

              {visibleChecks.map((item, i) => {
                return (
                  <article
                    key={item.title}
                    className="border-b border-border p-6 transition-colors hover:bg-surface-soft/25 last:border-0 sm:px-9 sm:py-8"
                  >
                    {/* Header Row: Big Number, Title, and Confidence Badge */}
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-center gap-4">
                        <span className="font-display text-2xl font-medium text-ink-soft/40 sm:text-3xl">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-display text-xl font-medium tracking-tight text-foreground sm:text-2xl">
                          {item.title}
                        </h3>
                      </div>

                      {/* Right-aligned Confidence Badge */}
                      <div className="flex items-center sm:justify-end">
                        <span
                          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-soft px-3.5 py-1 text-[15px] font-medium"
                          style={{ color: getConfidenceColor(item.confidence) }}
                        >
                          <span className="font-semibold">{item.confidence}%</span> Confidence
                        </span>
                      </div>
                    </div>

                    {/* Finding */}
                    <div className="mt-4 flex items-start gap-2.5">
                      <img
                        src="/Search Sparkle.svg"
                        alt=""
                        aria-hidden="true"
                        width={24}
                        height={24}
                        className="mt-0.5 size-6 shrink-0 dark:invert"
                      />
                      <p className="text-[15px] leading-relaxed text-foreground">
                        <span className="mr-1.5 font-semibold text-primary">Finding:</span>
                        {item.finding}
                      </p>
                    </div>

                    {/* Evidence Disclosure */}
                    <div className="mt-4">
                      <button
                        type="button"
                        onClick={() => toggleEvidence(item.title)}
                        aria-expanded={Boolean(expandedEvidence[item.title])}
                        className="inline-flex cursor-pointer items-center gap-1.5 text-[15px] font-semibold text-ink-soft transition-colors hover:text-foreground"
                      >
                        <span>Evidence</span>
                        <ChevronDown
                          className={`size-4 transition-transform duration-200 ${
                            expandedEvidence[item.title] ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </button>

                      {expandedEvidence[item.title] && (
                        <div className="mt-3 flex flex-wrap items-center gap-2">
                          {item.evidence.map((point) => (
                            <span
                              key={point}
                              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-soft/80 px-3.5 py-1 text-[14px] font-medium text-ink-soft transition-colors hover:border-primary/40 hover:bg-card hover:text-foreground"
                            >
                              <span className="size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                              <span>{point}</span>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                );
              })}

              {visibleChecks.length === 0 && (
                <div className="p-9 text-[15px] text-ink-soft">
                  No items matching the selected filter.
                </div>
              )}
            </div>
          )}

          {section === "steps" && (
            <div className="grid gap-5 lg:grid-cols-2">
              {steps.map((item, i) => (
                <article key={item.title} className="flex min-h-80 flex-col border border-border bg-card p-6 sm:p-9">
                  <div className="mb-7 flex items-start justify-between gap-4">
                    <span className="font-display text-[15px] text-ink-soft">0{i + 1}</span>
                  </div>
                  <h3 className="font-display text-2xl leading-tight sm:text-3xl">{item.title}</h3>
                  <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-ink-soft">{item.body}</p>
                  <div className="mt-auto pt-8">
                    <p className="mb-4 text-[15px]"><span className="font-bold">Suggested: </span>{item.suggested}</p>
                    <div className="border-t border-border pt-4">
                      <p className="mb-3 text-[15px] font-semibold text-foreground">Supporting documents</p>
                      {item.docs.map((doc) => (
                        <div key={doc.title} className="mb-2 flex items-center justify-between gap-3 text-[15px]">
                          <span className="flex items-center gap-2 font-normal">
                            <img
                              src="/Document.svg"
                              alt=""
                              aria-hidden="true"
                              width={16}
                              height={16}
                              className="size-4 shrink-0 dark:invert"
                            />
                            {doc.title}
                          </span>
                          <span className="text-right text-ink-soft">{doc.file}</span>
                        </div>
                      ))}
                    </div>
                    <Button variant="editorialOutline" className="mt-6 h-11 w-full rounded-none" onClick={() => setQueryStep(i)}>
                      Raise Query
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
        <div className="mt-10 flex items-center justify-end border-t border-border pt-5 text-[15px] font-bold">
          <Button variant="editorialGhost" className="rounded-none text-[15px]" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Claim Overview <ArrowDown className="rotate-180" />
          </Button>
        </div>
      </div>
      {selectedStep && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-primary/50 p-4 sm:items-center"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setQueryStep(null);
          }}
        >
          <div role="dialog" aria-modal="true" aria-labelledby="query-title" className="w-full max-w-lg bg-card p-7 shadow-xl sm:p-9">
            <div className="flex items-start justify-between gap-4">
              <span className="text-[15px] font-semibold text-ink-soft">Recommended next steps</span>
              <Button variant="editorialGhost" size="icon" aria-label="Close" className="-mt-2 -mr-2 rounded-none" onClick={() => setQueryStep(null)}>
                <X />
              </Button>
            </div>
            <h2 id="query-title" className="mt-7 font-display text-3xl">{selectedStep.title}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{selectedStep.body}</p>
            <div className="mt-8 border-t border-border pt-5 text-[15px]"><span className="font-bold">Suggested: </span>{selectedStep.suggested}</div>
          </div>
        </div>
      )}
=======
          <div className="mb-8 flex items-baseline justify-between gap-4 border-b border-border pb-5"><h2 className="font-display text-2xl sm:text-3xl">Protocol match</h2><span className="text-xs text-ink-soft">Ideal score: 70+ • Protocol match</span></div>
          <div className="grid gap-7 md:grid-cols-3 md:gap-0">{scores.map((item, i) => (
            <div key={item.title} className={`flex flex-col ${i > 0 ? "md:border-l md:border-border md:pl-8" : ""} ${i < 2 ? "md:pr-8" : ""}`}>
              <div className="flex min-h-24 items-start justify-between gap-3"><h3 className="max-w-44 font-display text-xl leading-tight">{item.title}</h3><div className="font-display text-4xl leading-none">{item.score}<span className="text-lg">%</span></div></div>
              <CombBar score={item.score} label={item.title} />
              <span className="mb-3 text-[11px] font-bold uppercase tracking-widest">{item.match}</span>
              <p className="max-w-xs text-sm leading-relaxed text-ink-soft">{item.description}</p>
            </div>
          ))}</div>
        </section>

        <section id="dossier-content" className="scroll-mt-5 pt-14 sm:pt-20">
          <div className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="mb-3 text-xs font-bold uppercase tracking-widest">High Risk Dossier</p><h2 className="font-display text-4xl leading-none sm:text-5xl">{section === "findings" ? "Flagged anomaly findings" : section === "checklist" ? "Verification checklist" : "Recommended next steps"}</h2></div><div className="font-display text-6xl leading-none">{section === "findings" ? "05" : section === "checklist" ? "53" : "08"}</div></div>
          <div className="mb-5 flex overflow-x-auto border-b border-border">
            {([ ["findings", "Flagged anomaly findings", "5"], ["checklist", "Verification checklist", "53"], ["steps", "Recommended next steps", "8"] ] as const).map(([key, label, count]) => <Button key={key} type="button" variant="editorialGhost" onClick={() => setSection(key)} className={`h-auto shrink-0 rounded-none border-b-2 px-4 py-4 text-xs font-semibold sm:px-6 sm:text-sm ${section === key ? "border-primary bg-primary text-primary-foreground" : "border-transparent"}`}>{label}<span className="ml-1 opacity-60">{count}</span></Button>)}
          </div>

          {section === "findings" && <div className="border border-border bg-card">
            {findings.map((item, i) => <article key={item.title} className="border-b border-border last:border-b-0">
              <Button type="button" variant="editorialGhost" aria-expanded={openFinding === i} onClick={() => setOpenFinding(openFinding === i ? null : i)} className="flex h-auto min-h-28 w-full items-center justify-between gap-4 rounded-none px-5 py-6 text-left whitespace-normal hover:bg-surface-soft sm:px-9">
                <span className="flex min-w-0 items-start gap-4 sm:gap-8"><span className="pt-1 font-display text-sm text-ink-soft">0{i + 1}</span><span className="font-display text-lg font-medium leading-tight sm:text-2xl">{item.title}</span></span>
                <span className="flex shrink-0 items-center gap-4"><span className={`hidden text-[10px] font-bold uppercase tracking-wider sm:block ${item.priority === "Critical Priority" ? "text-alert" : "text-ink-soft"}`}>{item.priority}</span><ChevronDown className={`size-5 transition-transform ${openFinding === i ? "rotate-180" : ""}`} /></span>
              </Button>
              {openFinding === i && <div className="grid gap-8 px-5 pb-9 pl-12 sm:grid-cols-2 sm:px-9 sm:pl-[84px]"><p className="max-w-md text-sm leading-relaxed text-ink-soft">{item.body}</p><div className="border-l-2 border-primary pl-5"><p className="mb-2 text-[11px] font-bold uppercase tracking-wider">Clinical/Financial Impact:</p><p className="max-w-md text-sm leading-relaxed">{item.impact}</p><span className={`mt-4 inline-block text-xs font-bold ${item.priority === "Critical Priority" ? "text-alert" : "text-ink-soft"}`}>{item.priority}</span></div></div>}
            </article>)}
          </div>}

          {section === "checklist" && <div className="border border-border bg-card">
            <div className="flex flex-col gap-4 border-b border-border p-5 sm:flex-row sm:items-center sm:justify-between sm:px-9"><div className="relative w-full sm:max-w-sm"><Search className="absolute left-0 top-1/2 size-4 -translate-y-1/2 text-ink-soft" /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search policy rules or findings" aria-label="Search policy rules or findings" className="h-11 w-full border-b border-border bg-transparent pl-7 pr-2 text-sm outline-none focus:border-primary" /></div><div className="flex gap-1">{["Flags & Warnings", "Passed", "Flagged", "Failed"].map((name) => <Button key={name} variant={filter === name ? "editorial" : "editorialGhost"} size="sm" className="rounded-none px-2 text-[11px] sm:px-3" onClick={() => setFilter(name)}>{name}</Button>)}</div></div>
            {visibleChecks.map((item, i) => <div key={item.question} className="grid gap-3 border-b border-border p-5 last:border-0 sm:grid-cols-[36px_1fr_100px] sm:gap-6 sm:px-9 sm:py-6"><span className="font-display text-xs text-ink-soft">{String(i + 1).padStart(2, "0")}</span><div><h3 className="font-display text-lg leading-tight">{item.question}</h3><p className="mt-2 text-sm text-ink-soft">{item.detail}</p></div><span className={`flex items-start gap-1.5 text-xs font-bold ${item.status === "Failed" ? "text-alert" : "text-foreground"}`}><span className={`mt-1 size-1.5 rounded-full ${item.status === "Failed" ? "bg-alert" : "bg-primary"}`} />{item.status}</span></div>)}
            {visibleChecks.length === 0 && <div className="p-9 text-sm text-ink-soft">{filter === "Passed" ? "Passed" : "Flags & Warnings"}</div>}
          </div>}

          {section === "steps" && <div className="grid gap-5 lg:grid-cols-2">{steps.map((item, i) => <article key={item.title} className="flex min-h-80 flex-col border border-border bg-card p-6 sm:p-9"><div className="mb-7 flex items-start justify-between gap-4"><span className="font-display text-sm text-ink-soft">0{i + 1}</span><ArrowUpRight className="size-5" /></div><h3 className="font-display text-2xl leading-tight sm:text-3xl">{item.title}</h3><p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-soft">{item.body}</p><div className="mt-auto pt-8"><p className="mb-4 text-xs"><span className="font-bold">Suggested: </span>{item.suggested}</p><div className="border-t border-border pt-4"><p className="mb-3 text-[11px] font-bold uppercase tracking-widest">Supporting Documents</p>{item.docs.map((doc) => <div key={doc.title} className="mb-2 flex items-center justify-between gap-3 text-xs"><span className="flex items-center gap-2 font-semibold"><FileText className="size-4" />{doc.title}</span><span className="text-right text-ink-soft">{doc.file}</span></div>)}</div><Button variant="editorialOutline" className="mt-6 h-11 w-full rounded-none" onClick={() => setQueryStep(i)}>Raise Query <ArrowRight /></Button></div></article>)}</div>}
        </section>
        <div className="mt-10 flex items-center justify-between border-t border-border pt-5 text-xs font-bold"><span>Claim Reference: CLM-94021</span><Button variant="editorialGhost" className="rounded-none text-xs" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Claim Overview <ArrowDown className="rotate-180" /></Button></div>
      </div>
      {selectedStep && <div className="fixed inset-0 z-50 flex items-end justify-center bg-primary/50 p-4 sm:items-center" onMouseDown={(event) => { if (event.target === event.currentTarget) setQueryStep(null); }}><div role="dialog" aria-modal="true" aria-labelledby="query-title" className="w-full max-w-lg bg-card p-7 shadow-xl sm:p-9"><div className="flex items-start justify-between gap-4"><span className="text-[11px] font-bold uppercase tracking-widest">Recommended next steps</span><Button variant="editorialGhost" size="icon" aria-label="Close" className="-mt-2 -mr-2 rounded-none" onClick={() => setQueryStep(null)}><X /></Button></div><h2 id="query-title" className="mt-7 font-display text-3xl">{selectedStep.title}</h2><p className="mt-4 text-sm leading-relaxed text-ink-soft">{selectedStep.body}</p><div className="mt-8 border-t border-border pt-5 text-sm"><span className="font-bold">Suggested: </span>{selectedStep.suggested}</div></div></div>}
>>>>>>> 47870d2fa92f4c13b063b936e1cad6ac15244545
    </main>
  );
}
