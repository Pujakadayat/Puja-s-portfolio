import { use, useState } from "react"
import Project3 from "../assets/Project3.png"

function Contact(){

    const formInitialDetails = {
        name: '',
        email: '',
        phone:'',
        message: '',
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText]  = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        });
    }

    const handleSubmit = async (e) => {
e.preventDefault();
setButtonText("Sending...");
let response = await fetch ("http/", {
    method: "POST",
    headers:{
        "Content-Type":"Application",
    },
    body: JSON.stringify(formDetails),
});
setButtonText("Send");
let result = response.json();
setFormDetails(formInitialDetails);
if(result.code ===  200){
    setStatus({success: true, message:"Message sent successfuly"});
}else{
    setStatus({success: false, message:"Something went wrong, Please try again later!"});
}
    };

  return (
    <section id= "contact" className="py-16 px-4 bg-[#e1e3de] ">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-shrink-0"> 
<img a= {Project3} alt= "Contact Image" className="object-cover rounded-lg shadow-lg" width={250} height={250} />
            </div>

     {/* FORM SECTION */}
     <div className="w-full md:w-2/3">
   <h2 className="text-3xl font-bold text-black-800 mb-6">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <input type= "text"
   value={formDetails.name}
  placeholder="Name"
  onChange={(e) => onFormUpdate('name', e.target.value)}
  className="p-3 border border-gray-300  text-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400" />

          <input type= "email"
   value={formDetails.email}
  placeholder="Email Address"
  onChange={(e) => onFormUpdate('email', e.target.value)}
  className="p-3 border border-gray-300text-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400" />
  <input type= "tel"
   value={formDetails.phone}
  placeholder="Phone Number"
  onChange={(e) => onFormUpdate('phone', e.target.value)}
  className="p-3 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400" />
        </div>
<textarea rows='5'
value={formDetails.message}
placeholder="Message"
onChange={(e) => onFormUpdate("message", e.target.value)}
className="w-full p-3 border border-black-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
/>
     <button
   type="submit"
   className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
   >
    <span>{buttonText}</span>
   </button>

</form>
</div>
          </div>
          </section>
   
    );
}
export default Contact