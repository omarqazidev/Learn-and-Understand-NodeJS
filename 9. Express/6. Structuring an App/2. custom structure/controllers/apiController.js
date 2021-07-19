module.exports = function (app) {
  app.get("/api/person/:id", (req, res) => {
    //get that data from the database
    res.json({ firstname: "John", lastname: "Doe" });
  });

  app.post("/api/person", (req, res) => {
    //save to the database
  });

  app.delete("/api/person/:id", (req, res) => {
    //delete from the database
  });
};
