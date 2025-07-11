import { headers } from "next/headers";

export async function GET() {
    // const requestHeaders = request.headers;
    // console.log(requestHeaders.get("Authorization"))

    const headerList = await headers();
    console.log(headerList.get("Authorization"));
    return new Response("<h1>Profile API data</h1>", {
        headers: {
            "Content-type": "text/html",
            "Set-Cookie":"theme=dark"
        }
    });
}