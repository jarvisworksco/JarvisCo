export default function MobileCallBar() {
  return (
    <div id="mobile-call-bar" aria-label="Skambinti">
      <a
        href="tel:+37067699395"
        className="btn btn-primary"
        style={{ flex: 1, justifyContent: "center", fontSize: "0.9375rem" }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8a16 16 0 006.73 6.73l1.16-1.16a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
        </svg>
        Skambinti dabar
      </a>
    </div>
  );
}
