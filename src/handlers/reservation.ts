// @ts-nocheck
import prisma from "../db";

export const createReservation = async (req, res) => {
  try {
    const reservation = await prisma.reservation.create({
      data: req.body,
    });

    res.json(reservation);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error", error });
  }
};

export const getReservationById = async (req, res) => {
  try {
    const { id } = req.params;
    const reservation = await prisma.reservation.findUnique({
      where: { id: id },
    });
    res.json(reservation);
  } catch (error) {
    res.status(500).json({ error: "Internal server error", error });
  }
};

export const getReservations = async (req, res) => {
  try {
    const reservations = await prisma.reservation.findMany();
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ error: "Internal server error", error });
  }
};

export const updateReservation = async (req, res) => {
  try {
    const { id } = req.params;
    const reservation = await prisma.reservation.update({
      where: { id: id },
      data: req.body,
    });
    res.json(reservation);
  } catch (error) {
    res.status(500).json({ error: "Internal server error", error });
  }
};

export const deleteReservation = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.reservation.delete({
      where: { id: id },
    });
    res.json({ message: "Reservation deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error", error });
  }
};
