// @ts-nocheck
import prisma from "../db";

export const createReservation = async (req, res) => {
  const { date, time, nOfCustomers, customerName, reservationCode } = req.body;

  try {
    const availableTable = await prisma.table.findFirst({
      where: {
        isAvailable: true,
        numOfSeats: {
          gte: nOfCustomers,
        },
      },
    });

    if (!availableTable) {
      return res
        .status(400)
        .json({ error: "No available tables found" });
    }

    const reservation = await prisma.reservation.create({
      data: {
        tableId: availableTable.id,
        date: date,
        customerName: customerName,
        reservationCode: reservationCode,
        nOfCustomers: nOfCustomers,
        isFullfilled: false,
        time: time,
      },
    });

    await prisma.table.update({
      where: {
        id: availableTable.id,
      },
      data: {
        isAvailable: false,
      },
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
    const reservations = await prisma.reservation.findMany({
      include: {
        Table: true,
      },
    });
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
      data: {
        isFullfilled: true,
      },
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
