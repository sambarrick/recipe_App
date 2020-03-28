const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const getAllRecipes = (req, res) => {
  pool.query("SELECT * FROM RECIPE_DATA", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

// const getUserById = (req, res) => {
//   let sql = "SELECT * FROM users WHERE id = ?"
//   sql = mysql.format(sql, [ req.params.id ])

//   pool.query(sql, (err, rows) => {
//     if (err) return handleSQLError(res, err)
//     return res.json(rows);
//   })
// }

// const createUser = (req, res) => {
//   const { firstName, lastName } = req.body
//   let sql = "INSERT INTO users (first_name, last_name) VALUES (?, ?)"
//   sql = mysql.format(sql, [ firstName, lastName ])

//   pool.query(sql, (err, results) => {
//     if (err) return handleSQLError(res, err)
//     return res.json({ newId: results.insertId });
//   })
// }

// const addRecipe = (req, res) => {
//   const { ID, recipeName, cuisineType, totalCookTime, recipeDescription } = req.body
//   let sql = "INSERT INTO RECIPE_DATA (id, recipe_name, cuisine_type, total_cook_time, recipe_description) VALUES (?, ?, ?, ?, ?)"
//   sql = mysql.format(sql, [ ID, recipeName, cuisineType, totalCookTime, recipeDescription ])

//   pool.query(sql, (err, results) => {
//     if (err) return handleSQLError(res, err)
//     return res.json({ newId: results.insertId });
//   })
// }

// const updateRecipe = (req, res) => {
//   const { firstName, lastName } = req.body
//   let sql = "UPDATE users SET first_name = ?, last_name = ? WHERE id = ?"
//   sql = mysql.format(sql, [ firstName, lastName, req.params.id ])

//   pool.query(sql, (err, results) => {
//     if (err) return handleSQLError(res, err)
//     return res.status(204).json();
//   })
// }

// const deleteUserByFirstName = (req, res) => {
//   let sql = "DELETE FROM users WHERE first_name = ?"
//   sql = mysql.format(sql, [ req.params.first_name ])

//   pool.query(sql, (err, results) => {
//     if (err) return handleSQLError(res, err)
//     return res.json({ message: `Deleted ${results.affectedRows} user(s)` });
//   })
// }

module.exports = {
  getAllRecipes,
  //addRecipe
}

// above exports NEED to match what the router is using AND the function const names

// getUserById,
//   createUser,
//   updateUserById,
//   deleteUserByFirstName