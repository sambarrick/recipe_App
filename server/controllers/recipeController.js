const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const getAllRecipes = (req, res) => {
  pool.query("SELECT * FROM RECIPE_DATA", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const getRecipeById = (req, res) => {
  let sql = "SELECT * FROM RECIPE_DATA WHERE id = ?"
  sql = mysql.format(sql, [ req.params.id ])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const addRecipe = (req, res) => {
  const { recipe_name, cuisine_type, total_cook_time } = req.body
  let sql = "INSERT INTO RECIPE_DATA (recipe_name, cuisine_type, total_cook_time) VALUES (?, ?, ?)"
  sql = mysql.format(sql, [ recipe_name, cuisine_type, total_cook_time ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ newId: results.insertId });
  })
}

const updateRecipe = (req, res) => {
  const { recipe_name, cuisine_type, total_cook_time } = req.body
  console.log("row hopefully updated", req.body)
  console.log("row updated again", req.params.id)
  let sql = "UPDATE RECIPE_DATA SET recipe_name = ?,  cuisine_type = ?, total_cook_time = ? WHERE id = ?"
  sql = mysql.format(sql, [ recipe_name, cuisine_type, total_cook_time, req.params.id ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json("nice job son");
  })
}

const deleteRecipe = (req, res) => {
  const { recipe_name, cuisine_type, total_cook_time } = req.body
  let sql = "DELETE FROM RECIPE_DATA WHERE id = ?"
  sql = mysql.format(sql, [ req.params.id ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ message: `Deleted ${results.affectedRows} user(s)` });
  })
}

module.exports = {
  getAllRecipes,
  getRecipeById,
  addRecipe,
  updateRecipe,
  deleteRecipe
}

// const createUser = (req, res) => {
//   const { firstName, lastName } = req.body
//   let sql = "INSERT INTO users (first_name, last_name) VALUES (?, ?)"
//   sql = mysql.format(sql, [ firstName, lastName ])

//   pool.query(sql, (err, results) => {
//     if (err) return handleSQLError(res, err)
//     return res.json({ newId: results.insertId });
//   })
// }

// above exports NEED to match what the router is using AND the function const names

// getUserById,
//   createUser,
//   deleteUserByFirstName