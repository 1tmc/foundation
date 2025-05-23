'use client'
import { toast } from 'react-toastify';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

interface FormData {
   name: string;
   email: string;
   phone: number;
   message: string;
}

const schema = yup.object({
   name: yup.string().required().label("Name"),
   email: yup.string().required().email().label("Email"),
   phone: yup.number().typeError('Phone number is required').required('Phone must be a number'),
   message: yup.string().required().label("Message"),
}).required();

const BecomeVolunteerForm = () => {
   const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({ resolver: yupResolver(schema) });

   const onSubmit = async (data: FormData) => {
      try {
         const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...data, formType: "volunteer" }),
         });

         const result = await response.json();

         if (result.success) {
            toast.success('Volunteer application sent successfully!', { position: 'top-center' });
            reset();
         } else {
            toast.error('Failed to send volunteer application.');
         }
      } catch (error) {
         console.error("Error:", error);
         toast.error('Something went wrong.');
      }
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)} className="volunteer-form">
         <div className="row">
            <div className="col-xl-9 mb-10">
               <p>Are you a humanitarian or passionate about the well-being of others? Join the family, let’s make a change today.</p>
            </div>
            <div className="col-sm-6">
               <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" {...register("name")} className="form-control" placeholder="Your Name" />
                  <p className="form_error">{errors.name?.message}</p>
               </div>
            </div>
            <div className="col-sm-6">
               <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" id="email" {...register("email")} className="form-control" placeholder="Email Address" />
                  <p className="form_error">{errors.email?.message}</p>
               </div>
            </div>
            <div className="col-sm-6">
               <div className="form-group">
                  <label htmlFor="phone_number">Phone Number</label>
                  <input type="text" id="phone_number" {...register("phone")} className="form-control" placeholder="Phone Number" />
                  <p className="form_error">{errors.phone?.message}</p>
               </div>
            </div>
            <div className="col-md-12">
               <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" {...register("message")} className="form-control" rows={3} placeholder="Write Your Message"></textarea>
                  <p className="form_error">{errors.message?.message}</p>
               </div>
            </div>
            <div className="col-md-12">
               <div className="form-group pt-10 mb-0">
                  <button type="submit" className="cr-btn ml-5">Send us a message</button>
               </div>
            </div>
         </div>
      </form>
   )
}

export default BecomeVolunteerForm;
