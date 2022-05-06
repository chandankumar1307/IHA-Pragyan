import Test from "../Schema/test.js";

export const getTests = async (req, res) => {
  try {
    const AllTests = await Test.find();
    res.send(200).json(AllTests);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTests = async (req, res) => {
  const tests = req.body;
  const newTest = await new Test(tests);
  try {
    newTest.save();
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
