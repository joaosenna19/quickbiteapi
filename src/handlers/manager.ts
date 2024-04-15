// @ts-nocheck
import prisma from "../db";


export const getManagerById = async (req, res) => {
  try {
    const { id } = req.params;
    const manager = await prisma.manager.findUnique({
      where: { id: id },
    });
    res.json(manager);
  } catch (error) {
    res.status(500).json({ error: "Internal server error", error });
  }
};

export const createManager = async (req, res) => {
  try {
    const manager = await prisma.manager.create({
      data: req.body,
    });
    res.json(manager);
  } catch (error) {
    res.status(500).json({ error: "Internal server error", error });
  }
};
