import { getConnection } from "./../database/database";

const getLanguages = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT id, name, programmer FROM languaje"
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getLanguage = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT id, name, programmer FROM languaje WHERE id = ?",
      id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const registerLanguage = async (req, res) => {
  try {
    const { name, programmer, id } = req.body;
    const language = { name, programmer, id };
    const connection = await getConnection();
    const result = await connection.query(
      "INSERT INTO languaje SET ?",
      language
    );

    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const deleteLanguage = async (req, res) => {
    try {
      const { id } = req.params;
      const connection = await getConnection();
      const result = await connection.query(
        "DELETE FROM languaje WHERE id = ?",id
      );
      res.json(result);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

export const methods = {
  getLanguages,
  registerLanguage,
  getLanguage,
  deleteLanguage
};
