import { ThemeProvider, useTheme } from "./context";

function ParentComponent() {
  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  );
  return <Component />;
}

function Component() {
  const context = useTheme();
  console.log(context);

  return (
    <div
      className={
        context.theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }
    >
      <h2>random component</h2>
      <button
        onClick={() => {
          if (context.theme === "dark") {
            context.setTheme("system");
            return;
          }
          context.setTheme("dark");
        }}
        className={
          context.theme === "dark"
            ? "btn text-light btn-center"
            : "btn bg-light btn-center"
        }
      >
        Değiştir
      </button>
    </div>
  );
}
export default ParentComponent;
