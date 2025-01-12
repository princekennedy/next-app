import { supabase } from "@/lib/supabase-client";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const { data, error } = await supabase.from("users1").select("*");

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }

        return NextResponse.json({ data }, { status: 200 });
    } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
