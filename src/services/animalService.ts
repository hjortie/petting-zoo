import axios from "axios";
import type { IAnimal } from "../models/IAnimal";

export const get = async () => {
  try {
    const response = await axios.get<IAnimal[]>(
      "https://animals.azurewebsites.net/api/animals"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
