import React from "react"

type FloatingInputProps = {
  label: string
} & React.InputHTMLAttributes<HTMLInputElement>

export function FloatingInput({
  label,
  className = "",
  ...props
}: FloatingInputProps) {
  return (
    <div className="relative pt-6 group">
      <input
        {...props}
        placeholder=" "
        className={`peer w-full px-4 py-3 bg-background border border-border rounded-xl outline-none
        focus:ring-2 focus:ring-primary transition-all ${className}`}
      />

      <div className="
        absolute left-3 top-0 h-[2px] w-0 bg-background
        transition-all duration-200
        peer-focus:w-16
        peer-not-placeholder-shown:w-16
      " />

      <label
        className="absolute left-4 -top-4 z-10 text-sm text-muted-foreground
        transition-all duration-200

        peer-focus:top-3
        peer-focus:text-xs
        peer-focus:text-primary

        peer-not-placeholder-shown:top-3
        peer-not-placeholder-shown:text-xs"
      >
        {label}
      </label>
    </div>
  )
}