import fs from 'fs'

export async function GET({ params }){
  const slug = params.slug;
  // return new Response("teehee", {status: 200});

  try {
    let file = await fs.readFileSync('dynamic/' + slug)    
    return new Response(file, {
      status:200,
      headers: {
        "Content-type" : `image/${slug.split('.').pop()}`,
      },
    })
  } catch (error) {
    return new Response("", {
      status:404,
    })
  }
}
