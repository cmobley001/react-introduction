function Main({ children }) {
  return (
    <main className="grow flex flex-col justify-center gap-y-4 items-center p-6">
      <h2>This is the main section.</h2>
      {children}
    </main>
  );
}
export default Main;
