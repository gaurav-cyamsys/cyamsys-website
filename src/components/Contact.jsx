import React from "react";
import { ContactUsForm } from "./form";

function Contact() {
    const contactInfo = [
        {
            icon: (
                <svg className="w-6 h-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
            ),
            title: "Email",
            description: "Our friendly team is here to help.",
            value: "hi@cyamsys.com",
            href: "mailto:hi@cyamsys.com",
        },
        {
            icon: (
                <svg className="w-6 h-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
            ),
            title: "Office",
            description: "Come say hello at our office HQ.",
            value: "B-18, Sector 69, Noida, Chotpur, Uttar Pradesh 201301",
            href: "https://www.google.com/maps/place/CYAMSYS+TECHNOLOGIES+PRIVATE+LIMITED/@28.613093,77.3931703,18z/data=!4m6!3m5!1s0x390cfb8133eba5a9:0xb19d402f1f3553a3!8m2!3d28.6130907!4d77.3944363!16s%2Fg%2F11rfrsvzlr?authuser=0&entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D",
        },
        {
            icon: (
                <svg className="w-6 h-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
            ),
            title: "Phone",
            description: "Mon-Fri from 9am to 6pm.",
            value: "+91-9917565228",
            href: "tel:+91-9917565228",
        },
    ];

    return (
        <div className="w-full min-h-screen flex flex-col justify-center snap-center snap-mandatory max-w-6xl mx-auto py-10 px-3 lg:px-12 overflow-hidden">
            <section className="scroll-snap-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                    <div className="flex flex-col space-y-8">
                        {contactInfo.map((item, index) => (
                            <div key={index} className="flex items-start space-x-4 p-6 rounded-lg shadow-lg">
                                <span className="p-3 rounded-full">{item.icon}</span>
                                <div>
                                    <h2 className="text-lg font-semibold text-white">{item.title}</h2>
                                    <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                                    {item.href ? (
                                        <a href={item.href} className="text-blue-400 text-sm mt-1">{item.value}</a>
                                    ) : (
                                        <p className="text-blue-400 text-sm mt-1">{item.value}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <div className="p-1 md:p-4 rounded-lg shadow-lg">
                        <ContactUsForm />
                    </div>
                </div>
                <div className="text-center border-t pt-4 text-sm">
                    <p>&copy; 2025 Cyamsys Technologies Private Limited. All Rights Reserved.</p>
                </div>
            </section>
        </div>
    );
}

export default Contact;
