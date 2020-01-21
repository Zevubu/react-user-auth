const path = require('path');
const Router = require('express').Router();
const apiRoutes = require('./api/index');
const authRoutes = require('./auth/index')


Router.use("/api", apiRoutes);
Router.use("/auth", authRoutes);
