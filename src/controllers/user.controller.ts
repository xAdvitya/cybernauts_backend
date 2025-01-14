import User from "../models/user.model";
import { Request, Response } from "express";

export const getUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const allUsers = await User.find({});
    return res.status(200).json(allUsers);
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "unknown error";
    return res
      .status(500)
      .json({ message: "error finding users", error: errorMessage });
  }
};

export const createUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const {
      username,
      age,
      hobbies,
    }: { username: string; age: number; hobbies: string[] } = req.body;

    if (!username || age == undefined || !Array.isArray(hobbies)) {
      return res.status(400).json({ message: "Invalid input" });
    }

    const newUser = new User({ username, age, hobbies });
    const savedUser = await newUser.save();
    return res.status(201).json(savedUser);
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return res
      .status(500)
      .json({ message: "Error creating user", error: errorMessage });
  }
};

export const updateUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const { userId } = req.params;

    const {
      username,
      age,
      hobbies,
    }: { username: string; age: number; hobbies: string[] } = req.body;

    if (!username || age == undefined || !Array.isArray(hobbies)) {
      return res.status(400).json({ message: "Invalid input" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { username, age, hobbies },
      { new: true, runValidators: true },
    ).exec();

    if (!updatedUser) {
      return res.status(404).json({ message: "user not updated" });
    }

    return res.status(200).json(updatedUser);
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return res
      .status(500)
      .json({ message: "Error creating user", error: errorMessage });
  }
};

export const deleteUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const { userId } = req.params;
    const deletedUser = await User.findByIdAndDelete(userId).exec();

    if (!deletedUser) {
      return res.status(404).json({ message: "user not found" });
    }

    return res.status(204).send();
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return res
      .status(500)
      .json({ message: "Error deleting user", error: errorMessage });
  }
};
