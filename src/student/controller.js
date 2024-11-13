const pool = require("../../db");
const queries = require("./queries");

const getStudents = (req, res) => {
   pool.query(queries.getStudents, (err, results) => {
      if (err) throw err;
      res.status(200).json(results.rows);
   });
};

const Getstudent_Byid = (req, res) => {
   const id = parseInt(req.params.id);
   pool.query(queries.getStudent, [id], (err, results) => {
      if (err) throw err;
      res.status(200).json(results.rows);
   });
};

const deletestudent_Byid = (req, res) => {
   const id = parseInt(req.params.id);

   pool.query(queries.deleteStudent_byId, [id], (err, results) => {
      if (!results.rows.length) {
         res.send("Student does not exist in database");
      }
   });

   pool.query(queries.deleteStudent_byId, [id], (err, results) => {
      if (err) throw err;
      res.status(200).json(results.rows).send("Student removed Successfully");
   });
};

const addStudent = (req, res) => {
   const { id, name, email, age, dob } = req.body;

   //check if email exists
   pool.query(queries.checkEmailExists, [email], (err, results) => {
      if (results.rows.length) {
         res.send("Email already exists");
      }

      pool.query(
         queries.addStudent,
         [id, name, email, age, dob],
         (err, results) => {
            if (err) throw err;
            res.status(201).send("Student created");
         }
      );
   });
};

const update_Byname = (req, res) => {
   const { name } = req.body;
   const id = parseInt(req.params.id);

   pool.query(queries.getStudent, [id], (err, results) => {
      const noStudentFound = !results.rows.length;
      if (noStudentFound) {
         res.send("There is no such student in database");
      }
   });

   pool.query(queries.updateName, [name, id], (err, results) => {
      if (err) throw err;
      res.status(200).send("Student Name updated successfully");
   });
};

const update_Email = (req, res) => {
   const { email } = req.body;
   const id = parseInt(req.params.id);

   pool.query(queries.getStudent, [id], (err, results) => {
      if (!results.rows.length) {
         res.send("There is no such student in database with this email.");
      }
   });

   pool.query(queries.updateEmail, [email, id], (err, results) => {
      if (err) throw err;
      res.status(200).send("Student email updated successfully");
   });
};

module.exports = {
   getStudents,
   Getstudent_Byid,
   deletestudent_Byid,
   addStudent,
   update_Byname,
   update_Email,
};
