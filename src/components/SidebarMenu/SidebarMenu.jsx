export default function SidebarMenu({
  projects,
  handleStateChangeMenu,
  handleProjectSelect,
}) {
  return (
    <div className="flex-col grid-cols-1 justify-items-center bg-stone-950 w-1/3 mt-8 rounded-tr-md h-screen">
      <h1 className="text-white text-center text-base md:text-2xl p-2">
        Your Projects
      </h1>
      <button
        onClick={handleStateChangeMenu}
        className="mt-5 px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      >
        + Add Project
      </button>
      <div className="mt-8">
        {projects.length > 0 &&
          projects.map((project, index) => (
            <p
              className="text-white"
              key={index}
              onClick={() => handleProjectSelect(project.name)}
            >
              {project.name}
            </p>
          ))}
      </div>
    </div>
  );
}
