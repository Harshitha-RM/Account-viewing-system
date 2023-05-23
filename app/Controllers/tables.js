const express = require("express")
const router = express.Router()
const db = require("../Config/db")

router.get('/getAllDataJant22', (req, res) => {
  console.log(req.body);
  const sql = `SELECT * FROM jant22`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).send(result);
  });
});

router.post("/addNewJant22", (req, res) => {
  console.log("New", req.body);
  const { date, description, amount, status, category } = req.body;
  const sql = `INSERT INTO jant22 (date, description, amount, status, category)
             VALUES ('${date}', '${description}', '${amount}', '${status}', '${category}')`;

  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred");
      return;
    }

    console.log(result);
    res.status(200).send("Data inserted successfully");
  });
});
router.delete('/deleteJant22/:id', (req, res) => {
    const sql = `DELETE FROM jant22 WHERE id='${req.params.id}'`
    db.query(sql, (err, result) => {
        const sql1 = 'SELECT * FROM jant22';
        db.query(sql1, (err, result1) => {
            res.status(200).send(result1);
        });
    });
});

router.get('/getAllDataFebt22', (req, res) => {
  console.log(req.body);
  const sql = `SELECT * FROM febt22`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).send(result);
  });
});

router.post("/addNewFebt22", (req, res) => {
  console.log("New", req.body);
  const { date, description, amount, status, category } = req.body;
  const sql = `INSERT INTO febt22 (date, description, amount, status, category)
             VALUES ('${date}', '${description}', '${amount}', '${status}', '${category}')`;

  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred");
      return;
    }

    console.log(result);
    res.status(200).send("Data inserted successfully");
  });
});
router.delete('/deleteFebt22/:id', (req, res) => {
    const sql = `DELETE FROM febt22 WHERE id='${req.params.id}'`
    db.query(sql, (err, result) => {
        const sql1 = 'SELECT * FROM febt22';
        db.query(sql1, (err, result1) => {
            res.status(200).send(result1);
        });
    });
});
router.get('/getAllDataMarcht22', (req, res) => {
  console.log(req.body);
  const sql = `SELECT * FROM marcht22`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).send(result);
  });
});

router.post("/addNewMarcht22", (req, res) => {
  console.log("New", req.body);
  const { date, description, amount, status, category } = req.body;
  const sql = `INSERT INTO marcht22 (date, description, amount, status, category)
             VALUES ('${date}', '${description}', '${amount}', '${status}', '${category}')`;

  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred");
      return;
    }

    console.log(result);
    res.status(200).send("Data inserted successfully");
  });
});
router.delete('/deleteMarcht22/:id', (req, res) => {
    const sql = `DELETE FROM Marcht22 WHERE id='${req.params.id}'`
    db.query(sql, (err, result) => {
        const sql1 = 'SELECT * FROM Marcht22';
        db.query(sql1, (err, result1) => {
            res.status(200).send(result1);
        });
    });
});

router.get('/getAllDataAprilt22', (req, res) => {
  console.log(req.body);
  const sql = `SELECT * FROM aprilt22`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).send(result);
  });
});

router.post("/addNewApril22", (req, res) => {
  console.log("New", req.body);
  const { date, description, amount, status, category } = req.body;
  const sql = `INSERT INTO aprilt22 (date, description, amount, status, category)
             VALUES ('${date}', '${description}', '${amount}', '${status}', '${category}')`;

  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred");
      return;
    }

    console.log(result);
    res.status(200).send("Data inserted successfully");
  });
});
router.delete('/deleteAprilt22/:id', (req, res) => {
    const sql = `DELETE FROM aprilt22 WHERE id='${req.params.id}'`
    db.query(sql, (err, result) => {
        const sql1 = 'SELECT * FROM aprilt22';
        db.query(sql1, (err, result1) => {
            res.status(200).send(result1);
        });
    });
});

router.get('/getAllDataMayt22', (req, res) => {
  console.log(req.body);
  const sql = `SELECT * FROM mayt22`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).send(result);
  });
});

router.post("/addNewMayt22", (req, res) => {
  console.log("New", req.body);
  const { date, description, amount, status, category } = req.body;
  const sql = `INSERT INTO mayt22 (date, description, amount, status, category)
             VALUES ('${date}', '${description}', '${amount}', '${status}', '${category}')`;

  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred");
      return;
    }

    console.log(result);
    res.status(200).send("Data inserted successfully");
  });
});
router.delete('/deleteMayt22/:id', (req, res) => {
    const sql = `DELETE FROM mayt22 WHERE id='${req.params.id}'`
    db.query(sql, (err, result) => {
        const sql1 = 'SELECT * FROM mayt22';
        db.query(sql1, (err, result1) => {
            res.status(200).send(result1);
        });
    });
});

router.get('/getAllDataJunet22', (req, res) => {
  console.log(req.body);
  const sql = `SELECT * FROM junet22`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).send(result);
  });
});

router.post("/addNewJunet22", (req, res) => {
  console.log("New", req.body);
  const { date, description, amount, status, category } = req.body;
  const sql = `INSERT INTO junet22 (date, description, amount, status, category)
             VALUES ('${date}', '${description}', '${amount}', '${status}', '${category}')`;

  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred");
      return;
    }

    console.log(result);
    res.status(200).send("Data inserted successfully");
  });
});
router.delete('/deleteJunet22/:id', (req, res) => {
    const sql = `DELETE FROM junet22 WHERE id='${req.params.id}'`
    db.query(sql, (err, result) => {
        const sql1 = 'SELECT * FROM junet22';
        db.query(sql1, (err, result1) => {
            res.status(200).send(result1);
        });
    });
});

