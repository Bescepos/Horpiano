"use client";

import { forwardRef, useId, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface FieldShellProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
}

function FieldShell({ id, label, required, error, hint, children }: FieldShellProps) {
  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-charcoal-light">
        {label}
        {required && (
          <span className="ml-1 text-error" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {hint && (
        <p id={hintId} className="text-xs text-ink-muted">
          {hint}
        </p>
      )}
      {children}
      {error && (
        <p id={errorId} role="alert" className="text-sm font-medium text-error">
          {error}
        </p>
      )}
    </div>
  );
}

const controlBase =
  "w-full rounded-md border bg-white px-4 text-charcoal placeholder:text-ink-muted/60 transition focus:border-gold-400 focus:ring-2 focus:ring-gold-400/30 disabled:opacity-60";

interface BaseFieldProps {
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
}

type InputProps = BaseFieldProps &
  React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, hint, required, id, className, ...props },
  ref,
) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  return (
    <FieldShell id={fieldId} label={label} required={required} error={error} hint={hint}>
      <input
        ref={ref}
        id={fieldId}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={
          [hint ? `${fieldId}-hint` : null, error ? `${fieldId}-error` : null]
            .filter(Boolean)
            .join(" ") || undefined
        }
        className={cn(controlBase, "h-12", error && "border-error", className)}
        {...props}
      />
    </FieldShell>
  );
});

type TextareaProps = BaseFieldProps &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea({ label, error, hint, required, id, className, rows = 5, ...props }, ref) {
    const generatedId = useId();
    const fieldId = id ?? generatedId;
    return (
      <FieldShell id={fieldId} label={label} required={required} error={error} hint={hint}>
        <textarea
          ref={ref}
          id={fieldId}
          rows={rows}
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={
            [hint ? `${fieldId}-hint` : null, error ? `${fieldId}-error` : null]
              .filter(Boolean)
              .join(" ") || undefined
          }
          className={cn(controlBase, "resize-y py-3 leading-relaxed", error && "border-error", className)}
          {...props}
        />
      </FieldShell>
    );
  },
);

interface SelectOption {
  label: string;
  value: string;
}

type SelectProps = BaseFieldProps &
  React.SelectHTMLAttributes<HTMLSelectElement> & {
    options: SelectOption[];
    placeholder?: string;
  };

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { label, error, hint, required, id, className, options, placeholder, ...props },
  ref,
) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  return (
    <FieldShell id={fieldId} label={label} required={required} error={error} hint={hint}>
      <div className="relative">
        <select
          ref={ref}
          id={fieldId}
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={
            [hint ? `${fieldId}-hint` : null, error ? `${fieldId}-error` : null]
              .filter(Boolean)
              .join(" ") || undefined
          }
          className={cn(
            controlBase,
            "h-12 appearance-none pr-11",
            error && "border-error",
            className,
          )}
          defaultValue={placeholder ? "" : undefined}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-muted"
          aria-hidden="true"
        />
      </div>
    </FieldShell>
  );
});
