interface PageHeaderProps {
  title: string
  description?: string
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{title}</h1>
      {description && <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-xl">{description}</p>}
    </div>
  )
}
