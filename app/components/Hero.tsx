import SiteHeader from './SiteHeader'

export default function Hero() {
  return (
    <>
<><SiteHeader />
<div style={{ position: "relative", width: 1440, height: 820, overflow: "hidden", background: "#6aa6d8", fontFamily: "'F37 Ginger', 'Urbanist', system-ui, sans-serif", userSelect: "none" }}>
<svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable={false}>
<defs>
<filter id="ripple" x="-5%" y="-5%" width="110%" height="110%" colorInterpolationFilters="sRGB">
<feTurbulence type="fractalNoise" baseFrequency="0.004 0.03" numOctaves="2" seed="4" result="noise">
<animate attributeName="baseFrequency" dur="9s" values="0.004 0.03;0.007 0.04;0.004 0.03" repeatCount="indefinite" />
</feTurbulence>
<feDisplacementMap in="SourceGraphic" in2="noise" scale="22" xChannelSelector="R" yChannelSelector="G" />
</filter>
</defs>
</svg>
<svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable={false}><defs><filter id="fisheye" filterUnits="userSpaceOnUse" primitiveUnits="userSpaceOnUse" x="0" y="0" width="1440" height="820" colorInterpolationFilters="sRGB"><feImage id="fishMap" x="0" y="0" width="1440" height="820" preserveAspectRatio="none" result="map" /><feDisplacementMap id="fishDisp" in="SourceGraphic" in2="map" scale="0" xChannelSelector="R" yChannelSelector="G" /></filter></defs></svg>
<div id="stage" style={{ position: "absolute", inset: "0" }} />
<div style={{ position: "absolute", left: 40, right: 40, bottom: 28, display: "flex", alignItems: "center", justifyContent: "center", gap: 20, color: "#ffffff" }}>

<div id="dots" style={{ display: "flex", alignItems: "center", gap: 6 }} />

</div>
</div></>
    </>
  )
}
