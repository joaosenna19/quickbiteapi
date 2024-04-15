// @ts-nocheck
import prisma from "../db";

export const createFood = async (req, res) => {
  try {
    const food = await prisma.food.create({
      data: req.body,
    });
    res.json(food);
  } catch (error) {
    res.status(500).json({ error: "Internal server error", error });
  }
};

export const getFoodById = async (req, res) => {
  try {
    const { id } = req.params;
    const food = await prisma.food.findUnique({
      where: { id: id },
    });
    res.json(food);
  } catch (error) {
    res.status(500).json({ error: "Internal server error", error });
  }
};

export const getFoods = async (req, res) => {
  try {
    const foods = await prisma.food.findMany();
    res.json(foods);
  } catch (error) {
    res.status(500).json({ error: "Internal server error", error });
  }
};
