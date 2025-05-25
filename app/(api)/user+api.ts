import { neon } from "@neondatabase/serverless";


export async function POST(request: Request) {
    try {
        const sql = neon('postgresql://jsm_drive_owner:npg_hqTbx23VeDSA@ep-crimson-cake-a2d15fcl-pooler.eu-central-1.aws.neon.tech/jsm_drive?sslmode=require');
        const { name, email, clerkId } = await request.json();
        if (!name || !email || !clerkId) {
            return Response.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }
        // console.log('sql integration');

        const response = await sql`
        INSERT INTO users (
            name, 
            email, 
            clerk_id
        ) 
        VALUES (
            ${name}, 
            ${email},
            ${clerkId}
        );`;

        return new Response(JSON.stringify({ data: response }), {
            status: 201,
        });
        

    } catch(error) {
        console.log(error);
        return Response.json({ error: error }, { status: 500 });
    }
}


