import { RequestHandler } from "express";

const STORAGE = {
  time: 0,
};

export const getTime: RequestHandler = (req, res, next) => {
  res.status(200).send(STORAGE);
};

export const addTime: RequestHandler = (req, res, next) => {
  const reqTime = req.body.time || 0;
  STORAGE.time = STORAGE.time + reqTime;
  res.status(200).send(STORAGE);
};
