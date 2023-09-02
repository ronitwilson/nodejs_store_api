const notFound = (req, res) => {
    console.log("not found route")
    return res.status(400).json({msg: "route not found"})
}

module.exports = notFound