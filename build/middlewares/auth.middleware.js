"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = requireAuth;
async function requireAuth(req, res, next) {
    try {
        const token = req.cookies.session;
        if (!token) {
            res.status(401).json({ message: "Unauthorized" });
            return; // Don't return the response, just stop here
        }
        // Validate and attach user...
        req.user = {}; // Example
        next();
    }
    catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
}
