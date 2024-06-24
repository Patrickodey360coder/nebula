import Contact from '../../../../models/Contacts'
import dbConnect from '../../../../libs/mongoose' 

export async function GET() {
  try {
    await dbConnect();
    const contact = await Contact.find({})
    return new Response(JSON.stringify(contact, {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }));
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}

export async function POST(request){
  try {
    await dbConnect();
    const contacts = await request.json();
    const newContact = Contact(contacts);
    newContact.save()
    return new Response(JSON.stringify(newContact), {message: "Data has been sent"}, {
      status: 201,
      headers: {
        'Content-Type' : 'application/json'
      }
    })
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}