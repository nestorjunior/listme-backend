import supabase from "../config/connect";
import bcrypt from "bcrypt";
import { User } from "../models/User";

export const createUser = async (
  email: string,
  password: string,
  name: string
): Promise<User> => {
  // 1. Validate: email registered?
  const { data: existingUser, error: existingUserError } = await supabase
    .from("users")
    .select("id")
    .eq("email", email)
    .single();

  if (existingUser) {
    throw new Error("Email already registered");
  }
  // 2. Encript password
  const passwordHash = await bcrypt.hash(password, 10);

  // 3. Insert new user to database
  const { data, error } = await supabase
    .from("users")
    .insert([
      {
        email,
        password_hash: passwordHash,
        name,
      },
    ])
    .select()
    .single();
  if (error) {
    throw new Error(`Error create user: ${error.message}`);
  }

  // 4. Return data user
  return {
    id: data.id,
    email: data.email,
    name: data.name,
  };
};
