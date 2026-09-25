/** Inner-page header. `code` cross-references the matching node on the home system map. */
export function PageHeader({ code, label, title, description }: { code: string; label: string; title: string; description: string }) {
  return (
    <header className="page-header container">
      <p className="eyebrow"><span>{code}</span>{label}</p>
      <h1>{title}</h1>
      <p className="page-intro">{description}</p>
    </header>
  );
}
