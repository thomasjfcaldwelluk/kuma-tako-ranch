type SectionHeaderProps = {
  title: string
}

export default function Header({
  title,
}: SectionHeaderProps) {
  return (
    <section className="py-12">
      <h2 className="text-4xl font-bold text-center">
        {title}
      </h2>
    </section>
  )
}