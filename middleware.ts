import { NextResponse } from "next/server";
// import { createServerSupabaseClient } from "@/lib/supabase-server";
import { supabase } from "./lib/supabase-client";
import type { NextRequest } from "next/server";



export async function middleware(req: NextRequest) { 
  const { data: { session } } = await supabase.auth.getSession();
  const { data: { user } } = await supabase.auth.getUser()  
  if (
    req.nextUrl.pathname.startsWith("/admin") || 
    req.nextUrl.pathname.startsWith("/customer")
  ) {
    console.log(user)
    // if (!user && !session) {
    //   return NextResponse.redirect(new URL("/login", req.url));  
    // }
  }
  return NextResponse.next();  
}

export const config = {
  matcher: ["/admin/:path*", "/customer/:path*"], 
};

