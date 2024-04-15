// @ts-nocheck

import prisma from "../db";

export const createWaiter = async (req, res) => {
  try {
    const waiter = await prisma.waiter.create({
      data: req.body,
    });
    res.json(waiter);
  } catch (error) {
    res.status(500).json({ error: "Internal server error", error });
  }
};

export const getWaiterById = async (req, res) => {
  try {
    const { id } = req.params;
    const waiter = await prisma.waiter.findUnique({
      where: { id: id },
    });
    res.json(waiter);
  } catch (error) {
    res.status(500).json({ error: "Internal server error", error });
  }
};

export const getWaiters = async (req, res) => {
  try {
    const waiters = await prisma.waiter.findMany();
    res.json(waiters);
  } catch (error) {
    res.status(500).json({ error: "Internal server error", error });
  }
};
