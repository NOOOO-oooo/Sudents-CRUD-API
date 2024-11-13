const getStudents = "SELECT * FROM  students";

const getStudent = "SELECT * FROM students where id=$1";

const deleteStudent_byId = "delete FROM students where id=$1";

const addStudent =
   "INSERT INTO students(id,name,email,age,dob) VALUES($1,$2,$3,$4,$5)";

const checkEmailExists = "SELECT * FROM students WHERE email=$1";

const nameExists = "SELECT * FROM students where name=$1";

const updateName = "UPDATE students set name=$1 WHERE id=$2";

const updateEmail = "UPDATE students SET email=$1 WHERE id=$2";

module.exports = {
   getStudents,
   getStudent,
   deleteStudent_byId,
   checkEmailExists,
   addStudent,
   updateName,
   nameExists,
   updateEmail,
};
