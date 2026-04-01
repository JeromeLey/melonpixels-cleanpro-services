interface PageHeaderProps {
  label?: string
  title: string
  description?: string
}

export default function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        {label && (
          <p className="text-primary-200 font-medium mb-4">{label}</p>
        )}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          {title}
        </h1>
        {description && (
          <p className="text-xl text-primary-100 max-w-2xl">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}