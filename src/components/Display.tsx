type DisplayProps = {
  value: string
}

export function Display({ value }: DisplayProps) {
  return <output className="display">{value}</output>
}
