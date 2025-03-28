export default function NestedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <nav>This is a nested layout{children}</nav>;
}
