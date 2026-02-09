"use client";

import Image from "next/image";

const SocialLinks = ({ showLabels = false }: { showLabels?: boolean }) => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: "/images/instagram.png",
      url: "https://www.instagram.com/sehatsathi.in/",
      color: "text-pink-400 hover:text-pink-300",
    },
    {
      name: "WhatsApp",
      icon: "/images/whatsapp.png",
      url: "https://wa.me/+918003202028",
      color: "text-green-400 hover:text-green-300",
    },
    {
      name: "Facebook",
      icon: "/images/facebook.png",
      url: "https://www.facebook.com/sehatsathi.in/",
      color: "text-blue-400 hover:text-blue-300",
    },
    {
      name: "YouTube",
      icon: "/images/youtube.png",
      url: "https://www.youtube.com/@SehatSathi-c9k",
      color: "text-red-400 hover:text-red-300",
    },
    {
      name: "Google My Business",
      icon: "/images/google-my-business.png",
      url: "https://www.google.com/maps",
      color: "text-yellow-400 hover:text-yellow-300",
    },
  ];

  return (
    <div className="flex items-center justify-center gap-3">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          title={social.name}
          className={`text-2xl ${social.color} transition duration-300 hover:scale-110 inline-block`}
        >
          <Image
            src={social.icon}
            alt={social.name}
            width={30}
            height={30}
            className="rounded-lg shadow-2xl"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
