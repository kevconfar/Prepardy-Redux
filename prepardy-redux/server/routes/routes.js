// const express = require('express')
// const router = express.Router()
// // const Clue = require('../connections/clues')


// // // GET ONE CLUE
// router.get('/clues/:id', async (req, res) => {
//     try {
//         const _id = req.params.id
//         const clue = await Clue.findOne({ _id })

//         console.log(clue)

//         if (!clue) {
//             return res.status(404).json({})
//         } else {
//             return res.status(200).json(clue)
//         }
//     } catch (error) {
//         return res.status(500).json({ "error": error })
//     }
// })

// // 

// module.exports = router