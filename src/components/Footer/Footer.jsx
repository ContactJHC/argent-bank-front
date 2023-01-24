export default function Footer() {
  return (
    (isLoading ? (<></>) : (
    <footer className="footer">
      <p className="footer-text">Copyright 2020 Argent Bank</p>
    </footer>
    ))
  )
}
