export default function BatmanLogo({ handlePage }) {
  return (
    <div className="logo-ctn">
      <img
        src="../src/assets/batmanlogo.webp"
        alt="Batman Logo"
        onClick={handlePage}
        style={{
          cursor: "pointer",
        }}
      />
    </div>
  );
}
