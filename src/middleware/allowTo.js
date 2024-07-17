function allow(...arr) {
    return (req, res, next) => {
        if (arr.includes(req.user.role)) {
            next()
        } else {
            res.status(401).json({ message: "not authorizted" })
        }
    }
}
export default allow;