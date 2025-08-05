import { Globe, Github, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface SocialLinks {
  linkedin?: string;
  github?: string;
  instagram?: string;
  website?: string;
}

interface TeamMember {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
  image: string;
  social: SocialLinks;
}

const SocialIcon = ({ type, url }: { type: keyof SocialLinks; url: string }) => {
  const icons = {
    linkedin: <Linkedin className="w-5 h-5" />,
    github: <Github className="w-5 h-5" />,
    instagram: <Instagram className="w-5 h-5" />,
    website: <Globe className="w-5 h-5" />
  };

  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href={url}
      className="hover:opacity-80 transition-all hover:text-orange-600"
      aria-label={type}
    >
      {icons[type]}
    </Link>
  );
};

export function TeamCard({ member }: { member: TeamMember }) {
  const socialLinks = member.social ? Object.entries(member.social) : [];

  return (
    <div className="rounded-lg border text-card-foreground shadow-sm border-secondary bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg hover:shadow-md transition-shadow">
      <div className="flex flex-col space-y-1.5 p-0 gap-0">
        <div className="h-full overflow-hidden">
          <Image
            alt={`${member.firstName} ${member.lastName}`}
            width={300}
            height={300}
            className="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
            src={member.image}
          />
        </div>
        <h3 className="tracking-tight py-6 pb-4 px-6 sm:text-base text-xl font-bold">
          <span>{member.firstName}</span>
          <span className="ml-2 text-orange-600">{member.lastName}</span>
        </h3>
      </div>
      <div className="p-6 pt-0 text-muted-foreground pb-6">{member.role}</div>
      {socialLinks.length > 0 && (
        <div className="flex items-center p-6 pt-0 gap-4 mt-auto">
          {socialLinks.map(([type, url]) => (
            <SocialIcon key={type} type={type as keyof SocialLinks} url={url} />
          ))}
        </div>
      )}
    </div>
  );
}