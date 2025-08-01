import { use, useState , useRef} from "react"
import Project3 from "../assets/Project3.png"
import   HeroPic from "../assets/pujaapp.png"
import emailjs from '@emailjs/browser';
function Contact(){
  const form = useRef();
   const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pv7p5st', 'template_lw697nf', form.current, {
        publicKey: 'AFE3FR82Uv66xYySu',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatus({ success: false, message: 'Something went wrong, Please try again later!' });
        },
      );
  };
    const formInitialDetails = {
        name: '',
        email: '',
        phone:'',
        message: '',
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        });
    }


  return (
    <section id= "contact" className="py-16 px-4 bg-[#f8f8f8] ">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-shrink-0"> 
<img src = {HeroPic}  alt= "Contact Image" className="object-cover rounded-lg shadow-lg" width={350} height={350} />

            </div>

     {/* FORM SECTION */}
     <div className="w-full md:w-2/3">
   <h2 className="text-3xl font-bold text-black-800 mb-6">Get in Touch</h2>

              <form  onSubmit={sendEmail} className="space-y-6" ref = {form} >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <input type= "text"
   value={formDetails.name}
  placeholder="Name"
  name= "from_name"
  onChange={(e) => onFormUpdate('name', e.target.value)}
  className="p-3 border border-gray-300  text-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400" />

          <input type= "email"
   value={formDetails.email}
  placeholder="Email Address"
  name= "from_email"
  onChange={(e) => onFormUpdate('email', e.target.value)}
  className="p-3 border border-gray-300text-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400" />
  <input type= "tel"
   value={formDetails.phone}
  placeholder="Phone Number"
  name = "contact_no"
  onChange={(e) => onFormUpdate('phone', e.target.value)}
  className="p-3 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400" />
        </div>
<textarea rows='5'
value={formDetails.message}
placeholder="Message"
name= "message"
onChange={(e) => onFormUpdate("message", e.target.value)}
className="w-full p-3 border border-black-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
/>
     <button
   type="submit"
   className="px-6 py-3 bg-black text-white rounded-md hover:bg-indigo-700 transition duration-300"
   >
   Send
   </button>

</form>
</div>
          </div>
          </section>
   
    );
}
export default Contact