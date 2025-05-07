import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function SocialMediaLinks() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "#facebook"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "#twitter"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "#linkedin"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "#instagram"
    }
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map((social, index) => {
        const IconComponent = social.icon;
        return (
          <a
            key={index}
            href={social.url}
            className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer"
            aria-label={social.name}
          >
            <IconComponent size={16} className="text-white" />
          </a>
        );
      })}
    </div>
  );
}