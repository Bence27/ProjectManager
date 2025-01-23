import { useState } from "react";
import no_project from "../../assets/no-projects.png";
import { Fragment } from "react";
import { useRef } from "react";
export default function FormContent({
  addNewProject,
  isCreateProject,
  handleStateChange,
  selectedProject,
  addTask,
  clearTask,
  deleteProject,
}) {
  const name = useRef();
  const date = useRef();
  const description = useRef();
  const task = useRef();
  const mainDivClasses = "content-center justify-items-center";

  function clearTaskInput() {
    addTask(task.current.value, selectedProject);
    task.current.value = "";
  }

  return (
    <div
      className={`mt-8 flex-col w-full  ${
        !isCreateProject && !selectedProject && mainDivClasses
      }`}
    >
      {isCreateProject ? (
        <Fragment>
          <div className="flex justify-end mr-32 mt-10">
            <button
              onClick={handleStateChange}
              className="m-1 px-4 py-2 text-xs md:text-base rounded-md hover:bg-stone-600 hover:text-stone-100"
            >
              Cancel
            </button>
            <button
              onClick={() =>
                addNewProject(
                  name.current.value,
                  date.current.value,
                  description.current.value
                )
              }
              className="m-1 px-4 py-2 text-xs md:text-base rounded-md bg-stone-800 text-stone-200 hover:bg-stone-600 hover:text-stone-100"
            >
              Save
            </button>
          </div>
          <div className="p-10">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Title
            </label>
            <input
              ref={name}
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Some Title..."
            />
          </div>
          <div className="p-10">
            <label htmlFor="description" class="block mb-2 text-sm font-medium">
              Description
            </label>
            <textarea
              ref={description}
              id="description"
              rows="4"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your description here..."
            ></textarea>
          </div>
          <div className="p-10">
            <label
              htmlFor="due_date"
              className="block mb-2 text-sm font-medium"
            >
              Title
            </label>
            <input
              ref={date}
              type="date"
              id="due_date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </Fragment>
      ) : selectedProject ? (
        <Fragment>
          <div className="pl-10 pt-10 flex justify-between">
            <div className="font-bold text-lg md:text-3xl inline">
              {selectedProject.name}
            </div>
            <button
              className="m-1 px-4 py-2 text-xs md:text-base rounded-md hover:bg-stone-600 hover:text-stone-100"
              onClick={() => deleteProject(selectedProject)}
            >
              Delete
            </button>
          </div>
          <div className="pl-10">
            <div className="text-gray-400">{selectedProject.date}</div>
          </div>
          <div className="pl-10 mt-3">
            <div>{selectedProject.description}</div>
          </div>
          <hr className="h-1 mx-auto w-2/3 my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <div className="p-10 font-bold text-lg md:text-3xl inline">Tasks</div>
          <div className="p-10 flex">
            <input
              ref={task}
              type="text"
              id="task"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Some Task..."
            />
            <button
              className="m-1 px-4 py-2 text-xs md:text-base rounded-md hover:bg-stone-600 hover:text-stone-100"
              onClick={clearTaskInput}
            >
              Add task
            </button>
          </div>
          <div>
            {selectedProject.tasks.length > 0 &&
              selectedProject.tasks.map((task, index) => (
                <div className="p-10 flex bg-cyan-100 items-center" key={index}>
                  <div className="inline w-1/2" key={index + 1}>
                    {task}
                  </div>
                  <button
                    key={index + 2}
                    className="m-1 px-4 py-2 text-xs md:text-base rounded-md hover:bg-stone-600 hover:text-stone-100"
                    onClick={() => clearTask(task, selectedProject)}
                  >
                    Clear
                  </button>
                </div>
              ))}
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
            onClick={handleStateChange}
            className="mt-5 px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
          >
            Create new project
          </button>
        </Fragment>
      )}
    </div>
  );
}
