// THIS FILE CONTAINS ALL THE HANDLERS FOR THE CLUE ROUTES

const Clues = require("../connections/clues.js");




const getCluesByAnswer = async (req, res) => {

    try {
        const ans = req.params.answer;
        const clues = await Clues.find({answer: ans});

        res.status(200).json(clues);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


const getCluesByCategory = async (req, res) => {

    try {
        
        const term = " " + req.params.category + " ";
        const clues = await Clues.find({ category: { $regex: term, $options: "i"}});
        res.status(200).json(clues);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }


}


const getCluesByQuestion = async (req, res) => {         // GET CLUES BY QUESTION CONTENT
     
    try {
        const str = " " + req.params.str + " ";

        const clues = await Clues.find({ question: { $regex: str, $options: "i" } })
        res.status(200).json(clues);

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getNumberOfClues = async (req, res) => {

    try {

        const num = parseInt(req.params.number);
        const clues = await Clues.find().limit(num);

        res.status(200).json(clues);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}


const getCluesById = async (req, res) => {

    try {

        const id = req.params.id // ORIGINAL: depends on the ID value being calcuated in the React portion
        const clues = await Clues.find({ gameID: id })

        res.status(200).json(clues);

    } catch (error) {

        res.status(404).json({ message: error.message });
    }
}

const getSimilarClues = async (req, res) => {

    const term = req.params.str;
    const num = parseInt(req.params.number);

    try {

        const clues = await Clues.find({}).filter((clue) => clue.question.includes(term) || clue.category.includes(term)).limit(num);
        res.status(200).json(clues);

    } catch (error) {
        res.status(404).json(clues);
    }
}


const getCluesByValue = async (req, res) => {
    try {

        const diff = req.params.value;
        const clues = await Clues.find({value: value}).limit(61)
        res.status(200).json(clues);

    } catch (error) {

        res.status(404).json({ message: error.message });
    }
}

module.exports = { getCluesById, getCluesByValue, getCluesByCategory, getNumberOfClues, getCluesByAnswer, getCluesByQuestion }



