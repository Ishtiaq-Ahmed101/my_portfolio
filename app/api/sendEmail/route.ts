import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'awais9027prince@gmail.com',
    pass: 'your-password',
  },
});

export async function POST(request: any) {
        const data = await request.json()

        return Response.json({ message: 'POST request received', data: data.name});
      }


// export async function GET(){
//         return(

//                 Response.json({message: 'working'})
//         )
// }
