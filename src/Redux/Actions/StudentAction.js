export const ADD_STUDENT = "ADD_STUDENT";
export const EDIT_STUDENT = "EDIT_STUDENT";
export const SET_STUDENTS = "SET_STUDENTS";
export const DELETE_STUDENT = "DELETE_STUDENT";

export const addStudent = (student) => ({
  type: ADD_STUDENT,
  payload: student,
});

export const editStudent = (student) => ({
  type: EDIT_STUDENT,
  payload: student,
});

export const setStudents = (students) => {
  console.log(students);
  return {
    type: SET_STUDENTS,
    payload: students,
  };
};
export const deleteStudent = (studentId) => ({
  type: DELETE_STUDENT,
  payload: studentId,
});
