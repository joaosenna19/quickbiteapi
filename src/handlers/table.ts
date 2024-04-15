// @ts-nocheck

import prisma from "../db";

export const getTables = async (req, res) => {
  try {
    const tables = await prisma.table.findMany();
    res.json(tables);
  } catch (error) {
    
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getTableById = async (req, res) => {
  try {
    const { id } = req.params;
    const table = await prisma.table.findUnique({
      where: { id: id },
    });
    res.json(table);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

export const createTable = async (req, res) => {
  try {
    const table = await prisma.table.create({
      data: req.body,
    });
    res.json(table);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error", error });
  }
};

export const updateTable = async (req, res) => {
  try {
    const { id } = req.params;
    const table = await prisma.table.update({
      where: { id: id },
      data: req.body,
    });
    res.json(table);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}


export const deleteTable = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.table.delete({
      where: { id: id },
    });
    res.json({ message: "Table deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}