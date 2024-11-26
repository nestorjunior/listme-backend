import supabase from "../config/connect";
import { User } from "../models/User";

export const createUser = async (
  email: string,
  password: string
): Promise<User> => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) throw new Error(error.message);

  return {
    id: data.user?.id || "",
    email: data.user?.email || "",
    password_hash: "",
    name: "",
    bio: null,
    profile_picture: null,
  };
};

export const getUserById = async (id: string): Promise<User | null> => {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);

  return data;
};
