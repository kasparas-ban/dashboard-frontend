import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useProfileInfo() {
  return useQuery({
    queryKey: ["profileInfo"],
    queryFn: async () => {
      const { data } = await axios.get(
        "http://localhost:3001/api/profileInfo"
      );
      return data;
    },
  });
};

export function useContacts() {
  return useQuery({
    queryKey: ["contacts"],
    queryFn: async () => {
      const { data } = await axios.get(
        "http://localhost:3001/api/allFriends"
      );
      return data;
    },
  });
};