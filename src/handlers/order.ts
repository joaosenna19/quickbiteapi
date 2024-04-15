// @ts-nocheck
import prisma from "../db";

export const createOrder = async (req, res) => {
  try {
    const order = await prisma.order.create({
      data: req.body,
    });
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: "Internal server error", error });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await prisma.order.findUnique({
      where: { id: id },
    });
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: "Internal server error", error });
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await prisma.order.findMany();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Internal server error", error });
  }
};

export const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await prisma.order.update({
      where: { id: id },
      data: req.body,
    });
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: "Internal server error", error });
  }
};
