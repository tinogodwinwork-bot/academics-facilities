function PageContainer({ children }) {
  return (
    <div style={{
      marginLeft: "240px",
      padding: "40px",
      minHeight: "100vh",
      background: "#0f172a"
    }}>
      {children}
    </div>
  );
}

export default PageContainer;