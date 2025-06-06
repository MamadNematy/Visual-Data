import React from "react";
import "./TeamSection.css";
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

const teamMembers = [
  {
    name: "همایون شریفی",
    role: "مدیر ارشد اجرایی",
    img: "/assets/images/team/team-1.jpg",
    socials: {
      linkedin: "#",
      instagram: "#",
      facebook: "#",
      twitter: "#",
    },
  },
  {
    name: "مریم شاهین پور",
    role: "CTO",
    img: "/assets/images/team/team-2.jpg",
    socials: {
      linkedin: "#",
      instagram: "#",
      facebook: "#",
      twitter: "#",
    },
  },
  {
    name: "پوریا طباطبایی",
    role: "مدیر تولید",
    img: "/assets/images/team/team-3.jpg",
    socials: {
      linkedin: "#",
      instagram: "#",
      facebook: "#",
      twitter: "#",
    },
  },
  {
    name: "نازنین احمدی",
    role: "حسابدار",
    img: "/assets/images/team/team-4.jpg",
    socials: {
      linkedin: "#",
      instagram: "#",
      facebook: "#",
      twitter: "#",
    },
  },
];

export default function TeamSection() {
  return (
    <section className="team-section">
      <div className="section-title">
        <h2>تیم ما را بررسی کنید</h2>
        <span>تیم</span>
      </div>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="image-container">
              <img src={member.img} alt={member.name} />
              {member.socials && Object.keys(member.socials).length > 0 && (
                <div className="social-icons">
                  {member.socials.linkedin && (
                    <a href={member.socials.linkedin}>
                      <FaLinkedin />
                    </a>
                  )}
                  {member.socials.instagram && (
                    <a href={member.socials.instagram}>
                      <FaInstagram />
                    </a>
                  )}
                  {member.socials.facebook && (
                    <a href={member.socials.facebook}>
                      <FaFacebook />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a href={member.socials.twitter}>
                      <FaTwitter />
                    </a>
                  )}
                </div>
              )}
            </div>
            <div className="info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
