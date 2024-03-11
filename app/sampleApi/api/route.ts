export async function GET(){
 const data = 'I got some serverside Data';

    return new Response(JSON.stringify(data))
}