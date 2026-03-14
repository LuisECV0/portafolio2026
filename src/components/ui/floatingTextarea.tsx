export function FloatingTextarea({
  label,
  className = "",
  ...props
}: any) {
  return (
    <div className="relative pt-6">
      <textarea
        {...props}
        placeholder=" "
        className={`peer w-full px-4 py-3 bg-background border border-border rounded-xl resize-none outline-none
        focus:ring-2 focus:ring-primary transition-all ${className}`}
      />

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