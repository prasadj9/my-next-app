import { comments } from "../data";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const comment = comments.find((c) => c.id == parseInt(id));
    return Response.json(comment)
}

export async function PATCH(request:Request, {params} : {params: Promise<{id:string}>}) {
    const {id} = await params;
    const body = await request.json();

    const commentIndex = comments.findIndex(c => c.id === parseInt(id));

    comments[commentIndex].text = body.text;
    return Response.json(comments[commentIndex]);
}

export async function DELETE(request: Request, {params} : {params : Promise<{id:string}>}) {
    const {id} = await params;
    const commentIndex = comments.findIndex(c => c.id === parseInt(id));
    const deletedComment = comments[commentIndex]; 
    comments.splice(commentIndex, 1);

    return Response.json(deletedComment)

}