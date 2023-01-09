// components/layout.js
import Navigation from "../Navigation";

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  );
}
