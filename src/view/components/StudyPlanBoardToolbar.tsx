import { useState } from "react";
import { initialState } from "@/controller/state/initialState";


type StudyPlanBoardToolbarProbs = {
  state: typeof initialState;
  dispatch: any;
};


type AddModuleProps = {
  state: typeof initialState;
  dispatch: any;
};

  type AddCategoryProps = {
  dispatch: any;
};

type AddSemesterProps = {
  dispatch: any;
};

export function AddModule({ state, dispatch }: AddModuleProps) {
const [moduleName, setModuleName] = useState("");
const [moduleECTS, setModuleECTS] = useState<number>(0);
const [selectedSemesterId, setSelectedSemesterId] = useState("");
const [selectedCategory, setSelectedCategory] = useState("");

  const handleAddModule = () => {
      if (!moduleName || !selectedSemesterId || !selectedCategory) return;
  
      const id = `${moduleName}-${selectedSemesterId}-${selectedCategory}-${Date.now()}`;
  
      dispatch({
        type: "ADD_MODULE",
        module: {
          id,
          name: moduleName,
          ects: moduleECTS,
          category: selectedCategory
        },
        semesterId: selectedSemesterId,
        category: selectedCategory
      });
  
      setModuleName("");
      setModuleECTS(0);
      setSelectedSemesterId("");
      setSelectedCategory("");
  };


  return(
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "16px" }}>
          <input
          type="text"
          placeholder="Modul Name"
          value={moduleName}
          onChange={(e) => setModuleName(e.target.value)}
        />

        <input
          type="number"
          placeholder="ECTS"
          value={moduleECTS}
          onChange={(e) => setModuleECTS(Number(e.target.value))}
        />

        <select value={selectedSemesterId} onChange={(e) => setSelectedSemesterId(e.target.value)}>
          <option value="">Semester wählen</option>
          {state.semesters.map((sem) => (
            <option key={sem.id} value={sem.id}>
              {sem.label}
            </option>
          ))}

        </select>
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">Kategorie wählen</option>
          {state.categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <button onClick={handleAddModule}>Modul hinzufügen</button>
        </div>
  );
};


export function AddCategory({ dispatch }: AddCategoryProps) {
    const [newCategoryName, setNewCategoryName] = useState("");

    const addCategory = () => {
    if (!newCategoryName.trim()) return;
      dispatch({ type: "ADD_CATEGORY", category: newCategoryName.trim() });
      setNewCategoryName("");
  };


  return(
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "16px" }}>
                <input
            type="text"
            placeholder="Neue Kategorie"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
          />
        <button onClick={addCategory}>Kategorie hinzufügen</button>
      </div>
  );
}

export function AddSemester({ dispatch }: AddSemesterProps) {
  return (
  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "16px" }}>
    <button onClick={() => dispatch({ type: "ADD_SEMESTER" })}>
      Semester hinzufügen
      </button>
    </div>
  );
};


function StudyPlanBoardToolbar({state, dispatch}: StudyPlanBoardToolbarProbs) {
  return (
    <div>
      <AddModule state={state} dispatch={dispatch} />
      <AddCategory dispatch={dispatch} />
      <AddSemester dispatch={dispatch} />
    </div>
  );
}

export default StudyPlanBoardToolbar;