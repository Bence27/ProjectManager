import { useState } from "react";
import no_project from "../../assets/no-projects.png";
import { Fragment } from "react";
export default function FormContent() {
  const [isCreateProject, setCreateProject] = useState(true);
  function handleCreateProjectClick() {
    setCreateProject((isCreateProject) => !isCreateProject);
  }
  const mainDivClasses = "content-center";
  return (
    <div
      className={`mt-8 flex-col w-full ${!isCreateProject && mainDivClasses}`}
    >
      {isCreateProject ? (
        <Fragment>
          <div className="flex justify-end mr-32 mt-10">
            <button className="m-1 px-4 py-2 text-xs md:text-base rounded-md hover:bg-stone-600 hover:text-stone-100">
              Cancel
            </button>
            <button className="m-1 px-4 py-2 text-xs md:text-base rounded-md bg-stone-800 text-stone-200 hover:bg-stone-600 hover:text-stone-100">
              Save
            </button>
          </div>
          <div className="p-10">
            <label for="first_name" className="block mb-2 text-sm font-medium">
              Title
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Some Title..."
            />
          </div>
          <div className="p-10">
            <label for="description" class="block mb-2 text-sm font-medium">
              Description
            </label>
            <textarea
              id="description"
              rows="4"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your description here..."
            ></textarea>
          </div>
          <div className="p-10">
            <label for="due_date" className="block mb-2 text-sm font-medium">
              Title
            </label>
            <input
              type="date"
              id="due_date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <img
            className="w-16 h-16 object-contain mx-auto"
            src={no_project}
            alt="no_project"
          />
          <p className="text-center mt-5">No project Selected</p>
          <p className="text-center mt-3">
            Select a project or get start with a new one
          </p>
          <button
            onClick={handleCreateProjectClick}
            className="mt-5 px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
          >
            Create new project
          </button>
        </Fragment>
      )}
    </div>
  );
}
