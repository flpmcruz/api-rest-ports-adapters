import express from "express";
import { AppRoutes } from "./presentation/Routes.js";
import { Server } from "./presentation/Server.js";

const server = new Server(express(), 3000, AppRoutes.routes());
server.start();
