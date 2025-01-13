import { User } from "@/app/models/interfaces";
import { supabase } from "@/lib/supabase-client";
import { NextResponse } from "next/server";

/**
 * Fetches a user from the "users1" table in the database by user ID.
 * 
 * @param {string} id - The ID of the user to retrieve.
 * @returns {Promise<User|null>} The user object if found, otherwise null.
 */
export async function getUserByID(id: string) {
    // Query the "users1" table for a user with the specified user ID
    const { data } = await supabase.from("users1").select("*").eq('user_id', id);

    // If user data is retrieved, return the first entry (assuming unique user IDs)
    if (data) {
        return data[0];
    } else {
        // Return null if no user data is found
        return null;
    }
}

/**
 * Retrieves the current authenticated user and their corresponding data from the database.
 * 
 * @returns {Promise<User|null>} The user object if authenticated and found in the database, otherwise null.
 */
export async function getUser() {
    // Fetch the current authenticated user from Supabase auth
    const { data: { user } } = await supabase.auth.getUser();
    
    // If a user is authenticated, fetch additional user data from the database
    if (user) {
        return getUserByID(user.id);
    } else {
        // Return null if no user is authenticated
        return null;
    }
}
/**
 * Fetches all users from the "users1" table in the database.
 * 
 * @returns {Promise<User[]>} An array of user objects if successful, otherwise an empty array.
 */
export async function getUsers() {
    // Query the "users1" table for all entries
    const { data } = await supabase.from("users1").select("*");

    // Check if data is received and return it, otherwise return an empty array
    if (data) {
        return data;
    } else {
        return [];
    }
}

export async function getCustomers() {
    // Query the "users1" table for all entries
    const { data } = await supabase.from("users1").select("*");

    // Check if data is received and return it, otherwise return an empty array
    if (data) {
        return data;
    } else {
        return [];
    }
}


/**
 * Updates a user in the "users1" table in the database with the specified user object.
 * 
 * @param {User} customer - The user object to update in the database.
 * @returns {Promise<string>} A string indicating the success or failure of the update operation
 */
export async function updateCustomerApi(customer: User) {
    // Update the user in the database with the specified user object
    const { error: dbError } = await supabase.from('users1').update(customer).eq('user_id', customer.user_id);

    // If an error occurs, return the error message
    if (dbError) {
        return dbError.message;
    }

    // Return a success message if the update is successful
    return customer.name + ' is updated successfully';
}

export async function getPropertyByKey(key: string) {
      const {data} = await supabase.from("properties").select("*").eq('key', key);
      if(data){
          return data;
      }else{
        return [];
      }
  }


// export async function GET() {
//     try {
//         const { data, error } = await supabase.from("users1").select("*");

//         if (error) {
//             return NextResponse.json({ error: error.message }, { status: 400 });
//         }

//         return NextResponse.json({ data }, { status: 200 });
//     } catch (error) {
//         console.error("Error fetching data:", error);
//         return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
//     }
// }