type CalcButtonProps = {
  label: string
  onClick: () => void
  variant?: string
}

export function CalcButton({ label, onClick, variant = '' }: CalcButtonProps) {
  return (
    <button className={`button ${variant}`.trim()} onClick={onClick} type="button">
      {label}
    </button>
  )
}
