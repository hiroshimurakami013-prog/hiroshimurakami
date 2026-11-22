"use client";

import { useId, useState } from "react";
import { SAVINGS_ASSUMPTIONS as A } from "@/content/tools";

// The savings calculator. Everything happens in this component: nothing is
// sent to a server, saved in storage or tracked. The assumptions come from
// content/tools.ts, the same values the page lists under the result.

type Inputs = {
  hoursPerWeek: string;
  hourlyCost: string;
  accounts: string;
  invoices: string;
};

const DEFAULTS: Inputs = {
  hoursPerWeek: "10",
  hourlyCost: "40",
  accounts: "3",
  invoices: "100",
};

/** A non-negative number from a text field, capped to a sane maximum. */
const num = (value: string, max: number) => {
  const n = Number.parseFloat(value);
  return Number.isFinite(n) && n > 0 ? Math.min(n, max) : 0;
};

function estimate(input: {
  hoursPerWeek: number;
  hourlyCost: number;
  accounts: number;
  invoices: number;
}) {
  const monthly = input.hoursPerWeek * A.weeksPerMonth;
  const cap = monthly * A.cap;
  const one = (level: "low" | "high") => {
    const specific =
      (input.invoices * A.minutesPerInvoice[level]) / 60 +
      input.accounts * A.hoursPerAccount[level];
    const other = Math.max(0, monthly - specific) * A.otherShare[level];
    return Math.min(specific + other, cap);
  };
  const low = one("low");
  const high = Math.max(low, one("high"));
  return {
    monthly,
    hours: { low, high },
    dollars: { low: low * input.hourlyCost, high: high * input.hourlyCost },
  };
}

const hoursFmt = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });
const usdFmt = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const range = (low: number, high: number, fmt: Intl.NumberFormat) =>
  Math.round(low) === Math.round(high)
    ? fmt.format(low)
    : `${fmt.format(low)} to ${fmt.format(high)}`;

const FIELDS: {
  key: keyof Inputs;
  label: string;
  hint: string;
  max: number;
  step: string;
}[] = [
  {
    key: "hoursPerWeek",
    label: "Hours per week spent on bookkeeping",
    hint: "Everyone's time together: entry, matching, filing and chasing.",
    max: 400,
    step: "0.5",
  },
  {
    key: "hourlyCost",
    label: "Hourly cost of that time, in US dollars",
    hint: "Wage plus payroll costs, or your bookkeeper's hourly rate.",
    max: 1000,
    step: "1",
  },
  {
    key: "accounts",
    label: "Bank and card accounts to reconcile",
    hint: "Count each bank account, credit card and payment processor.",
    max: 200,
    step: "1",
  },
  {
    key: "invoices",
    label: "Supplier invoices and bills per month",
    hint: "Roughly how many arrive in a typical month.",
    max: 20000,
    step: "1",
  },
];

export default function SavingsCalculator() {
  const [inputs, setInputs] = useState<Inputs>(DEFAULTS);
  const id = useId();

  const result = estimate({
    hoursPerWeek: num(inputs.hoursPerWeek, 400),
    hourlyCost: num(inputs.hourlyCost, 1000),
    accounts: num(inputs.accounts, 200),
    invoices: num(inputs.invoices, 20000),
  });

  return (
    <form className="calc" onSubmit={(e) => e.preventDefault()} noValidate>
      <fieldset className="calc-fields">
        <legend className="sr-only">Your numbers</legend>
        {FIELDS.map((f) => (
          <div key={f.key} className="calc-field">
            <label htmlFor={`${id}-${f.key}`}>{f.label}</label>
            <input
              id={`${id}-${f.key}`}
              type="number"
              inputMode="decimal"
              min="0"
              max={f.max}
              step={f.step}
              value={inputs[f.key]}
              aria-describedby={`${id}-${f.key}-hint`}
              onChange={(e) =>
                setInputs((prev) => ({ ...prev, [f.key]: e.target.value }))
              }
            />
            <small id={`${id}-${f.key}-hint`}>{f.hint}</small>
          </div>
        ))}
      </fieldset>

      <div className="calc-result" aria-live="polite">
        <div className="calc-figure">
          <p className="calc-figure-label">Estimated hours saved per month</p>
          <p className="calc-figure-value">
            {range(result.hours.low, result.hours.high, hoursFmt)} hours
          </p>
        </div>
        <div className="calc-figure">
          <p className="calc-figure-label">Estimated value per month</p>
          <p className="calc-figure-value">
            {range(result.dollars.low, result.dollars.high, usdFmt)}
          </p>
        </div>
        <p className="calc-note">
          Out of about {hoursFmt.format(result.monthly)} bookkeeping hours a
          month. An estimate from the assumptions below, not a quote or a
          promise. Running costs and setup are not included.
        </p>
      </div>
    </form>
  );
}
