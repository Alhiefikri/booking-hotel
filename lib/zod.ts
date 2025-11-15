import { object, string, coerce, array } from "zod";

export const RoomSchema = object({
  name: string().min(1, "Name at least 1 characters"),
  description: string().min(50, "description at least 50 characters"),
  capacity: coerce.number().gt(0, "Capacity  must be greather than 0"),
  price: coerce.number().gt(0, "Price  must be greather than 0"),
  amenities: array(string()).nonempty(),
});
export const ReserverSchema = object({
  name: string().min(1, "Name at least 1 characters"),
  phone: string().min(10, "Name at least 10 number"),
});

export const ContactSchema = object({
  name: string().min(6, "Name at least 6 characters"),
  email: string()
    .min(6, "Email at least 6 characters")
    .email("Please enter a valid email"),
  subject: string().min(6, "Subject at least 6 characters"),
  message: string()
    .min(50, "Message at least 6 characters")
    .max(200, "Message maximum 200 characters"),
});