router.get('/getAllDataJulyt22', (req, res) => {
  console.log(req.body);
  const sql = `SELECT * FROM julyt22`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).send(result);
  });
});

router.post("/addNewJulyt22", (req, res) => {
  console.log("New", req.body);
  const { date, description, amount, status, category } = req.body;
  const sql = `INSERT INTO julyt22 (date, description, amount, status, category)
             VALUES ('${date}', '${description}', '${amount}', '${status}', '${category}')`;

  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred");
      return;
    }

    console.log(result);
    res.status(200).send("Data inserted successfully");
  });
});
router.delete('/deleteJulyt22/:id', (req, res) => {
    const sql = `DELETE FROM julyt22 WHERE id='${req.params.id}'`
    db.query(sql, (err, result) => {
        const sql1 = 'SELECT * FROM julyt22';
        db.query(sql1, (err, result1) => {
            res.status(200).send(result1);
        });
    });
});

router.get('/getAllDataAugt22', (req, res) => {
  console.log(req.body);
  const sql = `SELECT * FROM augt22`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).send(result);
  });
});

router.post("/addNewAugt22", (req, res) => {
  console.log("New", req.body);
  const { date, description, amount, status, category } = req.body;
  const sql = `INSERT INTO augt22 (date, description, amount, status, category)
             VALUES ('${date}', '${description}', '${amount}', '${status}', '${category}')`;

  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred");
      return;
    }

    console.log(result);
    res.status(200).send("Data inserted successfully");
  });
});
router.delete('/deleteAugt22/:id', (req, res) => {
    const sql = `DELETE FROM augt22 WHERE id='${req.params.id}'`
    db.query(sql, (err, result) => {
        const sql1 = 'SELECT * FROM augt22';
        db.query(sql1, (err, result1) => {
            res.status(200).send(result1);
        });
    });
});

router.get('/getAllDataSept22', (req, res) => {
  console.log(req.body);
  const sql = `SELECT * FROM sept22`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).send(result);
  });
});

router.post("/addNewSept22", (req, res) => {
  console.log("New", req.body);
  const { date, description, amount, status, category } = req.body;
  const sql = `INSERT INTO sept22 (date, description, amount, status, category)
             VALUES ('${date}', '${description}', '${amount}', '${status}', '${category}')`;

  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred");
      return;
    }

    console.log(result);
    res.status(200).send("Data inserted successfully");
  });
});
router.delete('/deleteSept22/:id', (req, res) => {
    const sql = `DELETE FROM sept22 WHERE id='${req.params.id}'`
    db.query(sql, (err, result) => {
        const sql1 = 'SELECT * FROM sept22';
        db.query(sql1, (err, result1) => {
            res.status(200).send(result1);
        });
    });
});

router.get('/getAllDataOctt22', (req, res) => {
  console.log(req.body);
  const sql = `SELECT * FROM octt22`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).send(result);
  });
});

router.post("/addNewOctt22", (req, res) => {
  console.log("New", req.body);
  const { date, description, amount, status, category } = req.body;
  const sql = `INSERT INTO octt22 (date, description, amount, status, category)
             VALUES ('${date}', '${description}', '${amount}', '${status}', '${category}')`;

  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred");
      return;
    }

    console.log(result);
    res.status(200).send("Data inserted successfully");
  });
});
router.delete('/deleteOctt22/:id', (req, res) => {
    const sql = `DELETE FROM octt22 WHERE id='${req.params.id}'`
    db.query(sql, (err, result) => {
        const sql1 = 'SELECT * FROM octt22';
        db.query(sql1, (err, result1) => {
            res.status(200).send(result1);
        });
    });
});

router.get('/getAllDataNovt22', (req, res) => {
  console.log(req.body);
  const sql = `SELECT * FROM novt22`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).send(result);
  });
});

router.post("/addNewNovt22", (req, res) => {
  console.log("New", req.body);
  const { date, description, amount, status, category } = req.body;
  const sql = `INSERT INTO novt22 (date, description, amount, status, category)
             VALUES ('${date}', '${description}', '${amount}', '${status}', '${category}')`;

  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred");
      return;
    }

    console.log(result);
    res.status(200).send("Data inserted successfully");
  });
});
router.delete('/deleteNovt22/:id', (req, res) => {
    const sql = `DELETE FROM novt22 WHERE id='${req.params.id}'`
    db.query(sql, (err, result) => {
        const sql1 = 'SELECT * FROM novt22';
        db.query(sql1, (err, result1) => {
            res.status(200).send(result1);
        });
    });
});

router.get('/getAllDataDect22', (req, res) => {
  console.log(req.body);
  const sql = `SELECT * FROM dect22`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).send(result);
  });
});

router.post("/addNewDect22", (req, res) => {
  console.log("New", req.body);
  const { date, description, amount, status, category } = req.body;
  const sql = `INSERT INTO dect22 (date, description, amount, status, category)
             VALUES ('${date}', '${description}', '${amount}', '${status}', '${category}')`;

  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred");
      return;
    }

    console.log(result);
    res.status(200).send("Data inserted successfully");
  });
});
router.delete('/deleteDect22/:id', (req, res) => {
    const sql = `DELETE FROM dect22 WHERE id='${req.params.id}'`
    db.query(sql, (err, result) => {
        const sql1 = 'SELECT * FROM dect22';
        db.query(sql1, (err, result1) => {
            res.status(200).send(result1);
        });
    });
});



module.exports = router